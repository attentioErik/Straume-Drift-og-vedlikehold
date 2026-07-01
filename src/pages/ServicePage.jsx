import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import PriceCard from '../components/ui/PriceCard';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';
import { getService, services } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  const [presetService, setPresetService] = useState(service?.formLabel || '');
  const [presetNonce, setPresetNonce] = useState(0);

  if (!service) return <Navigate to="/tjenester" replace />;

  const p = service.pricing;
  const scrollToKontakt = () => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  const pickTier = (label) => {
    setPresetService(label);
    setPresetNonce((n) => n + 1);
    setTimeout(scrollToKontakt, 60);
  };

  // Skjema-valg: nivåer hvis tiers, ellers selve tjenesten
  const serviceOptions = p?.kind === 'tiers'
    ? p.tiers.map((t) => t.formLabel)
    : [service.formLabel];

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={service.title}
        description={service.summary}
        canonical={`https://www.totalbyggdrift.no/tjenester/${service.slug}`}
        image={service.image}
      />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="relative pt-16">
          <div className="absolute inset-0">
            <img src={ucare(service.image, { w: 1600 })} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <AnimatedSection>
                <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-5">
                  <Link to="/tjenester" className="hover:text-white">Tjenester</Link>
                  <ChevronRight size={14} />
                  <span className="text-white/90">{service.title}</span>
                </nav>
                <p className="text-brand-soft font-semibold text-xs tracking-[0.12em] uppercase mb-3">{service.eyebrow}</p>
                <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight">{service.title}</h1>
                <p className="mt-5 text-lg text-white/80 leading-relaxed">{service.intro}</p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Button onClick={scrollToKontakt} size="lg">Bestill befaring</Button>
                  <Button href="tel:+4746405965" variant="ghostLight" size="lg"><Phone size={18} /> 464 05 965</Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* INFO + INKLUDERT */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <AnimatedSection>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Om tjenesten</p>
              <h2 className="font-display text-3xl text-ink mb-5">{service.summary}</h2>
              {service.who && (
                <div className="bg-surface-blue border border-line rounded-2xl px-6 py-5 mt-6">
                  <p className="font-display text-ink mb-1">{service.who.q}</p>
                  <p className="text-muted text-sm leading-relaxed">{service.who.a}</p>
                </div>
              )}
              {service.benefits && (
                <div className="mt-6">
                  <h3 className="font-display text-lg text-ink mb-3">{service.benefits.title}</h3>
                  <ul className="space-y-2.5">
                    {service.benefits.items.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-ink-soft text-sm"><Check size={16} className="text-brand shrink-0 mt-0.5" /><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-surface rounded-3xl border border-line p-8">
                <h3 className="font-display text-xl text-ink mb-5">{service.includedTitle || 'Dette inngår'}</h3>
                <ul className="space-y-3.5">
                  {service.included.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-ink-soft"><Check size={18} className="text-brand shrink-0 mt-0.5" /><span>{it}</span></li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PRIS */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Pris" title={p.kind === 'tiers' ? 'Velg avtale' : 'Pris'} center />
            <div className="mt-12">
              {p.kind === 'fixed' && (
                <AnimatedSection>
                  <div className="max-w-md mx-auto">
                    <PriceCard service={service} onCta={() => pickTier(service.formLabel)} />
                  </div>
                </AnimatedSection>
              )}
              {p.kind === 'tiers' && <Tiers service={service} onPick={pickTier} />}
              {p.kind === 'quote' && (
                <AnimatedSection>
                  <div className="max-w-xl mx-auto bg-white rounded-3xl border border-line p-10 text-center">
                    <p className="font-display text-2xl text-ink mb-3">Pris etter befaring</p>
                    <p className="text-muted mb-8">{p.note}</p>
                    <Button onClick={scrollToKontakt} size="lg">Be om tilbud</Button>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {service.borettslag && (
              <AnimatedSection delay={0.1}>
                <p className="text-center text-muted text-sm mt-8 max-w-2xl mx-auto">
                  Borettslag, sameier og næringsbygg får egne priser og avtaler. <Link to="/bedrift" className="text-brand font-semibold">Be om tilbud →</Link>
                </p>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* RELATERTE */}
        {related.length > 0 && (
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading eyebrow="Flere tjenester" title="Relatert" />
              <div className="mt-10 grid sm:grid-cols-3 gap-5">
                {related.map((s) => (
                  <Link key={s.slug} to={`/tjenester/${s.slug}`} className="group block bg-surface rounded-2xl p-6 border border-line hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all">
                    <span className="w-11 h-11 rounded-full bg-brand-tint flex items-center justify-center mb-4"><s.icon size={20} className="text-brand" /></span>
                    <h3 className="font-display text-lg text-ink mb-1.5">{s.title}</h3>
                    <p className="text-muted text-sm">{s.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">Les mer <ArrowRight size={15} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* KONTAKT */}
        <section id="kontakt" className="py-20 md:py-28 bg-surface-blue">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Kontakt" title="Bestill eller be om tilbud" intro={`Fyll ut skjemaet, så tar vi kontakt om ${service.title.toLowerCase()}.`} center />
            <div className="mt-12 grid md:grid-cols-5 gap-12">
              <AnimatedSection className="md:col-span-3">
                <ContactForm
                  source={`Tjeneste: ${service.title}`}
                  services={serviceOptions}
                  presetService={presetService}
                  presetNonce={presetNonce}
                />
              </AnimatedSection>
              <AnimatedSection className="md:col-span-2" delay={0.15}>
                <ContactInfo />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function Tiers({ service, onPick }) {
  const p = service.pricing;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {p.tiers.map((t, i) => (
          <AnimatedSection key={t.label} delay={i * 0.07}>
            <div className="bg-white rounded-2xl p-6 border border-line h-full flex flex-col hover:-translate-y-1 transition-transform">
              <p className="text-ink-soft text-sm mb-4">{t.label}</p>
              <span className="font-display text-3xl text-ink">kr {t.price}</span>
              <p className="text-faint text-xs mb-6 mt-1">eks. mva</p>
              <Button onClick={() => onPick(t.formLabel)} size="sm" className="mt-auto w-full">Få tilbud</Button>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl border border-line p-6">
          <h3 className="font-display text-lg text-ink mb-4">{service.includedTitle || 'Dette inngår'}</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.included.map((it) => (
              <li key={it} className="flex items-start gap-3 text-ink-soft text-sm"><Check size={16} className="text-brand shrink-0 mt-0.5" /><span>{it}</span></li>
            ))}
          </ul>
        </div>
        <p className="text-center text-faint text-sm mt-4">{p.priceNote}</p>
      </AnimatedSection>
    </>
  );
}
