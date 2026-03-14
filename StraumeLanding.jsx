import React, { useState, useEffect, useRef } from 'react';
import {
  Wrench,
  Building2,
  Home,
  User,
  Cog,
  TreePine,
  Phone,
  Mail,
  Clock,
  Shield,
  MapPin,
  Heart,
  ChevronDown,
  Send,
  Instagram,
  Facebook,
  Menu,
  X,
  Quote,
  Hammer,
  Waves,
  Paintbrush,
  Users,
  Zap,
  Headphones,
  ThermometerSun,
  FileCheck,
  BadgeCheck,
  CheckCircle,
} from 'lucide-react';

/* ───────────────────────────────────────────
   Straume Drift & Vedlikehold – Landing Page
   ─────────────────────────────────────────── */

// ── Intersection Observer hook for scroll animations ──
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// ── Animated section wrapper ──
function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Segment definitions ──
const segmenter = [
  {
    id: 'naering',
    label: 'Næringsbygg',
    icon: Building2,
    desc: 'Driftsavtaler og teknisk vedlikehold for næringseiendommer',
    formLabel: 'Næringsbygg',
  },
  {
    id: 'borettslag',
    label: 'Borettslag & sameie',
    icon: Home,
    desc: 'Fast vaktmester og forutsigbar oppfølging for fellesarealer',
    formLabel: 'Borettslag / sameie',
  },
  {
    id: 'privat',
    label: 'Privat',
    icon: User,
    desc: 'Praktisk hjelp, småjobber og vedlikehold for bolig',
    formLabel: 'Privat',
  },
];

// ── Services data with segment-specific text ──
const tjenester = [
  {
    icon: Wrench,
    title: 'Deltids vaktmestertjenester',
    segments: ['naering', 'borettslag'],
    text: {
      naering: 'Fleksibel vaktmesterordning tilpasset eiendommens behov. Fast kontaktperson med full oversikt.',
      borettslag: 'Fast vaktmester for borettslaget. Forutsigbar avtale styret kan stole på.',
    },
  },
  {
    icon: Hammer,
    title: 'Vedlikehold av bygg og fellesarealer',
    segments: ['naering', 'borettslag'],
    text: {
      naering: 'Systematisk oppfølging og vedlikehold av næringsbygg, fasade og fellesareal.',
      borettslag: 'Vedlikehold av fellesarealer, trappeoppganger, fasade og tekniske rom.',
    },
  },
  {
    icon: Cog,
    title: 'Drift av tekniske anlegg',
    segments: ['naering', 'borettslag'],
    text: {
      naering: 'Oppfølging av ventilasjon, varme, kjøling og tekniske installasjoner. Dokumentert og systematisk.',
      borettslag: 'Oppfølging av heis, ventilasjon, varmeanlegg og andre tekniske systemer i bygget.',
    },
  },
  {
    icon: TreePine,
    title: 'Uteanlegg og uteområder',
    segments: ['naering', 'borettslag'],
    text: {
      naering: 'Vedlikehold av grøntanlegg, parkering, gangveier og tilhørende utearealer.',
      borettslag: 'Stell av fellesområder ute — plen, hekk, parkering og lekeplass.',
    },
  },
  {
    icon: Phone,
    title: 'Ringe-hjelp / praktisk bistand',
    segments: ['naering', 'borettslag', 'privat'],
    text: {
      naering: 'Rask hjelp ved akutte eller løpende behov. Ring, så stiller vi opp.',
      borettslag: 'Rask hjelp ved akutte eller løpende behov. Ring, så stiller vi opp.',
      privat: 'Rask hjelp ved akutte eller løpende behov. Ring, så stiller vi opp.',
    },
  },
  {
    icon: Waves,
    title: 'Basseng og våtrom',
    segments: ['naering', 'privat'],
    text: {
      naering: 'Drift og vedlikehold av svømmebasseng og badeanlegg. Kompetanse på vannbehandling og regelverk.',
      privat: 'Service og vedlikehold av privat basseng. Vannkvalitet, filtrering og teknisk oppfølging.',
    },
  },
  {
    icon: Paintbrush,
    title: 'Småjobber og vedlikehold',
    segments: ['privat'],
    text: {
      privat: 'Alt fra montering og reparasjoner til generelt vedlikehold av bolig og hage.',
    },
  },
  {
    icon: ThermometerSun,
    title: 'Sjekk av varmepumpe og ventilasjon',
    segments: ['privat'],
    text: {
      privat: 'Service og kontroll av varmepumpe, ventilasjon og kanalrens. Vi sørger for at anleggene fungerer optimalt.',
    },
  },
  {
    icon: BadgeCheck,
    title: 'Serviceavtale – Prioritert kunde',
    segments: ['privat'],
    text: {
      privat: 'Tegn en serviceavtale fra kr 199,- per måned og bli prioritert kunde hos oss. Kontakt oss for å høre hva som ligger i pakken.',
    },
  },
  {
    icon: FileCheck,
    title: 'Boligmappa-dokumentasjon',
    segments: ['privat'],
    text: {
      privat: 'Alt arbeid vi utfører dokumenteres i din Boligmappa. Vi hjelper deg også med å komme i gang med og bruke Boligmappa.',
    },
  },
];

// ── USPs ──
const usper = [
  { icon: Users, title: 'Én kontaktperson', desc: 'Du slipper å forholde deg til mange leverandører. Atle har oversikten.' },
  { icon: Shield, title: 'Fleksible avtaler', desc: 'Tilpasset ditt behov — fra faste driftsavtaler til hjelp ved behov.' },
  { icon: Zap, title: 'Rask respons', desc: 'Kort vei fra telefon til handling. Vi stiller opp når det haster.' },
  { icon: Cog, title: 'Teknisk kompetanse', desc: 'Solid erfaring med automasjon, tekniske anlegg og regelverk.' },
];

const testimonials = [
  {
    name: 'Silvia Høines',
    role: 'Hotellsjef, Panorama Hotel & Resort',
    text: 'Atle har jobbet som vaktmester hos oss på Panorama Hotell & Resort. Jeg setter pris på hans fleksibilitet og vilje til å stille opp når behovet melder seg. Han er dyktig til å sette seg inn i nye systemer, og samarbeidet med ham er alltid enkelt og problemfritt.',
    img: 'https://ucarecdn.com/b2239218-b395-49a5-a7f1-de5286a066f4/ce674af1c8a52d5851ac72b98d73db4333fada114000x6000.avif',
  },
];

const galleryItems = [
  { id: 1, label: 'Vedlikehold og drift', span: 'md:col-span-2 md:row-span-2', img: 'https://ucarecdn.com/1f87a414-8ddb-41e2-87dc-5a8b69ee5e1b/IMG_6776.JPG' },
  { id: 2, label: 'Næringsbygg og fasade', span: '', img: 'https://ucarecdn.com/a70f5a7c-6ffd-443b-80c3-c69f0271834d/hf_20260313_115618_24d34741cb7a4cfebf38d0c678dc2371.png' },
  { id: 3, label: 'Uteområder og grøntanlegg', span: '', img: 'https://ucarecdn.com/150dd219-0350-42fd-b278-b4a8f6c24d26/488624009_17860444113391535_1420075698923640434_n.jpg' },
  { id: 4, label: 'Teknisk vedlikehold', span: 'md:col-span-2', img: 'https://ucarecdn.com/746bb917-c71f-4f95-a68a-c6ec77cecad2/DSC00529Edit.jpg' },
  { id: 5, label: 'Bassengdrift og vedlikehold', span: '', img: 'https://ucarecdn.com/2d77d7d9-a4c3-4cd7-b2a2-3d6bbea45f79/485084386_17857408695391535_2129108615804766927_n.jpg' },
  { id: 6, label: 'Fellesarealer og oppfølging', span: '', img: 'https://ucarecdn.com/5f01fecf-8f6a-46cb-9e8e-ef4d9f8ad15f/491495651_17861233797391535_5667774428046579171_n.jpg' },
  { id: 7, label: 'SD-anlegg', span: 'md:col-span-2', img: 'https://ucarecdn.com/9b426c7e-a2fa-4af6-9998-0053bfc01444/20260314153923.jpg' },
  { id: 8, label: 'Energioppfølging', span: '', img: 'https://ucarecdn.com/d4942751-ab2e-4f3e-b00b-ddcd99e86891/20260314153932.jpg' },
  { id: 9, label: 'Energioppfølging og styring', span: '', img: 'https://ucarecdn.com/fefbeec0-e8f9-4480-a535-10ce99778478/20260314153909.jpg' },
];

// ── Main component ──
export default function StraumeLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState(null);
  const [formData, setFormData] = useState({ segment: '', navn: '', epost: '', telefon: '', melding: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://usebasin.com/f/fafba46e96b5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormSent(true);
      setFormData({ segment: '', navn: '', epost: '', telefon: '', melding: '' });
    } catch {
      setFormSent(true);
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSegmentClick = (segmentId) => {
    setActiveSegment(segmentId);
    // Auto-fill form dropdown
    const seg = segmenter.find(s => s.id === segmentId);
    if (seg) {
      setFormData(prev => ({ ...prev, segment: seg.formLabel }));
    }
    // Scroll to tjenester
    setTimeout(() => scrollTo('tjenester'), 100);
  };

  // Filter services based on active segment
  const filteredTjenester = activeSegment
    ? tjenester.filter(t => t.segments.includes(activeSegment))
    : tjenester;

  // Get the right description text for a service
  const getServiceText = (service) => {
    if (activeSegment && service.text[activeSegment]) {
      return service.text[activeSegment];
    }
    // Default: use næring text, then first available
    return service.text.naering || Object.values(service.text)[0];
  };

  return (
    <>
      {/* ── Fonts & global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        html { scroll-behavior: smooth; }

        .font-display { font-family: 'DM Serif Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .accent-gradient {
          background: linear-gradient(135deg, #6B3B20 0%, #864A28 50%, #A86840 100%);
        }
      `}</style>

      <div className="font-body text-stone-800 bg-[#F5F0E8] min-h-screen">

        {/* ════════════════ NAVBAR ════════════════ */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1917]/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <button onClick={() => scrollTo('hero')}>
              <img src="https://ucarecdn.com/1a365f74-1c48-4860-b97f-bd338062dd37/logo_lys.svg" alt="Straume Drift & Vedlikehold" className="h-8" />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 text-sm text-[#F5F0E8]/80">
              {[
                ['tjenester', 'Tjenester'],
                ['om', 'Om oss'],
                ['hvorfor', 'Hvorfor oss'],
                ['referanser', 'Referanser'],
                ['galleri', 'Galleri'],
                ['kontakt', 'Kontakt'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="hover:text-[#C4885C] transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('kontakt')}
                className="accent-gradient text-white text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Ta kontakt
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#F5F0E8]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meny"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#1C1917] border-t border-white/10 px-4 pb-4 space-y-3">
              {[
                ['tjenester', 'Tjenester'],
                ['om', 'Om oss'],
                ['hvorfor', 'Hvorfor oss'],
                ['referanser', 'Referanser'],
                ['galleri', 'Galleri'],
                ['kontakt', 'Kontakt'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full text-left text-[#F5F0E8]/80 hover:text-[#C4885C] py-2 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* ════════════════ HERO ════════════════ */}
        <section id="hero" className="bg-[#F5F0E8] bg-noise relative min-h-screen flex items-center pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left – text */}
              <div>
                <AnimatedSection>
                  <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-4">
                    Drift & Vedlikehold
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-tight">
                    Pålitelig drift og vedlikehold for{' '}
                    <span className="text-[#864A28]">næringsbygg</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p className="mt-6 text-lg md:text-xl text-stone-500 max-w-xl leading-relaxed">
                    Vi sørger for at bygget ditt fungerer som det skal – hver dag.
                    Fleksible løsninger tilpasset ditt behov.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => scrollTo('kontakt')}
                      className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                    >
                      Få et uforpliktende tilbud
                    </button>
                    <button
                      onClick={() => scrollTo('tjenester')}
                      className="border border-stone-300 text-stone-700 font-medium px-8 py-4 rounded-lg text-lg hover:bg-stone-100 transition-colors"
                    >
                      Se våre tjenester
                    </button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right – hero image */}
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-stone-400/20 border border-stone-200">
                    <img
                      src="https://ucarecdn.com/a70f5a7c-6ffd-443b-80c3-c69f0271834d/hf_20260313_115618_24d34741cb7a4cfebf38d0c678dc2371.png"
                      alt="Straume Drift & Vedlikehold – profesjonelt vedlikehold av næringsbygg"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                  {/* Decorative accent border */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#864A28]/20 -z-10" />
                </div>
              </AnimatedSection>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-stone-400" size={28} />
            </div>
          </div>
        </section>

        {/* ════════════════ SEGMENTVELGER ════════════════ */}
        <section className="py-16 md:py-20 bg-[#F5F0E8] bg-noise">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Hvem er du?
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                Velg ditt segment
              </h2>
              <p className="text-stone-500 text-center max-w-2xl mx-auto mb-12">
                Vi tilpasser tjenestene våre etter hvem du er. Velg nedenfor for å se hva vi kan tilby deg.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {segmenter.map((seg, i) => {
                const isActive = activeSegment === seg.id;
                return (
                  <AnimatedSection key={seg.id} delay={i * 0.1} className="h-full">
                    <button
                      onClick={() => handleSegmentClick(seg.id)}
                      className={`w-full h-full text-left rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 group cursor-pointer ${
                        isActive
                          ? 'border-[#864A28] bg-[#864A28]/5 shadow-lg shadow-[#864A28]/10'
                          : 'border-stone-200 bg-white hover:border-[#864A28]/30 hover:shadow-md hover:-translate-y-1'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                        isActive
                          ? 'accent-gradient'
                          : 'bg-[#1C1917]/5 group-hover:bg-[#1C1917]'
                      }`}>
                        <seg.icon
                          size={22}
                          className={`transition-colors duration-300 ${
                            isActive
                              ? 'text-white'
                              : 'text-[#1C1917] group-hover:text-[#864A28]'
                          }`}
                        />
                      </div>
                      <h3 className={`font-display text-xl mb-2 transition-colors duration-300 ${
                        isActive ? 'text-[#864A28]' : 'text-stone-900'
                      }`}>
                        {seg.label}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{seg.desc}</p>
                    </button>
                  </AnimatedSection>
                );
              })}
            </div>

            {activeSegment && (
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    setActiveSegment(null);
                    setFormData(prev => ({ ...prev, segment: '' }));
                  }}
                  className="text-stone-400 hover:text-[#864A28] text-sm transition-colors"
                >
                  Vis alle tjenester
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════ TJENESTER ════════════════ */}
        <section id="tjenester" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise -mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Hva vi tilbyr
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                Våre tjenester
              </h2>
              <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16">
                {activeSegment
                  ? `Tjenester tilpasset ${segmenter.find(s => s.id === activeSegment)?.label.toLowerCase()}.`
                  : 'Fra daglig drift til akutt bistand – vi dekker alle behov knyttet til vedlikehold og drift.'
                }
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTjenester.map((t, i) => (
                <div
                  key={t.title}
                  className="animate-fade-in"
                  style={{
                    animation: 'fadeIn 0.3s ease forwards',
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md hover:border-[#864A28]/20 transition-all duration-300 h-full group">
                    <div className="w-12 h-12 rounded-xl bg-[#1C1917]/5 flex items-center justify-center mb-5 group-hover:bg-[#1C1917] transition-colors duration-300">
                      <t.icon
                        size={22}
                        className="text-[#1C1917] group-hover:text-[#864A28] transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-display text-xl text-stone-900 mb-3">{t.title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm">{getServiceText(t)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ════════════════ OM OSS ════════════════ */}
        <section id="om" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#864A28]/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3">
                  Om oss
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-6">
                  Erfaring du kan stole på
                </h2>
                <div className="space-y-4 text-[#F5F0E8]/70 leading-relaxed">
                  <p>
                    Straume Drift & Vedlikehold drives av Atle, som har lang erfaring innen
                    automasjon, tekniske anlegg og praktisk vedlikehold. Med bakgrunn fra drift
                    av basseng, tekniske styringssystemer og bygningsvedlikehold, tilbyr vi en
                    bred og pålitelig tjeneste — enten du er næringsaktør, borettslag eller
                    privatperson.
                  </p>
                </div>

                {/* Straumegruppen */}
                <div className="mt-8 bg-[#292524]/40 rounded-2xl p-6 border border-[#F5F0E8]/5 flex items-center gap-5">
                  <a href="https://www.straumegruppen.no" target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <img
                      src="https://ucarecdn.com/f76d84fe-7284-4296-8105-e824ee296e9d/Straume_Gruppen_AS_Mrk.png"
                      alt="Straumegruppen"
                      className="h-12"
                    />
                  </a>
                  <div>
                    <p className="text-[#C4885C] font-medium text-sm mb-1">Del av Straumegruppen</p>
                    <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
                      I Straumegruppen har vi alle faggruppene du trenger.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-[#292524]/40 rounded-2xl p-8 md:p-10 border border-[#F5F0E8]/5">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      ['Automasjon', 'Teknisk styring og regulering'],
                      ['Tekniske anlegg', 'Ventilasjon, varme, kjøling'],
                      ['Bassengdrift', 'Drift og vedlikehold av basseng'],
                      ['Regelverk', 'Kunnskap om krav og forskrifter'],
                    ].map(([title, sub]) => (
                      <div key={title}>
                        <h4 className="font-display text-lg text-[#C4885C] mb-1">{title}</h4>
                        <p className="text-[#F5F0E8]/50 text-sm">{sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════ HVORFOR OSS ════════════════ */}
        <section id="hvorfor" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Hvorfor oss
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-16">
                Det som skiller oss ut
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {usper.map((u, i) => (
                <AnimatedSection key={u.title} delay={i * 0.1}>
                  <div className="text-center p-6">
                    <div className="w-14 h-14 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#6B3B20]/15">
                      <u.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg text-stone-900 mb-2">{u.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ TESTIMONIALS ════════════════ */}
        <section id="referanser" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Referanser
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-16">
                Hva kundene sier
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-3xl mx-auto bg-[#292524]/50 rounded-2xl p-8 md:p-12 border border-[#F5F0E8]/5">
                <Quote size={36} className="text-[#864A28]/40 mb-6" />
                <p className="text-[#F5F0E8]/80 leading-relaxed text-lg md:text-xl font-display italic mb-8">
                  &ldquo;{testimonials[0].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[0].img}
                    alt={testimonials[0].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#864A28]/30"
                  />
                  <div>
                    <p className="font-medium text-[#F5F0E8]">{testimonials[0].name}</p>
                    <p className="text-[#F5F0E8]/50 text-sm">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════ GALLERI ════════════════ */}
        <section id="galleri" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Vårt arbeid
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                Galleri
              </h2>
              <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16">
                Et utvalg av prosjekter og oppdrag vi har utført for våre kunder.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {galleryItems.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.08} className={item.span}>
                  <div className="relative group w-full h-full rounded-2xl overflow-hidden border border-stone-100 cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1C1917]/0 group-hover:bg-[#1C1917]/60 transition-colors duration-300 flex items-end p-5">
                      <p className="text-[#F5F0E8] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ KONTAKT ════════════════ */}
        <section id="kontakt" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Kontakt
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-4">
                Ta kontakt med oss
              </h2>
              <p className="text-[#F5F0E8]/60 text-center max-w-xl mx-auto mb-16">
                Har du spørsmål eller ønsker et uforpliktende tilbud? Fyll ut skjemaet, så tar vi kontakt.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              {/* Contact form */}
              <AnimatedSection className="md:col-span-3">
                {formSent ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-[#C4885C]/20 bg-gradient-to-br from-[#C4885C]/5 to-transparent">
                    <div className="w-20 h-20 rounded-full bg-[#C4885C]/10 border border-[#C4885C]/20 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-[#C4885C]" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#F5F0E8] mb-3">
                      Takk for din henvendelse!
                    </h3>
                    <p className="text-[#F5F0E8]/60 max-w-md mb-8 leading-relaxed">
                      Vi har mottatt meldingen din og vil ta kontakt med deg så snart som mulig — vanligvis innen én virkedag.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="text-[#C4885C] hover:text-[#A86840] transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      <Send size={14} />
                      Send en ny henvendelse
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Segment dropdown */}
                  <div>
                    <label className="block text-[#F5F0E8]/60 text-sm mb-2">Jeg kontakter som...</label>
                    <div className="relative">
                      <select
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#1C1917]">Velg segment</option>
                        <option value="Næringsbygg" className="bg-[#1C1917]">Næringsbygg</option>
                        <option value="Borettslag / sameie" className="bg-[#1C1917]">Borettslag / sameie</option>
                        <option value="Privat" className="bg-[#1C1917]">Privat</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F5F0E8]/30 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#F5F0E8]/60 text-sm mb-2">Navn</label>
                      <input
                        type="text"
                        required
                        value={formData.navn}
                        onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
                        placeholder="Ditt navn"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F5F0E8]/60 text-sm mb-2">Telefon</label>
                      <input
                        type="tel"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
                        placeholder="Ditt telefonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8]/60 text-sm mb-2">E-post</label>
                    <input
                      type="email"
                      required
                      value={formData.epost}
                      onChange={(e) => setFormData({ ...formData, epost: e.target.value })}
                      className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8]/60 text-sm mb-2">Melding</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.melding}
                      onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
                      className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors resize-none"
                      placeholder="Beskriv hva du trenger hjelp med..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20 flex items-center gap-2"
                  >
                    <Send size={18} />
                    Send henvendelse
                  </button>
                </form>
                )}
              </AnimatedSection>

              {/* Contact info */}
              <AnimatedSection className="md:col-span-2" delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Kontaktinformasjon</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+4746405965"
                        className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
                      >
                        <Phone size={18} className="text-[#C4885C]" />
                        +47 46 40 59 65
                      </a>
                      <a
                        href="mailto:atle@straumedrift.no"
                        className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
                      >
                        <Mail size={18} className="text-[#C4885C]" />
                        atle@straumedrift.no
                      </a>
                      <div className="flex items-center gap-3 text-[#F5F0E8]/70">
                        <MapPin size={18} className="text-[#C4885C]" />
                        Straume, Vestland
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Følg oss</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/straume_drift_vedlikehold/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571583957448"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#292524]/40 rounded-2xl p-6 border border-[#F5F0E8]/5">
                    <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">
                      Vi tilbyr alltid en uforpliktende samtale for å kartlegge dine behov.
                      Ingen jobb er for liten – ta kontakt, så finner vi en løsning.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <footer className="bg-[#171412] border-t border-[#F5F0E8]/5 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <img src="https://ucarecdn.com/1a365f74-1c48-4860-b97f-bd338062dd37/logo_lys.svg" alt="Straume Drift & Vedlikehold" className="h-7 opacity-80" />
                <div className="w-px h-6 bg-[#F5F0E8]/10" />
                <a href="https://www.straumegruppen.no" target="_blank" rel="noopener noreferrer">
                  <img src="https://ucarecdn.com/f76d84fe-7284-4296-8105-e824ee296e9d/Straume_Gruppen_AS_Mrk.png" alt="Straumegruppen" className="h-6 opacity-50 hover:opacity-80 transition-opacity" />
                </a>
              </div>
              <p className="text-[#F5F0E8]/30 text-sm">
                &copy; {new Date().getFullYear()} Straume Drift & Vedlikehold. Alle rettigheter reservert.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/straume_drift_vedlikehold/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571583957448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#F5F0E8]/5 text-center">
              <a
                href="https://www.attentio.no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/20 hover:text-[#F5F0E8]/40 text-xs transition-colors"
              >
                Utviklet av attentio
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
