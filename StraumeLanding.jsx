import React, { useState, useEffect, useRef } from 'react';
import {
  Wrench,
  Building2,
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

// ── Data ──
const tjenester = [
  {
    icon: Clock,
    title: 'Deltids vaktmestertjenester',
    desc: 'Fleksibel vaktmesterordning tilpasset ditt behov – enten det er noen timer i uken eller faste dager.',
  },
  {
    icon: Building2,
    title: 'Vedlikehold av næringsbygg',
    desc: 'Oppfølging og vedlikehold av bygning, fellesarealer og teknisk infrastruktur.',
  },
  {
    icon: Cog,
    title: 'Drift av tekniske anlegg',
    desc: 'Oppfølging av tekniske installasjoner, ventilasjon, varme og tilhørende systemer.',
  },
  {
    icon: TreePine,
    title: 'Uteanlegg og uteområder',
    desc: 'Vedlikehold av grøntanlegg, parkering, gangveier og tilhørende arealer.',
  },
  {
    icon: Phone,
    title: 'Ringe-hjelp / praktisk bistand',
    desc: 'Rask hjelp ved akutte eller løpende behov – bare en telefon unna.',
  },
];

const usper = [
  { icon: Shield, title: 'Lang erfaring', desc: 'Solid bakgrunn innen automasjon, tekniske anlegg og vedlikehold.' },
  { icon: Wrench, title: 'Fleksible løsninger', desc: 'Tjenester skreddersydd etter dine behov og budsjett.' },
  { icon: MapPin, title: 'Lokalkjent', desc: 'God kjennskap til lokale forhold og nettverk i regionen.' },
  { icon: Heart, title: 'Personlig oppfølging', desc: 'Direkte kontakt og tett dialog – du slipper å forholde deg til et stort system.' },
];

// ── Main component ──
export default function StraumeLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ navn: '', epost: '', telefon: '', melding: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ navn: '', epost: '', telefon: '', melding: '' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
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

        .hero-gradient {
          background: linear-gradient(165deg, #1B3D2F 0%, #2A5740 40%, #1E4430 70%, #152B21 100%);
        }

        .accent-gradient {
          background: linear-gradient(135deg, #6B3B20 0%, #864A28 50%, #A86840 100%);
        }
      `}</style>

      <div className="font-body text-stone-800 bg-[#F5F0E8] min-h-screen">

        {/* ════════════════ NAVBAR ════════════════ */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B3D2F]/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <button onClick={() => scrollTo('hero')} className="font-display text-xl text-[#F5F0E8] tracking-wide">
              Straume <span className="text-[#C4885C]">D&V</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 text-sm text-[#F5F0E8]/80">
              {[
                ['tjenester', 'Tjenester'],
                ['om', 'Om oss'],
                ['hvorfor', 'Hvorfor oss'],
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
            <div className="md:hidden bg-[#1B3D2F] border-t border-white/10 px-4 pb-4 space-y-3">
              {[
                ['tjenester', 'Tjenester'],
                ['om', 'Om oss'],
                ['hvorfor', 'Hvorfor oss'],
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
        <section id="hero" className="hero-gradient bg-noise relative min-h-screen flex items-center pt-16">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -left-20 w-80 h-80 bg-[#2A5740]/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <AnimatedSection>
              <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-4">
                Drift & Vedlikehold
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F0E8] leading-tight max-w-3xl">
                Pålitelig drift og vedlikehold for{' '}
                <span className="text-[#C4885C]">næringsbygg</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-[#F5F0E8]/70 max-w-xl leading-relaxed">
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
                  className="border border-[#F5F0E8]/20 text-[#F5F0E8] font-medium px-8 py-4 rounded-lg text-lg hover:bg-[#F5F0E8]/5 transition-colors"
                >
                  Se våre tjenester
                </button>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-[#F5F0E8]/30" size={28} />
            </div>
          </div>
        </section>

        {/* ════════════════ TJENESTER ════════════════ */}
        <section id="tjenester" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                Hva vi tilbyr
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                Våre tjenester
              </h2>
              <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16">
                Fra daglig drift til akutt bistand – vi dekker alle behov knyttet til vedlikehold av næringsbygg og uteområder.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tjenester.map((t, i) => (
                <AnimatedSection key={t.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md hover:border-[#864A28]/20 transition-all duration-300 h-full group">
                    <div className="w-12 h-12 rounded-xl bg-[#1B3D2F]/5 flex items-center justify-center mb-5 group-hover:bg-[#1B3D2F] transition-colors duration-300">
                      <t.icon
                        size={22}
                        className="text-[#1B3D2F] group-hover:text-[#864A28] transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-display text-xl text-stone-900 mb-3">{t.title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm">{t.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ OM OSS ════════════════ */}
        <section id="om" className="py-20 md:py-28 bg-[#1B3D2F] bg-noise relative overflow-hidden">
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
                    Straume Drift & Vedlikehold drives av Atle, som har lang og bred erfaring
                    innen automasjon, tekniske løsninger, bassengdrift og tilhørende regelverk.
                  </p>
                  <p>
                    Med solid kompetanse innen tekniske anlegg og en praktisk tilnærming til
                    problemløsning, leverer vi pålitelige tjenester som holder bygget ditt i
                    topp stand – uten at du trenger å tenke på det.
                  </p>
                  <p>
                    Vårt første fokusområde er næringsbygg med tilhørende uteområder, der vi
                    tilbyr alt fra løpende vaktmestertjenester til oppfølging av tekniske
                    installasjoner.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-[#2A5740]/40 rounded-2xl p-8 md:p-10 border border-[#F5F0E8]/5">
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

        {/* ════════════════ KONTAKT ════════════════ */}
        <section id="kontakt" className="py-20 md:py-28 bg-[#1B3D2F] bg-noise relative overflow-hidden">
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
                <form onSubmit={handleSubmit} className="space-y-5">
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
                    Send melding
                  </button>
                  {formSent && (
                    <p className="text-[#C4885C] text-sm mt-2">
                      Takk for din henvendelse! Vi tar kontakt snart.
                    </p>
                  )}
                </form>
              </AnimatedSection>

              {/* Contact info */}
              <AnimatedSection className="md:col-span-2" delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Kontaktinformasjon</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+4712345678"
                        className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
                      >
                        <Phone size={18} className="text-[#C4885C]" />
                        +47 123 45 678
                      </a>
                      <a
                        href="mailto:post@straumedv.no"
                        className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
                      >
                        <Mail size={18} className="text-[#C4885C]" />
                        post@straumedv.no
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
                        href="https://instagram.com/straumedv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://facebook.com/straumedv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#2A5740]/40 rounded-2xl p-6 border border-[#F5F0E8]/5">
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
        <footer className="bg-[#152B21] border-t border-[#F5F0E8]/5 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-display text-lg text-[#F5F0E8]/80">
                Straume <span className="text-[#C4885C]">D&V</span>
              </div>
              <p className="text-[#F5F0E8]/30 text-sm">
                &copy; {new Date().getFullYear()} Straume Drift & Vedlikehold. Alle rettigheter reservert.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/straumedv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com/straumedv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
