import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const GEMINI_KEY = process.env.GEMINI_API_KEY
const GEMINI_CHAT_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${GEMINI_KEY}`
const GEMINI_EMBED_URL = `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${GEMINI_KEY}`

async function embedText(text: string): Promise<number[]> {
  const res = await fetch(GEMINI_EMBED_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'models/text-embedding-004',
      content: { parts: [{ text }] }
    })
  })
  const data = await res.json()
  return data.embedding.values
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { message, history = [] } = await req.json()
  const { slug } = params

  // Load company system prompt
  const { data: company } = await supabase
    .from('companies')
    .select('system_prompt')
    .eq('slug', slug)
    .single()

  if (!company) {
    return NextResponse.json({ error: 'Company not found' }, { status: 404 })
  }

  // Embed the user's message and find relevant chunks
  let contextBlock = ''
  try {
    const queryEmbedding = await embedText(message)
    const { data: chunks } = await supabase.rpc('match_chunks', {
      query_embedding: queryEmbedding,
      company_slug_filter: slug,
      match_count: 5
    })
    if (chunks && chunks.length > 0) {
      contextBlock = '\n\n## Relevant information:\n' +
        chunks.map((c: { content: string }) => c.content).join('\n\n')
    }
  } catch {
    // If RAG fails, fall back to system prompt only
  }

  const fullSystemPrompt = company.system_prompt + contextBlock

  // Call Gemini
  const response = await fetch(GEMINI_CHAT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: fullSystemPrompt }] },
      contents: [
        ...history.map((h: { role: string; content: string }) => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      generationConfig: { maxOutputTokens: 400 }
    })
  })

  const result = await response.json()
  const reply = result.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response.'
  return NextResponse.json({ reply })
}
