import {
  Wrench,
  Hammer,
  Cog,
  TreePine,
  Shovel,
  Waves,
  Phone,
  Paintbrush,
  User,
  Building2,
  Shield,
  Eye,
  Smile,
  UserCheck,
  Search,
  Users,
  Clock,
  Cpu,
  MapPin,
  BadgeCheck,
  Award,
} from 'lucide-react';

// Delt datakilde for de to segment-landingssidene (Privat / Bedrift).
// Brukes av SegmentPage og av tjeneste-teaseren på forsiden.
export const segments = {
  privat: {
    slug: 'privat',
    // Verdien som sendes til Basin som "segment"
    segmentLabel: 'Privat',
    agreementName: 'Folkeavtalen',
    cardIcon: User,
    cardLabel: 'Privat',
    cardDesc: 'Ventilasjonsservice, småjobber, vedlikehold og praktisk hjelp for hjemmet.',
    eyebrow: 'For privatpersoner',
    title: 'Praktisk hjelp og vedlikehold for hjemmet',
    tagline: 'For hjemmet',
    intro:
      'Vi tar oss av småjobbene, vedlikeholdet og det praktiske rundt boligen din — fra ventilasjonsservice og basseng til hagearbeid og montering.',
    heroImage:
      'https://ucarecdn.com/a1415a6d-4427-4e65-a522-f7a125407df6/hf_20260601_134419_ec6da71afa5c4d38af443b018b161859.png',
    services: [
      {
        icon: Paintbrush,
        title: 'Småjobber og vedlikehold',
        text: 'Alt fra montering og reparasjoner til generelt vedlikehold av bolig og hage.',
      },
      {
        icon: Waves,
        title: 'Basseng og våtrom',
        text: 'Service og vedlikehold av privat basseng. Vannkvalitet, filtrering og teknisk oppfølging.',
      },
      {
        icon: Shovel,
        title: 'Drenering og grunnarbeid',
        text: 'Vi utfører dreneringsjobber, natursteinsmuring og mindre gravejobber for private boliger.',
      },
      {
        icon: Phone,
        title: 'Ringe-hjelp / praktisk bistand',
        text: 'Rask hjelp ved akutte eller løpende behov. Ring, så stiller vi opp.',
      },
    ],
    note: {
      title: 'Boligmappa-dokumentasjon',
      text: 'Alt arbeid vi utfører dokumenteres i din Boligmappa. Vi hjelper deg også med å komme i gang med og bruke Boligmappa.',
    },
    /* === PARKERT pr. 30.06.2026 (Atle): venter med FolkeAvtalen + PlenAvtalen + målgrupper + giveaway.
       Behold dataen her for enkel reaktivering — fjern kommentar-markørene for å slå på igjen. ===
    featuredPlan: {
      name: 'FolkeAvtalen',
      headline: 'Din boligs egen tekniske kontaktperson',
      price: '490',
      period: 'per måned',
      intro:
        'FolkeAvtalen gir deg teknisk oppfølging og en fast kontaktperson som følger med på boligen din — slik at du oppdager ting før de blir dyre problemer.',
      valueProps: [
        { icon: Shield, label: 'Trygghet' },
        { icon: Eye, label: 'Forebygging' },
        { icon: Smile, label: 'Enklere boligliv' },
        { icon: UserCheck, label: 'Én fast kontaktperson' },
        { icon: Search, label: 'Tidlig oppdagelse av problemer' },
      ],
      features: [
        'Teknisk oppfølging',
        'Boligkontroll',
        'Termografering av sikringsskap',
        'Kontroll av røykvarslere',
        'Én kontaktperson når du trenger hjelp',
      ],
      extra:
        'FolkeAvtalen handler ikke bare om teknikk. Vi kan også hjelpe med praktiske oppgaver som gressklipping, småjobber og vedlikehold – utført etter avtale og på timebasis. Én kontaktperson for både bolig og hverdag.',
      slogan: 'Tryggere bolig. Bedre oversikt. Enklere hverdag.',
      formLabel: 'FolkeAvtalen (kr 490/mnd)',
      ctaLabel: 'Bestill FolkeAvtalen',
    },
    audience: {
      eyebrow: 'For hvem?',
      title: 'Hvem passer FolkeAvtalen for?',
      intro:
        'FolkeAvtalen passer for alle som ønsker én trygg kontaktperson for boligen — særlig for disse:',
      groups: [
        {
          icon: Users,
          title: 'Eldre som bor hjemme',
          text: 'Én trygg kontaktperson for boligen, også når barna bor et annet sted. En fin gave til noen du er glad i.',
        },
        {
          icon: Clock,
          title: 'Travle familier',
          text: 'Slipp å finne ulike håndverkere. Noen som følger opp huset for dere, så småtingene faktisk blir gjort.',
        },
        {
          icon: Cpu,
          title: 'Teknisk og verdifull bolig',
          text: 'Varmepumpe, smarthus, elbillader og annet teknisk utstyr følges opp av noen med bakgrunn fra elektro og byggautomasjon.',
        },
        {
          icon: MapPin,
          title: 'Hytteeiere og folk som reiser mye',
          text: 'Tilsyn, kontroll og rapport fra én lokal kontaktperson — så har du oversikt selv når du er borte.',
        },
      ],
    },
    giveaway: {
      heading: 'Hva gir du til den som har alt?',
      title: 'Vinn FolkeAvtalen',
      intro:
        'Vi trekker én heldig vinner som får FolkeAvtalen med teknisk boliggjennomgang inkludert. Premien kan blant annet omfatte:',
      prizes: [
        'Kontroll av røykvarslere',
        'Visuell kontroll av slukkeutstyr',
        'Termografering av sikringsskap',
        'Teknisk gjennomgang og enkle anbefalinger',
      ],
      stepsIntro: 'For å delta:',
      steps: [
        'Lik innlegget',
        'Følg siden vår',
        'Tagg en som fortjener litt ekstra trygghet i hjemmet',
      ],
      drawNote: 'Vinner trekkes [dato].',
      slogan: 'Tryggere bolig. Bedre oversikt. FolkeAvtalen.',
      instagram: 'https://www.instagram.com/straume_drift_vedlikehold/',
      facebook: 'https://www.facebook.com/profile.php?id=61571583957448',
    },
    plenAvtalen: {
      eyebrow: 'PlenAvtalen',
      headline: 'Lei av å klippe plen?',
      intro:
        'Fra kr 490,- per måned kan du få robotklipper med oppsett og oppfølging inkludert. Vi leverer, setter opp og følger opp — du nyter ferdigklippet plen uten investering og bekymringer.',
      sellingPoint: 'Kantrådfri robotklipper (GPS/RTK) — ingen kabel i bakken.',
      crossSell:
        'Kombiner med FolkeAvtalen og få én kontaktperson for både bolig og uteområde.',
      tiers: [
        {
          id: 'liten',
          label: 'Liten plen / normal enebolig',
          price: '490',
          formLabel: 'PlenAvtalen – liten plen (kr 490/mnd)',
        },
        {
          id: 'stor',
          label: 'Stor plen / krevende tomt',
          price: '790',
          formLabel: 'PlenAvtalen – stor/krevende tomt (kr 790/mnd)',
        },
      ],
      priceNote: 'Alle priser inkl. mva, per måned.',
      includesTitle: 'Avtalen kan inkludere',
      includes: [
        'Levering og oppsett av robotklipper',
        'Tilpasning og optimalisering av klippeområde',
        'Oppfølging og tilsyn gjennom sesongen',
        'Feilsøking og enkle justeringer ved behov',
        'Service og vedlikehold etter avtale',
        'Vinterlagring etter nærmere avtale',
      ],
      fineprint: [
        'Robotklipperen eies av leverandør og stilles til disposisjon gjennom avtaleperioden. Kunden sørger for normal bruk og at klippeområdet holdes ryddig for gjenstander som kan hindre drift eller skade utstyret.',
        'Skader som skyldes unormal bruk, hærverk eller forhold utenfor normal drift vurderes og avklares særskilt.',
        'Avtalen løper per måned med [oppsigelsestid] etter nærmere avtale.',
      ],
      ctaLabel: 'Få tilbud',
    },
    === SLUTT PARKERT === */
    // Ventilasjonspakker. Slå rabatt av/på i perioder: sett discountPercent til 0 for å skjule kampanjen.
    ventilasjon: {
      eyebrow: 'Ventilasjonsservice',
      title: 'Service og kanalrens for ventilasjon',
      intro:
        'Et rent ventilasjonsanlegg gir sunnere inneklima, lavere strømforbruk og lengre levetid. Velg pakken som passer boligen din.',
      image: 'https://ucarecdn.com/c90f05a1-79cb-431f-a967-955c8a53df88/',
      packages: [
        {
          id: 'avtrekk',
          title: 'Service på avtrekksventilasjon',
          subtitle: 'For boliger med avtrekksventilasjon',
          basePrice: 4000,
          discountPercent: 25,
          campaignLabel: 'Intro-tilbud',
          who: {
            q: 'Hvordan vet jeg om boligen har avtrekksventilasjon?',
            a: 'Typisk for eldre boliger. Avtrekksventilasjon er en løsning der elektriske vifter suger «brukt» og fuktig inneluft ut fra våtrom som bad, toalett og kjøkken. Dette skaper et undertrykk som gjør at frisk uteluft trekkes inn i oppholdsrom (stue og soverom) via vegg- eller vindusventiler.',
          },
          includesTitle: 'Dette inngår',
          includes: [
            'Kontroll og rengjøring av avtrekkskanaler',
            'Kontroll og rengjøring av avtrekksvifte og motor',
            'Sjekk av funksjon og luftavkast',
            'Vurdering av systemets generelle tilstand',
          ],
          benefitsTitle: 'Jevnlig service gir også',
          benefits: [
            'Lavere energiforbruk og strømkostnader',
            'Mer stabil og stillegående drift',
            'Lengre levetid på ventilasjonsanlegget',
          ],
          formLabel: 'Service avtrekksventilasjon',
          ctaLabel: 'Bestill service',
        },
        {
          id: 'balansert',
          title: 'Service på balansert ventilasjon',
          subtitle: 'Alt inkludert for balansert ventilasjon',
          basePrice: 5300,
          discountPercent: 25,
          campaignLabel: 'Intro-tilbud',
          who: {
            q: 'Hvordan vet jeg om boligen har balansert ventilasjon?',
            a: 'Balansert ventilasjon er et system der vifter kontinuerlig tilfører frisk, filtrert uteluft og trekker ut forurenset inneluft i like store mengder. Varmen fra den brukte inneluften gjenvinnes, noe som gir et sunt inneklima, mindre trekk og lavere energikostnader.',
          },
          includesTitle: 'Dette inngår i en standard service',
          includes: [
            'Sjekk av aggregatet: kontroll av styringspanel, viftemotorer og lager for å forhindre ulyd og slitasje',
            'Kontroll og rens av varmegjenvinner: demontering og grundig rengjøring av gjenvinneren (roterende eller plateveksler) for å opprettholde varmeeffekten',
            'Rens av avtrekkskanaler og ventiler',
            'Rengjøring av vifter: fjerning av støv og smuss på vifteblader',
          ],
          formLabel: 'Service balansert ventilasjon',
          ctaLabel: 'Bestill service',
        },
      ],
    },
    borettslagNote:
      'Borettslag eller sameie? Vi gir egne priser og tilbud på kanalrens og ventilasjonsservice — ta kontakt for et tilpasset tilbud til hele bygget.',
    formSource: 'Privat-landingsside',
    formTitle: 'Få et uforpliktende tilbud',
    formIntro:
      'Velg tjenesten du er interessert i og fyll ut skjemaet, så tar vi kontakt — vanligvis innen én virkedag.',
    seoTitle: 'Privat – ventilasjonsservice og vedlikehold for hjemmet',
    seoDescription:
      'Ventilasjonsservice, kanalrens, småjobber, vedlikehold og praktisk hjelp for privatpersoner og boliger.',
  },

  bedrift: {
    slug: 'bedrift',
    segmentLabel: 'Bedrift',
    agreementName: 'Bedriftsavtalen',
    cardIcon: Building2,
    cardLabel: 'Bedrift',
    cardDesc: 'Vaktmester, tekniske anlegg, uteområder og entreprenørarbeid — én leverandør.',
    eyebrow: 'For næring, borettslag og sameier',
    title: 'Komplett drift og vedlikehold for din eiendom',
    tagline: 'Bedriftsavtalen',
    intro:
      'Én leverandør for hele eiendommen — fra vaktmestertjenester og tekniske anlegg til uteområder og entreprenørarbeid. Med Bedriftsavtalen får dere forutsigbar drift og én fast kontaktperson.',
    heroImage:
      'https://ucarecdn.com/a104f5b9-c737-441a-81c3-5dfed6d410ed/Skjermbilde20260326kl150921.png',
    driftstekniker: {
      eyebrow: 'Din egen driftstekniker',
      headline: 'Ditt bygg fortjener mer enn tilfeldig oppfølging',
      lead: 'Fra kr 5 900 eks. mva per måned kan ditt næringsbygg få fast teknisk oppfølging og sin egen driftstekniker.',
      body: 'Med flere fagbrev innen elektro og over 30 års erfaring fra byggautomasjon tilbyr vi teknisk oppfølging, kontroll via SD-anlegg, praktiske driftstjenester og koordinering av nødvendige faggrupper.',
      stats: [
        { icon: BadgeCheck, label: 'Flere fagbrev innen elektro' },
        { icon: Award, label: 'Over 30 års erfaring' },
        { icon: Cpu, label: 'Kontroll via SD-anlegg' },
        { icon: UserCheck, label: 'Én fast kontaktperson' },
      ],
      slogan: 'Én kontaktperson. Bedre drift. Tryggere oppfølging.',
      ctaLabel: 'Få et uforpliktende tilbud',
      secondaryCtaLabel: 'Se serviceavtalene',
    },
    services: [
      {
        icon: Wrench,
        title: 'Deltids vaktmestertjenester',
        text: 'Fleksibel vaktmesterordning tilpasset eiendommens behov. Fast kontaktperson med full oversikt.',
      },
      {
        icon: Hammer,
        title: 'Vedlikehold av bygg og fellesarealer',
        text: 'Systematisk oppfølging og vedlikehold av bygg, fasade og fellesarealer — trappeoppganger og tekniske rom.',
      },
      {
        icon: Cog,
        title: 'Drift av tekniske anlegg',
        text: 'Oppfølging av ventilasjon, varme, kjøling, heis og tekniske installasjoner. Dokumentert og systematisk.',
      },
      {
        icon: TreePine,
        title: 'Uteanlegg og uteområder',
        text: 'Vedlikehold av grøntanlegg, parkering, gangveier og fellesområder ute.',
      },
      {
        icon: Shovel,
        title: 'Entreprenørarbeid',
        text: 'Drenering, natursteinsmuring og mindre gravejobber for næringseiendommer, borettslag og sameier.',
      },
      {
        icon: Waves,
        title: 'Basseng og våtrom',
        text: 'Drift og vedlikehold av svømmebasseng og badeanlegg. Kompetanse på vannbehandling og regelverk.',
      },
      {
        icon: Phone,
        title: 'Ringe-hjelp / praktisk bistand',
        text: 'Rask hjelp ved akutte eller løpende behov. Ring, så stiller vi opp.',
      },
    ],
    note: null,
    pricing: {
      eyebrow: 'Bedriftsavtalen',
      title: 'Månedlig teknisk serviceavtale',
      intro:
        'Vi tilbyr fleksible serviceavtaler for næringsbygg med fast teknisk oppfølging og ett kontaktpunkt for eiendommens drift og vedlikehold.',
      tiers: [
        { days: 1, label: '1 servicedag per måned', price: '5 900', formLabel: 'Teknisk serviceavtale – 1 servicedag/mnd' },
        { days: 2, label: '2 servicedager per måned', price: '11 200', formLabel: 'Teknisk serviceavtale – 2 servicedager/mnd' },
        { days: 3, label: '3 servicedager per måned', price: '15 900', formLabel: 'Teknisk serviceavtale – 3 servicedager/mnd' },
        { days: 4, label: '4 servicedager per måned', price: '19 900', formLabel: 'Teknisk serviceavtale – 4 servicedager/mnd' },
      ],
      priceNote: 'Alle priser eks. mva. Hver servicedag tilsvarer inntil 8 timer totalt.',
      includesTitle: 'Tidsrammen inkluderer',
      includes: [
        'Reise til og fra eiendommen',
        'Teknisk oppfølging og utførelse på stedet',
        'Prioriterte oppgaver etter avtale med byggeier',
        'Enkel rapportering og administrativ oppfølging',
      ],
      fineprint: [
        'Arbeidsoppgaver utføres og prioriteres i samråd med byggeier innenfor avtalt tidsramme. Dersom byggeier ikke har særskilte ønsker eller prioriteringer, vil vi foreta en faglig vurdering og prioritere de mest nødvendige og hensiktsmessige tiltakene for eiendommens tekniske drift og vedlikehold.',
        'Ved behov bistår vi med koordinering og formidling av nødvendige faggrupper og leverandører, slik at byggeier har ett kontaktpunkt å forholde seg til. Arbeid utført av eksterne fag eller leverandører avtales og faktureres separat.',
        'Arbeid utover avtalt tidsramme, ekstra besøk, materiell og tjenester som krever eksterne fag eller særskilt kompetanse faktureres etter gjeldende satser og etter nærmere avtale.',
      ],
      ctaLabel: 'Få tilbud på denne avtalen',
    },
    serviceDetails: {
      eyebrow: 'Hva inngår',
      title: 'Teknisk service – typiske kontroll- og oppfølgingspunkter',
      intro:
        'Teknisk service tilpasses byggets behov og byggeiers prioriteringer. Typiske kontroll- og oppfølgingspunkter kan omfatte:',
      categories: [
        {
          title: 'Ventilasjon og inneklima',
          items: [
            'Kontroll av ventilasjonsanlegg',
            'Kontroll av filtre, drift og eventuelle alarmer',
            'Enkel funksjonskontroll og visuell inspeksjon',
          ],
        },
        {
          title: 'Varme- og kjøleanlegg',
          items: [
            'Kontroll av temperaturer og drift',
            'Visuell kontroll av tekniske installasjoner',
            'Oppfølging av eventuelle avvik',
          ],
        },
        {
          title: 'SD-anlegg og teknisk overvåking',
          items: [
            'Kontroll og oppfølging via SD-anlegg der dette er tilgjengelig',
            'Gjennomgang av driftsstatus og alarmer',
            'Oppfølging av avvik og driftsforstyrrelser',
            'Enkel analyse av tekniske driftsdata og behov for tiltak',
          ],
        },
        {
          title: 'Tekniske rom og installasjoner',
          items: [
            'Tilsyn i tekniske rom',
            'Kontroll av lekkasjer, støy eller unormal drift',
            'Generell orden og tilgjengelighet',
          ],
        },
        {
          title: 'Belysning og elektriske forhold',
          items: [
            'Kontroll av felles belysning',
            'Registrering av feil og behov for utbedring',
            'Koordinering mot elektriker ved behov',
          ],
        },
        {
          title: 'Brann- og sikkerhetsrelaterte forhold',
          items: [
            'Visuell kontroll av tilgjengelige sikkerhetsinstallasjoner',
            'Kontroll av rømningsveier og generell tilgjengelighet',
            'Registrering og rapportering av avvik',
          ],
        },
        {
          title: 'Bygningsmessige forhold',
          items: [
            'Enkel visuell kontroll av dører, porter og utsatte bygningsdeler',
            'Registrering av slitasje eller vedlikeholdsbehov',
            'Oppfølging av mindre driftsrelaterte forhold',
          ],
        },
        {
          title: 'Vaktmestertjenester og praktiske oppgaver',
          items: [
            'Enkle vedlikeholds- og reparasjonsoppgaver',
            'Skifte av lyskilder',
            'Justering av dører og beslag',
            'Oppfølging av orden og mindre driftsforhold',
            'Praktisk bistand etter byggeiers behov',
          ],
        },
        {
          title: 'Rapportering og oppfølging',
          items: [
            'Enkel rapport etter utført service',
            'Dokumentasjon av observasjoner og anbefalte tiltak',
            'Koordinering og formidling av nødvendige faggrupper ved behov',
          ],
        },
      ],
      disclaimer:
        'Teknisk service erstatter ikke lovpålagt kontroll eller sertifisert fagarbeid, men bidrar til forebyggende drift, tidlig avdekking av avvik og bedre oppfølging av eiendommens tekniske anlegg.',
    },
    borettslagNote:
      'Borettslag eller sameie? Vi gir egne priser og tilbud på kanalrens og ventilasjonsservice — ta kontakt for et tilpasset tilbud til hele bygget.',
    formSource: 'Bedrift-landingsside',
    formTitle: 'Få et uforpliktende tilbud',
    formIntro:
      'Velg tjenesten dere er interessert i og fyll ut skjemaet, så tar vi kontakt — vanligvis innen én virkedag.',
    seoTitle: 'Bedrift – drift og vedlikehold for næring og borettslag',
    seoDescription:
      'Vaktmestertjenester, tekniske anlegg, uteområder og entreprenørarbeid for næringsbygg, borettslag og sameier. Bedriftsavtalen samler alt hos én leverandør.',
  },
};

export const segmentList = [segments.privat, segments.bedrift];
