import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { message, history = [] } = await req.json()

  const { data: company } = await supabase
    .from('companies')
    .select('system_prompt')
    .eq('slug', params.slug)
    .single()

  if (!company) {
    return NextResponse.json({ error: 'Company not found' }, { status: 404 })
  }

  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: company.system_prompt }] },
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
