export const demoContent = {
  EN: {
    homeChat: {
      greeting: "Gradient AI",
      status: "ONLINE",
      input: "Type a message...",
      msgs: [
        { role: "user", text: "Hi, my sink is broken and it is leaking." },
        { role: "bot", text: "I am sorry to hear that. I can help you schedule a repair. What day would work best for you?" },
        { role: "user", text: "Tomorrow would be great." },
        { role: "bot", text: "Great. We have availability tomorrow at 10 AM or 2 PM. Which one works for you?" },
        { role: "user", text: "2 PM please." },
        { role: "bot", text: "Perfect. What is your name and phone number?" },
        { role: "user", text: "John Smith, 555 0192" },
        { role: "bot", text: "Perfect. Your repair appointment has been scheduled for tomorrow at 2 PM. You will receive a confirmation shortly." }
      ],
      label: "Automatically handled by Gradient",
      workflow: [
        "Customer asks question",
        "Lead captured",
        "Appointment booked",
        "Confirmation sent"
      ]
    },
    voice: {
      msgs: [
        { speaker: "C", text: "Hi, my sink is broken and it is leaking." },
        { speaker: "AI", text: "I can help you schedule a repair. What day works best?" },
        { speaker: "C", text: "Tomorrow would be great." },
        { speaker: "AI", text: "We have availability at 10 AM or 2 PM." },
        { speaker: "C", text: "10 AM please." },
        { speaker: "AI", text: "Great, your appointment is booked." },
      ],
      label: "AI Voice Agent in action",
      workflow: [
        "Call answered",
        "Appointment scheduled",
        "Confirmation sent",
      ],
      ui: {
        inbound: "Inbound Call",
        client: "Client",
        agent: "Company Agent",
        confirmed: "Appointment Confirmed",
        sent: "Email Sent"
      }
    },
    email: {
      label: "AI drafts replies you stay in control",
      incoming: "Hi, my sink is leaking. Can I book a repair tomorrow?",
      replyDraft: "Hi, thank you for your message. We can schedule a repair tomorrow at 10 AM or 2 PM. Please let us know what works best.",
      ui: {
        reading: "AI is reading...",
        drafted: "Draft created by AI",
        sendBtn: "Send",
        sentSuccess: "Reply sent successfully",
        sidebar: { inbox: "Inbox", sent: "Sent", drafts: "Drafts" },
        allCaughtUp: "All caught up."
      },
      workflow: [
        "Email received",
        "Email analyzed",
        "Reply generated",
        "Saved in drafts",
        "Sent after approval"
      ]
    },
    invoicing: {
      label: "Automated Invoicing & Follow up",
      trigger: "Job completed: Kitchen repair €250",
      invoice: {
        company: "Gradient AI",
        customer: "John Smith",
        service: "Kitchen repair",
        amount: "€250",
        vat: "€52.50",
        total: "€302.50",
        generating: "Generating invoice...",
        billedTo: "Billed to:",
        vatLabel: "VAT (21%)",
        totalLabel: "TOTAL"
      },
      sending: "Sending invoice...",
      sent: "Invoice sent to customer",
      followup: "Payment not received after 7 days",
      reminding: "Sending reminder...",
      paidText: "Invoice paid",
      paidConfirm: "Payment received",
      highlight: "Average payment time reduced by 35%",
      workflow: [
        "Work completed",
        "Invoice generated",
        "Invoice sent",
        "Follow up sent",
        "Payment received"
      ],
      logs: [
        "Detecting completed job...",
        "Generating invoice PDF...",
        "Sending email to customer...",
        "Checking payment status...",
        "Payment confirmed."
      ]
    },
    virtual: {
      header: "gradient ai_employee.log",
      greeting: "Hello Pieter, what can I do for you today?",
      script: [
        { u: "generate expense report March" },
        { ai: "Generating report..." },
        { ai: "Report created successfully." },
        { ai: "Where would you like to store it?" },
        { u: "/finance/reports/march" },
        { ai: "Saved to /finance/reports/march" },
        { u: "Give actionable insights why costs are high" },
        { aiList: [
          "Marketing costs increased 32% due to ad spend",
          "Supplier prices rose 12%",
          "Operational inefficiencies detected in logistics"
        ]},
        { u: "Send this report and insights to my manager" },
        { ai: "Email sent successfully." },
        { u: "Thank you" },
        { ai: "Let me know if I can help with anything else." }
      ],
      workflow: [
        "Command received",
        "Report generated",
        "Insights created",
        "Stored in system",
        "Shared with team"
      ],
      status: {
        role: "Virtual Employee",
        state: "ACTIVE",
        uptime: "24/7 365d/yr",
        user: "user",
        status: "status"
      },
      ui: {
        standby: "Terminal Standby",
        liveWf: "Live Workflow",
        recent: "Recent Activities",
        activities: [
          "Synced CRM Contacts",
          "Optimized Ad Budget",
          "Report Generator [RUNNING]"
        ]
      }
    }
  },
  NL: {
    homeChat: {
      greeting: "Gradient AI",
      status: "ONLINE",
      input: "Typ je bericht...",
      msgs: [
        { role: "user", text: "Hallo, mijn lavabo is kapot en lekt." },
        { role: "bot", text: "Wat vervelend om te horen. Ik kan je helpen een herstelling in te plannen. Welke dag past het best?" },
        { role: "user", text: "Morgen zou perfect zijn." },
        { role: "bot", text: "Super. We hebben morgen plaats om 10:00 of 14:00. Wat past voor jou?" },
        { role: "user", text: "14:00 alstublieft." },
        { role: "bot", text: "Perfect. Wat is je naam en telefoonnummer?" },
        { role: "user", text: "Jan Peeters, 0470 12 34 56" },
        { role: "bot", text: "Perfect. Je herstelafspraak staat ingepland voor morgen om 14:00. Je ontvangt zo een bevestiging." }
      ],
      label: "Automatisch afgehandeld door Gradient",
      workflow: [
        "Klant stelt een vraag",
        "Lead verzameld",
        "Afspraak geboekt",
        "Bevestiging verstuurd"
      ]
    },
    voice: {
      msgs: [
        { speaker: "C", text: "Hallo, mijn lavabo is kapot en lekt." },
        { speaker: "AI", text: "Ik kan je helpen een herstelling in te plannen. Welke dag past het best?" },
        { speaker: "C", text: "Morgen zou perfect zijn." },
        { speaker: "AI", text: "We hebben plaats om 10:00 of 14:00." },
        { speaker: "C", text: "10:00 alstublieft." },
        { speaker: "AI", text: "Super, je afspraak is geboekt." },
      ],
      label: "AI Voice Agent in actie",
      workflow: [
        "Oproep beantwoord",
        "Afspraak ingepland",
        "Bevestiging verstuurd",
      ],
      ui: {
        inbound: "Inkomende Oproep",
        client: "Klant",
        agent: "Bedrijfsagent",
        confirmed: "Afspraak Bevestigd",
        sent: "Email Verzonden"
      }
    },
    email: {
      label: "AI schrijft antwoorden jij behoudt de controle",
      incoming: "Hallo, mijn lavabo lekt. Kan ik morgen een herstelling inboeken?",
      replyDraft: "Hallo, bedankt voor je bericht. We kunnen morgen een herstelling inplannen om 10:00 of 14:00. Laat ons weten wat het beste past.",
      ui: {
        reading: "AI is aan het lezen...",
        drafted: "Concept gemaakt door AI",
        sendBtn: "Verzenden",
        sentSuccess: "Antwoord succesvol verzonden",
        sidebar: { inbox: "Postvak IN", sent: "Verzonden", drafts: "Concepten" },
        allCaughtUp: "Helemaal bij."
      },
      workflow: [
        "Email ontvangen",
        "Email geanalyseerd",
        "Antwoord gegenereerd",
        "Opgeslagen in concepten",
        "Verzonden na goedkeuring"
      ]
    },
    invoicing: {
      label: "Geautomatiseerde Facturatie & Opvolging",
      trigger: "Klus geklaard: Keukenherstelling €250",
      invoice: {
        company: "Gradient AI",
        customer: "Jan Peeters",
        service: "Keukenherstelling",
        amount: "€250",
        vat: "€52.50",
        total: "€302.50",
        generating: "Factuur genereren...",
        billedTo: "Gefactureerd aan:",
        vatLabel: "BTW (21%)",
        totalLabel: "TOTAAL"
      },
      sending: "Factuur verzenden...",
      sent: "Facture verzonden naar klant",
      followup: "Betaling niet ontvangen na 7 dagen",
      reminding: "Herinnering sturen...",
      paidText: "Factuur betaald",
      paidConfirm: "Betaling ontvangen",
      highlight: "Gemiddelde betalingstijd verminderd met 35%",
      workflow: [
        "Werk voltooid",
        "Factuur gegenereerd",
        "Factuur verzonden",
        "Opvolging verzonden",
        "Betaling ontvangen"
      ],
      logs: [
        "Voltooide klus detecteren...",
        "Factuur PDF genereren...",
        "E mail naar klant sturen...",
        "Betalingsstatus controleren...",
        "Betaling bevestigd."
      ]
    },
    virtual: {
      header: "gradient ai_employee.log",
      greeting: "Hallo Pieter, wat kan ik vandaag voor je doen?",
      script: [
        { u: "genereer onkostenrapport Maart" },
        { ai: "Rapport genereren..." },
        { ai: "Rapport succesvol aangemaakt." },
        { ai: "Waar wilt u dit opslaan?" },
        { u: "/finance/rapporten/maart" },
        { ai: "Opgeslagen in /finance/rapporten/maart" },
        { u: "Geef actiegerichte inzichten waarom de kosten hoog zijn" },
        { aiList: [
          "Marketingkosten stegen met 32% door advertentie uitgaven",
          "Prijzen van leveranciers stegen met 12%",
          "Operationele inefficiënties gedetecteerd in logistiek"
        ]},
        { u: "Stuur dit rapport en inzichten naar mijn manager" },
        { ai: "E mail succesvol verzonden." },
        { u: "Dank je" },
        { ai: "Laat het me weten als ik ergens anders mee kan helpen." }
      ],
      workflow: [
        "Commando ontvangen",
        "Rapport gegenereerd",
        "Inzichten gecreëerd",
        "Opgeslagen in systeem",
        "Gedeeld met team"
      ],
      status: {
        role: "Virtuele Werknemer",
        state: "ACTIEF",
        uptime: "24/7 365d/jr",
        user: "gebruiker",
        status: "status"
      },
      ui: {
        standby: "Terminal Standby",
        liveWf: "Live Workflow",
        recent: "Recente Activiteiten",
        activities: [
          "CRM Contacten gesynchroniseerd",
          "Advertentiebudget geoptimaliseerd",
          "Rapportgenerator [ACTIEF]"
        ]
      }
    }
  },
  FR: {
    homeChat: {
      greeting: "Gradient AI",
      status: "EN LIGNE",
      input: "Tapez un message...",
      msgs: [
        { role: "user", text: "Bonjour, mon lavabo est cassé et fuit." },
        { role: "bot", text: "Je suis désolé de l'entendre. Je peux vous aider à planifier une réparation. Quel jour vous conviendrait le mieux?" },
        { role: "user", text: "Demain serait parfait." },
        { role: "bot", text: "Super. Nous avons des disponibilités demain à 10h ou 14h. Lequel vous convient?" },
        { role: "user", text: "14h s'il vous plaît." },
        { role: "bot", text: "Parfait. Quel est votre nom et numéro de téléphone?" },
        { role: "user", text: "Jean Dupont, 0470 12 34 56" },
        { role: "bot", text: "Parfait. Votre rendez vous de réparation est planifié pour demain à 14h. Vous recevrez une confirmation sous peu." }
      ],
      label: "Géré automatiquement par Gradient",
      workflow: [
        "Le client pose une question",
        "Lead capturé",
        "Rendez vous pris",
        "Confirmation envoyée"
      ]
    },
    voice: {
      msgs: [
        { speaker: "C", text: "Bonjour, mon lavabo est cassé et fuit." },
        { speaker: "AI", text: "Je peux vous aider à planifier une réparation. Quel jour vous convient?" },
        { speaker: "C", text: "Demain serait parfait." },
        { speaker: "AI", text: "Nous avons de la place à 10h ou 14h." },
        { speaker: "C", text: "10h s'il vous plaît." },
        { speaker: "AI", text: "Parfait, votre rendez vous est réservé." },
      ],
      label: "Agent Vocal IA en action",
      workflow: [
        "Appel répondu",
        "Rendez vous planifié",
        "Confirmation envoyée",
      ],
      ui: {
        inbound: "Appel Entrant",
        client: "Client",
        agent: "Agent Compagnie",
        confirmed: "Rendez vous Confirmé",
        sent: "Email Envoyé"
      }
    },
    email: {
      label: "L'IA rédige les réponses vous gardez le contrôle",
      incoming: "Bonjour, mon évier fuit. Puis je réserver une réparation demain?",
      replyDraft: "Bonjour, merci pour votre message. Nous pouvons planifier une réparation demain à 10h ou 14h. Faites nous savoir ce qui vous convient le mieux.",
      ui: {
        reading: "L'IA lit...",
        drafted: "Brouillon créé par l'IA",
        sendBtn: "Envoyer",
        sentSuccess: "Réponse envoyée avec succès",
        sidebar: { inbox: "Boîte de réception", sent: "Envoyés", drafts: "Brouillons" },
        allCaughtUp: "Tout est à jour."
      },
      workflow: [
        "Email reçu",
        "Email analysé",
        "Réponse générée",
        "Enregistré dans les brouillons",
        "Envoyé après approbation"
      ]
    },
    invoicing: {
      label: "Facturation & Suivi Automatisés",
      trigger: "Travail terminé: Réparation cuisine 250 €",
      invoice: {
        company: "Gradient AI",
        customer: "Jean Dupont",
        service: "Réparation cuisine",
        amount: "250 €",
        vat: "52,50 €",
        total: "302,50 €",
        generating: "Génération de la facture...",
        billedTo: "Facturé à:",
        vatLabel: "TVA (21%)",
        totalLabel: "TOTAL"
      },
      sending: "Envoi de la facture...",
      sent: "Facture envoyée au client",
      followup: "Paiement non reçu après 7 jours",
      reminding: "Envoi du rappel...",
      paidText: "Facture payée",
      paidConfirm: "Paiement reçu",
      highlight: "Délai moyen de paiement réduit de 35%",
      workflow: [
        "Travail terminé",
        "Facture générée",
        "Facture envoyée",
        "Suivi envoyé",
        "Paiement reçu"
      ],
      logs: [
        "Détection du travail terminé...",
        "Génération de la facture PDF...",
        "Envoi de l'e mail au client...",
        "Vérification du statut de paiement...",
        "Paiement confirmé."
      ]
    },
    virtual: {
      header: "gradient ai_employee.log",
      greeting: "Bonjour Pieter, que puis je faire pour vous aujourd'hui?",
      script: [
        { u: "générer rapport de dépenses Mars" },
        { ai: "Génération du rapport..." },
        { ai: "Rapport créé avec succès." },
        { ai: "Où souhaitez vous le stocker?" },
        { u: "/finance/rapporten/mars" },
        { ai: "Enregistré dans /finance/rapports/mars" },
        { u: "Donnez des raisons exploitables pour lesquelles les coûts sont élevés" },
        { aiList: [
          "Les coûts marketing ont augmenté de 32% en raison des dépenses publicitaires",
          "Les prix des fournisseurs ont augmenté de 12%",
          "Inefficacités opérationnelles détectées dans la logistique"
        ]},
        { u: "Envoyez ce rapport et ces informations à mon responsable" },
        { ai: "E mail envoyé avec succès." },
        { u: "Merci" },
        { ai: "Faites moi savoir si je peux vous aider avec autre chose." }
      ],
      workflow: [
        "Commande reçue",
        "Rapport généré",
        "Informations créées",
        "Stocké dans le système",
        "Partagé avec l'équipe"
      ],
      status: {
        role: "Employé Virtuel",
        state: "ACTIF",
        uptime: "24/7 365j/an",
        user: "utilisateur",
        status: "statut"
      },
      ui: {
        standby: "Terminal en Veille",
        liveWf: "Flux de Travail en Direct",
        recent: "Activités Récentes",
        activities: [
          "Contacts CRM synchronisés",
          "Budget publicitaire optimisé",
          "Générateur de rapports [ACTIF]"
        ]
      }
    }
  }
};
