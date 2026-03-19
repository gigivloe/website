import { Lang } from "./translations";

export const homeContent = {
  EN: {
    hero: {
      tag: "BRUSSELS, BELGIUM · B2B AI AUTOMATION",
      title: "Small businesses deserve AI too.",
      desc: "We help local businesses save time, reduce costs, and grow faster by implementing practical AI that actually works in their daily operations.",
      primaryBtn: "Get a free demo",
      secondaryBtn: "See what we do",
    },
    services: {
      label: "01 / SOLUTIONS",
      title: "You're losing time on things AI can handle.",
      hoverText: "Hover over a service to see how it solves your problem.",
      list: [
        {
          num: "01",
          name: "Chatbot",
          tag: "WEBSITE SUPPORT",
          problem: "Are prospects leaving your website without buying, booking, or getting an answer? Every unanswered question is a lost sale.",
          solution: "Gradient deploys a custom AI chatbot that answers questions, qualifies leads, and books appointments 24/7, in Dutch, French, and English.",
          stat: "3x more leads captured",
          demoText: "LIVE DEMO",
        },
        {
          num: "02",
          name: "Voice Agent",
          tag: "PHONE RECEPTION",
          problem: "Missing calls during meetings? Each missed call is a missed opportunity and hiring a receptionist costs €30K+ per year.",
          solution: "Our AI Voice Agent answers every call, schedules appointments, and routes inquiries to the right person automatically.",
          stat: "100% call rate",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "03",
          name: "Email Automation",
          tag: "FOLLOW UP",
          problem: "Manual follow up emails take hours every week. Meanwhile, leads go cold and appointments get missed.",
          solution: "Gradient automates every follow up, confirmation, and nurture sequence triggered by customer actions, not manual effort.",
          stat: "5 to 10 hrs saved",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "04",
          name: "Invoicing Agent",
          tag: "INVOICING & FINANCE",
          problem: "Creating and sending invoices takes time and often gets delayed. Small mistakes, missing follow ups, and unpaid invoices hurt your cash flow, while you're busy doing actual work.",
          solution: "Gradient automatically creates, sends, and follows up on invoices based on your jobs, meetings, or completed work, ensuring you get paid faster, without manual effort.",
          stat: "35% faster payments",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "05",
          name: "Virtual Employee",
          tag: "INTERNAL OPERATIONS",
          problem: "Spending Sunday evenings assembling reports from 5 different spreadsheets? That is not analysis, that is admin.",
          solution: "Your virtual employee handles everything from internal chatting about company information to generating tailored reports and data driven recommendations.",
          stat: "Reports in minutes",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
      ]
    },
    results: {
      label: "02 / RESULTS",
      title: "Real Businesses. Measurable Outcomes.",
      list: [
        {
          company: "Calvet",
          industry: "Industrial Manufacturing",
          service: "Chatbot",
          initial: "C",
          quote: "The Gradient chatbot now supports visitors on our website 24/7. Potential customers immediately get answers and can book a call without waiting for our team. It has significantly improved how we capture and qualify new leads.",
          statLabel: "Lead Capture",
          externalLogo: "https://calvet.eu/wp-content/uploads/2024/06/calvet_logo.svg",
        },
        {
          company: "Emergo",
          industry: "Engineering & Technical Services",
          service: "AI Voice Agent",
          initial: "E",
          quote: "Gradient built an AI voice agent that now handles our reception. It answers incoming calls, books appointments, and routes technical questions to the right employee in Dutch, French, or English. This reduced our reception workload and lowered operational costs.",
          statLabel: "Multilingual Reception",
          externalLogo: "https://www.emergo.be/wp-content/uploads/2017/05/logo-emergo-group_0.jpg",
        },
      ]
    },
    whyUs: {
      label: "03 / WHY US",
      title: "Why Gradient Works.",
      list: [
        { tag: "LANGUAGE", title: "Multilingual by Default" },
        { tag: "INTEGRATION", title: "Seamless Integration" },
        { tag: "SECURITY", title: "Your data is protected" },
        { tag: "DEPLOYMENT", title: "Live in 14 Days" },
      ]
    },
    process: {
      label: "04 / THE PROCESS",
      title: "We make AI simple. You focus on your business.",
      desc: "We handle everything from analysis to deployment. No technical knowledge required from your side.",
      steps: [
        { step: "01", title: "Analyse", desc: "We take the time to understand your business in depth by asking the right questions and mapping your current processes." },
        { step: "02", title: "Identify", desc: "We identify the key inefficiencies and recurring tasks that are costing your business time and money." },
        { step: "03", title: "Build", desc: "We develop tailored AI solutions — from chatbots and voice agents to invoicing and internal tools — aligned with your specific needs." },
        { step: "04", title: "Integrate", desc: "We integrate these solutions into your existing systems (CRM, ERP, email, etc.) without disrupting operations, while ensuring your data remains secure." },
        { step: "05", title: "Result", desc: "You save time, reduce costs, and create room for growth — with AI running reliably in the background." },
      ],
      ctaBtn: "Book a demo"
    },
    cta: {
      label: "NOT SURE WHERE TO START?",
      title: "Book a 15 Min discovery call",
      desc: "We will identify your biggest automation opportunities. No commitment required.",
    }
  },
  NL: {
    hero: {
      tag: "BRUSSEL, BELGIË · B2B AI AUTOMATISATIE",
      title: "Kleine bedrijven verdienen ook AI.",
      desc: "Wij helpen lokale bedrijven tijd te besparen, kosten te verlagen en sneller te groeien door praktische AI te implementeren die echt werkt in hun dagelijkse processen.",
      primaryBtn: "Krijg een gratis demo",
      secondaryBtn: "Bekijk wat we doen",
    },
    services: {
      label: "01 / OPLOSSINGEN",
      title: "Je verliest tijd aan dingen die AI kan overnemen.",
      hoverText: "Beweeg over een dienst om te zien hoe het jouw probleem oplost.",
      list: [
        {
          num: "01",
          name: "Chatbot",
          tag: "WEBSITE ONDERSTEUNING",
          problem: "Verlaten bezoekers je website zonder te kopen, te boeken of een antwoord te krijgen? Elke onbeantwoorde vraag is een gemiste verkoop.",
          solution: "Gradient installeert een op maat gemaakte AI chatbot die vragen beantwoordt, leads kwalificeert en afspraken inplant 24/7, in het Nederlands, Frans en Engels.",
          stat: "3x meer leads verzameld",
          demoText: "LIVE DEMO",
        },
        {
          num: "02",
          name: "Voice Agent",
          tag: "TELEFOON ONTHAAL",
          problem: "Oproepen missen tijdens vergaderingen? Elke gemiste oproep is een gemiste kans en het aannemen van een receptionist kost €30K+ per jaar.",
          solution: "Onze AI Voice Agent beantwoordt elke oproep, plant afspraken in en stuurt vragen automatisch door naar de juiste persoon.",
          stat: "100% antwoord ratio",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "03",
          name: "Email Automatisatie",
          tag: "OPVOLGING",
          problem: "Manuele opvolgingsmails kosten elke week uren tijd. Ondertussen worden leads koud en worden afspraken gemist.",
          solution: "Gradient automatiseert elke opvolging, bevestiging en nurture reeks geactiveerd door klantacties, niet door manuele inzet.",
          stat: "5 tot 10 uur bespaard",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "04",
          name: "Facturatie Agent",
          tag: "FACTURATIE & FINANCIËN",
          problem: "Het maken en versturen van facturen kost tijd en loopt vaak vertraging op. Kleine fouten, ontbrekende opvolging en onbetaalde facturen schaden je cashflow, terwijl je druk bezig bent met het echte werk.",
          solution: "Gradient creëert, verstuurt en volgt facturen automatisch op, gebaseerd op je jobs, meetings of uitgevoerd werk, zodat je sneller betaald wordt, zonder manuele moeite.",
          stat: "35% sneller betaald",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
        {
          num: "05",
          name: "Virtuele Werknemer",
          tag: "INTERNE OPERATIES",
          problem: "Spendeer je zondagavonden aan het samenstellen van rapporten uit 5 verschillende spreadsheets? Dat is geen analyse, dat is administratie.",
          solution: "Je virtuele werknemer regelt alles, van intern chatten over bedrijfsinformatie tot het genereren van rapporten op maat en datagedreven aanbevelingen.",
          stat: "Rapporten in minuten",
          demoText: "LIVE DEMO",
          comingSoon: true,
        },
      ]
    },
    results: {
      label: "02 / RESULTATEN",
      title: "Echte Bedrijven. Meetbare Resultaten.",
      list: [
        {
          company: "Calvet",
          industry: "Industriële Productie",
          service: "Chatbot",
          initial: "C",
          quote: "De Gradient chatbot ondersteunt nu bezoekers op onze website 24/7. Potentiële klanten krijgen direct antwoord en kunnen een gesprek boeken zonder op ons team te wachten. Het heeft de manier waarop we nieuwe leads verzamelen en kwalificeren aanzienlijk verbeterd.",
          statLabel: "Lead Verzameling",
          externalLogo: "https://calvet.eu/wp-content/uploads/2024/06/calvet_logo.svg",
        },
        {
          company: "Emergo",
          industry: "Engineering & Technische Diensten",
          service: "AI Voice Agent",
          initial: "E",
          quote: "Gradient bouwde een AI voice agent die nu ons onthaal afhandelt. Het beantwoordt inkomende oproepen, plant afspraken en stuurt technische vragen door naar de juiste medewerker in het Nederlands, Frans of Engels. Dit verminderde onze werklast en verlaagde de operationele kosten.",
          statLabel: "Meertalig Onthaal",
          externalLogo: "https://www.emergo.be/wp-content/uploads/2017/05/logo-emergo-group_0.jpg",
        },
      ]
    },
    whyUs: {
      label: "03 / WAAROM WIJ",
      title: "Waarom Gradient Werkt.",
      list: [
        { tag: "TAAL", title: "Standaard Meertalig" },
        { tag: "INTEGRATIE", title: "Naadloze Integratie" },
        { tag: "BEVEILIGING", title: "Jouw data is beschermd" },
        { tag: "IMPLEMENTATIE", title: "Live in 14 Dagen" },
      ]
    },
    process: {
      label: "04 / HET PROCES",
      title: "Wij maken AI simpel. Jij focust op je bedrijf.",
      desc: "Wij regelen alles van analyse tot implementatie. Geen technische kennis vereist van jouw kant.",
      steps: [
        { step: "01", title: "Analyseer", desc: "We nemen de tijd om je bedrijf diepgaand te begrijpen door de juiste vragen te stellen en je huidige processen in kaart te brengen." },
        { step: "02", title: "Identificeer", desc: "We identificeren de belangrijkste inefficiënties en terugkerende taken die je bedrijf tijd en geld kosten." },
        { step: "03", title: "Bouw", desc: "We ontwikkelen AI oplossingen op maat — van chatbots en voice agents tot facturatie en interne tools — afgestemd op jouw specifieke behoeften." },
        { step: "04", title: "Integreer", desc: "We integreren deze oplossingen in je bestaande systemen (CRM, ERP, e mail, enz.) zonder de operaties te verstoren, terwijl je data veilig blijft." },
        { step: "05", title: "Resultaat", desc: "Je bespaart tijd, verlaagt kosten en creëert ruimte voor groei — met AI die betrouwbaar op de achtergrond draait." },
      ],
      ctaBtn: "Boek een demo"
    },
    cta: {
      label: "NIET ZEKER WAAR TE BEGINNEN?",
      title: "Boek een 15 Min ontdekkingsgesprek",
      desc: "We identificeren jouw grootste automatiseringskansen. Zonder enige verplichting.",
    }
  },
  FR: {
    hero: {
      tag: "BRUXELLES, BELGIQUE · AUTOMATISATION IA B2B",
      title: "Les petites entreprises méritent aussi l'IA.",
      desc: "Nous aidons les entreprises locales à gagner du temps, réduire les coûts et croître plus rapidement en implémentant une IA pratique qui fonctionne réellement dans leurs opérations quotidiennes.",
      primaryBtn: "Obtenir une démo gratuite",
      secondaryBtn: "Voir ce que nous faisons",
    },
    services: {
      label: "01 / SOLUTIONS",
      title: "Vous perdez du temps sur des choses que l'IA peut gérer.",
      hoverText: "Survolez un service pour voir comment il résout votre problème.",
      list: [
        {
          num: "01",
          name: "Chatbot",
          tag: "SUPPORT SITE WEB",
          problem: "Les prospects quittent ils votre site sans acheter, réserver ou obtenir une réponse? Chaque question sans réponse est une vente perdue.",
          solution: "Gradient déploie un chatbot IA sur mesure qui répond aux questions, qualifie les leads et prend des rendez vous 24/7, en néerlandais, français et anglais.",
          stat: "3x plus de leads capturés",
          demoText: "DÉMO EN DIRECT",
        },
        {
          num: "02",
          name: "Agent Vocal",
          tag: "RÉCEPTION TÉLÉPHONIQUE",
          problem: "Vous manquez des appels pendant les réunions? Chaque appel manqué est une opportunité perdue et embaucher un réceptionniste coûte plus de 30K€ par an.",
          solution: "Notre Agent Vocal IA répond à chaque appel, planifie les rendez vous et dirige les demandes vers la bonne personne automatiquement.",
          stat: "100% de taux de réponse",
          demoText: "DÉMO EN DIRECT",
          comingSoon: true,
        },
        {
          num: "03",
          name: "Automatisation Email",
          tag: "SUIVI",
          problem: "Les emails de suivi manuels prennent des heures chaque semaine. Pendant ce temps, les leads se refroidissent et les rendez vous sont manqués.",
          solution: "Gradient automatise chaque suivi, confirmation et séquence de maturation déclenchés par les actions des clients, sans effort manuel.",
          stat: "5 à 10 heures sauvées",
          demoText: "DÉMO EN DIRECT",
          comingSoon: true,
        },
        {
          num: "04",
          name: "Agent de Facturation",
          tag: "FACTURATION & FINANCES",
          problem: "La création et l'envoi de factures prennent du temps et sont souvent retardés. De petites erreurs, des suivis manquants et des factures impayées nuisent à votre trésorerie, pendant que vous êtes occupé.",
          solution: "Gradient crée, envoie et suit automatiquement les factures en fonction de vos travaux, garantissant que vous êtes payé plus rapidement, sans effort manuel.",
          stat: "Paiements 35% plus rapides",
          demoText: "DÉMO EN DIRECT",
          comingSoon: true,
        },
        {
          num: "05",
          name: "Employé Virtuel",
          tag: "OPÉRATIONS INTERNES",
          problem: "Vous passez vos dimanches soirs à assembler des rapports à partir de 5 feuilles de calcul différentes? Ce n'est pas de l'analyse, c'est de l'administration.",
          solution: "Votre employé virtuel gère tout, de la communication interne sur les informations de l'entreprise à la génération de rapports sur mesure et de recommandations basées sur les données.",
          stat: "Rapports en quelques minutes",
          demoText: "DÉMO EN DIRECT",
          comingSoon: true,
        },
      ]
    },
    results: {
      label: "02 / RÉSULTATS",
      title: "De Vraies Entreprises. Des Résultats Mesurables.",
      list: [
        {
          company: "Calvet",
          industry: "Fabrication Industrielle",
          service: "Chatbot",
          initial: "C",
          quote: "Le chatbot Gradient soutient désormais les visiteurs sur notre site web 24/7. Les clients potentiels obtiennent des réponses immédiatement et peuvent réserver un appel sans attendre notre équipe. Cela a considérablement amélioré notre façon de capturer et de qualifier de nouveaux leads.",
          statLabel: "Capture de Leads",
          externalLogo: "https://calvet.eu/wp-content/uploads/2024/06/calvet_logo.svg",
        },
        {
          company: "Emergo",
          industry: "Services d'Ingénierie",
          service: "Agent Vocal IA",
          initial: "E",
          quote: "Gradient a construit un agent vocal IA qui gère désormais notre réception. Il répond aux appels entrants, planifie les rendez vous et dirige les questions techniques vers le bon employé en néerlandais, français ou anglais. Cela a réduit notre charge de travail à la réception et diminué les coûts opérationnels.",
          statLabel: "Réception Multilingue",
          externalLogo: "https://www.emergo.be/wp-content/uploads/2017/05/logo-emergo-group_0.jpg",
        },
      ]
    },
    whyUs: {
      label: "03 / POURQUOI NOUS",
      title: "Pourquoi Gradient Fonctionne.",
      list: [
        { tag: "LANGUE", title: "Multilingue par Défaut" },
        { tag: "INTÉGRATION", title: "Intégration Transparente" },
        { tag: "SÉCURITÉ", title: "Vos données sont protégées" },
        { tag: "DÉPLOIEMENT", title: "En ligne en 14 Jours" },
      ]
    },
    process: {
      label: "04 / LE PROCESSUS",
      title: "Nous rendons l'IA simple. Vous vous concentrez sur votre entreprise.",
      desc: "Nous gérons tout, de l'analyse au déploiement. Aucune connaissance technique requise de votre part.",
      steps: [
        { step: "01", title: "Analyser", desc: "Nous prenons le temps de comprendre votre entreprise en profondeur en posant les bonnes questions et en cartographiant vos processus actuels." },
        { step: "02", title: "Identifier", desc: "Nous identifions les principales inefficacités et les tâches récurrentes qui coûtent du temps et de l'argent à votre entreprise." },
        { step: "03", title: "Construire", desc: "Nous développons des solutions d'IA sur mesure — des chatbots et agents vocaux aux outils de facturation et internes — alignées sur vos besoins." },
        { step: "04", title: "Intégrer", desc: "Nous intégrons ces solutions à vos systèmes existants (CRM, ERP, e mail, etc.) sans perturber vos opérations, tout en garantissant la sécurité de vos données." },
        { step: "05", title: "Résultat", desc: "Vous gagnez du temps, réduisez les coûts et créez de l'espace pour la croissance — avec une IA fonctionnant de manière fiable en arrière plan." },
      ],
      ctaBtn: "Réserver une démo"
    },
    cta: {
      label: "PAS SÛR PAR OÙ COMMENCER?",
      title: "Réservez un appel de découverte de 15 Min",
      desc: "Nous identifierons vos plus grandes opportunités d'automatisation. Sans engagement.",
    }
  }
};
