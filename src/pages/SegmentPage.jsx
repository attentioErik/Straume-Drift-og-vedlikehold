import { useState } from 'react';
import { Send, BadgeCheck, ArrowRight, Check, Gift, Instagram, Facebook, Sparkles, Leaf, Building2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import ServiceAccordion from '../components/ServiceAccordion';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';

export default function SegmentPage({ segment }) {
  const [presetService, setPresetService] = useState('');
  const [presetNonce, setPresetNonce] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToKontakt = () => scrollTo('kontakt');

  const handleServiceCta = (title) => {
    setPresetService(title);
    setPresetNonce((n) => n + 1);
    setTimeout(scrollToKontakt, 60);
  };

  // Alle verdier som kan forhåndsvelges via CTA-er må finnes i skjemaets nedtrekk
  const serviceOptions = [
    ...new Set([
      ...segment.services.map((s) => s.title),
      ...(segment.ventilasjon?.packages.map((p) => p.formLabel) || []),
      ...(segment.pricing?.tiers.map((t) => t.formLabel) || []),
      ...(segment.plenAvtalen?.tiers.map((t) => t.formLabel) || []),
      ...(segment.featuredPlan ? [segment.featuredPlan.formLabel] : []),
    ]),
  ];

  // Norsk tallformat: 4000 -> "4 000"
  const fmt = (n) => n.toLocaleString('nb-NO');

  const { driftstekniker, featuredPlan, audience, pricing, serviceDetails, ventilasjon, plenAvtalen, giveaway } = segment;

  return (
    <>
      <Seo
        title={segment.seoTitle}
        description={segment.seoDescription}
        canonical={`https://www.totalbyggdrift.no/${segment.slug}`}
        image={segment.heroImage}
      />
      <div className="font-body text-stone-800 bg-[#F5F0E8] min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-16">
          <div className="absolute inset-0">
            <img
              src={ucare(segment.heroImage, { w: 1600 })}
              alt={segment.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/90 via-[#1C1917]/65 to-[#1C1917]/35" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-4">
                  {segment.eyebrow}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F5F0E8] leading-tight">
                  {segment.title}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="mt-6 text-lg text-[#F5F0E8]/75 max-w-xl leading-relaxed">
                  {segment.intro}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToKontakt}
                    className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                  >
                    Få et uforpliktende tilbud
                  </button>
                  <a
                    href="tel:+4746405965"
                    className="border border-[#F5F0E8]/30 text-[#F5F0E8] font-medium px-8 py-4 rounded-lg text-lg hover:bg-[#F5F0E8]/10 transition-colors text-center"
                  >
                    Ring +47 46 40 59 65
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* DRIFTSTEKNIKER (bedrift) */}
        {driftstekniker && (
          <section className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3">
                  {driftstekniker.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-5">
                  {driftstekniker.headline}
                </h2>
                <p className="text-[#F5F0E8]/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {driftstekniker.lead}
                </p>
                <p className="text-[#F5F0E8]/60 max-w-2xl mx-auto leading-relaxed mt-4">
                  {driftstekniker.body}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-10">
                  {driftstekniker.stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center shadow-lg shadow-[#6B3B20]/20">
                        <s.icon size={22} className="text-white" />
                      </div>
                      <span className="text-[#F5F0E8]/75 text-sm leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>

                <p className="font-display text-xl md:text-2xl text-[#C4885C] italic mb-10">
                  {driftstekniker.slogan}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={scrollToKontakt}
                    className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                  >
                    {driftstekniker.ctaLabel}
                  </button>
                  <button
                    onClick={() => scrollTo('priser')}
                    className="border border-[#F5F0E8]/30 text-[#F5F0E8] font-medium px-8 py-4 rounded-lg text-lg hover:bg-[#F5F0E8]/10 transition-colors"
                  >
                    {driftstekniker.secondaryCtaLabel}
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* FEATURED PLAN (FolkeAvtalen) */}
        {featuredPlan && (
          <section id="folkeavtalen" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {featuredPlan.name}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                  {featuredPlan.headline}
                </h2>
                <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16">
                  {featuredPlan.intro}
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <AnimatedSection>
                  <div className="space-y-3">
                    {featuredPlan.valueProps.map((vp) => (
                      <div key={vp.label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl accent-gradient flex items-center justify-center shrink-0 shadow-lg shadow-[#6B3B20]/15">
                          <vp.icon size={20} className="text-white" />
                        </div>
                        <span className="text-stone-800 font-medium">{vp.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed mt-8">{featuredPlan.extra}</p>
                  <p className="font-display text-xl text-[#864A28] italic mt-6">
                    {featuredPlan.slogan}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <div className="bg-[#1C1917] bg-noise rounded-2xl p-8 md:p-10 border border-[#864A28]/30 shadow-2xl shadow-stone-400/20">
                    <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase">
                      {featuredPlan.name}
                    </p>
                    <div className="flex items-end gap-2 mt-3 mb-8">
                      <span className="font-display text-5xl text-[#F5F0E8]">kr {featuredPlan.price}</span>
                      <span className="text-[#F5F0E8]/50 mb-2">/ {featuredPlan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {featuredPlan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[#F5F0E8]/80 text-sm">
                          <Check size={18} className="text-[#C4885C] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleServiceCta(featuredPlan.formLabel)}
                      className="w-full accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20 flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      {featuredPlan.ctaLabel}
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* VENTILASJON (privat) */}
        {ventilasjon && (
          <section id="ventilasjon" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {ventilasjon.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                  {ventilasjon.title}
                </h2>
                <p className="text-stone-500 text-center max-w-2xl mx-auto mb-12">
                  {ventilasjon.intro}
                </p>
              </AnimatedSection>

              {ventilasjon.image && (
                <AnimatedSection delay={0.1}>
                  <div className="max-w-3xl mx-auto mb-14 rounded-2xl overflow-hidden border border-stone-200 shadow-lg">
                    <img
                      src={ucare(ventilasjon.image, { w: 1200 })}
                      alt="Ventilasjonsservice og kanalrens"
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                </AnimatedSection>
              )}

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
                {ventilasjon.packages.map((pkg, i) => {
                  const hasDiscount = pkg.discountPercent > 0;
                  const discounted = Math.round(pkg.basePrice * (1 - pkg.discountPercent / 100));
                  return (
                    <AnimatedSection key={pkg.id} delay={i * 0.1}>
                      <div className="bg-white rounded-2xl p-8 border border-stone-200 hover:shadow-lg hover:border-[#864A28]/30 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="font-display text-2xl text-stone-900">{pkg.title}</h3>
                          {hasDiscount && (
                            <span className="shrink-0 inline-flex items-center bg-emerald-600/10 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                              −{pkg.discountPercent}% {pkg.campaignLabel}
                            </span>
                          )}
                        </div>
                        <p className="text-stone-500 text-sm mb-6">{pkg.subtitle}</p>

                        <div className="flex items-end gap-3 mb-1">
                          <span className="font-display text-4xl text-stone-900">
                            kr {fmt(hasDiscount ? discounted : pkg.basePrice)}
                          </span>
                          {hasDiscount && (
                            <span className="text-stone-400 text-lg line-through mb-1">kr {fmt(pkg.basePrice)}</span>
                          )}
                        </div>
                        <p className="text-stone-400 text-xs mb-6">inkl. mva</p>

                        <h4 className="font-semibold text-stone-900 text-sm mb-3">{pkg.includesTitle}:</h4>
                        <ul className="space-y-2.5 mb-6">
                          {pkg.includes.map((it) => (
                            <li key={it} className="flex items-start gap-3 text-stone-600 text-sm">
                              <Check size={16} className="text-[#864A28] shrink-0 mt-0.5" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>

                        {pkg.benefits && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-stone-900 text-sm mb-3">{pkg.benefitsTitle}:</h4>
                            <ul className="space-y-2.5">
                              {pkg.benefits.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-stone-600 text-sm">
                                  <Check size={16} className="text-[#864A28] shrink-0 mt-0.5" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="bg-[#864A28]/5 border border-[#864A28]/15 rounded-xl px-5 py-4 mb-6">
                          <p className="text-stone-800 text-sm font-medium mb-1">{pkg.who.q}</p>
                          <p className="text-stone-500 text-sm leading-relaxed">{pkg.who.a}</p>
                        </div>

                        <button
                          onClick={() => handleServiceCta(pkg.formLabel)}
                          className="mt-auto w-full accent-gradient text-white font-medium px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                        >
                          {pkg.ctaLabel}
                        </button>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* AUDIENCE (Hvem passer det for?) */}
        {audience && (
          <section className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {audience.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-4">
                  {audience.title}
                </h2>
                <p className="text-[#F5F0E8]/60 text-center max-w-2xl mx-auto mb-16">
                  {audience.intro}
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {audience.groups.map((g, i) => (
                  <AnimatedSection key={g.title} delay={i * 0.1}>
                    <div className="bg-[#292524]/40 rounded-2xl p-7 border border-[#F5F0E8]/5 h-full">
                      <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-5 shadow-lg shadow-[#6B3B20]/15">
                        <g.icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-display text-lg text-[#F5F0E8] mb-2">{g.title}</h3>
                      <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{g.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TJENESTER */}
        <section id="tjenester" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                {segment.tagline}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                Våre tjenester
              </h2>
              <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16">
                Velg en tjeneste for å sende en forespørsel, eller ta kontakt for en uforpliktende
                samtale om hva du trenger hjelp med.
              </p>
            </AnimatedSection>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                segment.services.length === 4
                  ? 'lg:grid-cols-2 max-w-4xl mx-auto'
                  : 'lg:grid-cols-3'
              }`}
            >
              {segment.services.map((t, i) => (
                <AnimatedSection key={t.title} delay={(i % 3) * 0.08}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md hover:border-[#864A28]/20 transition-all duration-300 h-full group flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[#864A28]/10 flex items-center justify-center mb-5 group-hover:bg-[#864A28] transition-colors duration-300">
                      <t.icon size={22} className="text-[#864A28] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-xl text-stone-900 mb-3">{t.title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm mb-6 flex-1">{t.text}</p>
                    <button
                      onClick={() => handleServiceCta(t.title)}
                      className="text-[#864A28] hover:text-[#6B3B20] text-sm font-medium inline-flex items-center gap-2 transition-colors self-start"
                    >
                      Få tilbud på dette
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {segment.note && (
              <div className="mt-10 flex items-start gap-4 bg-white/60 border border-stone-200 rounded-xl px-6 py-5 max-w-2xl mx-auto">
                <div className="w-10 h-10 rounded-lg bg-[#1C1917]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgeCheck size={20} className="text-[#864A28]" />
                </div>
                <div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    <span className="font-semibold text-stone-900">{segment.note.title}:</span>{' '}
                    {segment.note.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PRISER (Månedlig teknisk serviceavtale) */}
        {pricing && (
          <section id="priser" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {pricing.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-4">
                  {pricing.title}
                </h2>
                <p className="text-[#F5F0E8]/60 text-center max-w-2xl mx-auto mb-16">
                  {pricing.intro}
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {pricing.tiers.map((tier, i) => (
                  <AnimatedSection key={tier.days} delay={i * 0.08}>
                    <div className="bg-[#F5F0E8] rounded-2xl p-7 border border-[#F5F0E8]/10 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                      <p className="text-stone-500 text-sm mb-5">{tier.label}</p>
                      <div className="mb-1">
                        <span className="font-display text-3xl text-stone-900">kr {tier.price}</span>
                      </div>
                      <p className="text-stone-400 text-xs mb-7">eks. mva</p>
                      <button
                        onClick={() => handleServiceCta(tier.formLabel)}
                        className="mt-auto w-full accent-gradient text-white font-medium px-5 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                      >
                        Få tilbud
                      </button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.1}>
                <div className="mt-12 max-w-2xl mx-auto bg-[#292524]/40 rounded-2xl p-8 border border-[#F5F0E8]/5">
                  <h3 className="font-display text-xl text-[#F5F0E8] mb-5">{pricing.includesTitle}</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {pricing.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#F5F0E8]/75 text-sm">
                        <Check size={16} className="text-[#C4885C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-center text-[#F5F0E8]/40 text-sm mt-5">{pricing.priceNote}</p>

                <div className="mt-10 max-w-3xl mx-auto space-y-3">
                  {pricing.fineprint.map((p, i) => (
                    <p key={i} className="text-[#F5F0E8]/45 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* SERVICEDETALJER (accordion) */}
        {serviceDetails && (
          <section className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {serviceDetails.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                  {serviceDetails.title}
                </h2>
                <p className="text-stone-500 text-center max-w-2xl mx-auto mb-14">
                  {serviceDetails.intro}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <ServiceAccordion categories={serviceDetails.categories} />
              </AnimatedSection>

              <p className="text-stone-500 text-sm leading-relaxed max-w-3xl mx-auto mt-10 text-center italic">
                {serviceDetails.disclaimer}
              </p>
            </div>
          </section>
        )}

        {/* PLENAVTALEN (robotklipper) */}
        {plenAvtalen && (
          <section id="plenavtalen" className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3 text-center">
                  {plenAvtalen.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-center text-stone-900 mb-4">
                  {plenAvtalen.headline}
                </h2>
                <p className="text-stone-500 text-center max-w-2xl mx-auto mb-8">
                  {plenAvtalen.intro}
                </p>
                <div className="flex justify-center mb-14">
                  <span className="inline-flex items-center gap-2 bg-[#864A28]/10 text-[#864A28] text-sm font-medium px-4 py-2 rounded-full">
                    <Sparkles size={16} />
                    {plenAvtalen.sellingPoint}
                  </span>
                </div>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {plenAvtalen.tiers.map((tier, i) => (
                  <AnimatedSection key={tier.id} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl p-8 border border-stone-200 hover:border-[#864A28]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <p className="text-stone-500 text-sm mb-5">{tier.label}</p>
                      <div className="mb-1">
                        <span className="font-display text-4xl text-stone-900">kr {tier.price}</span>
                      </div>
                      <p className="text-stone-400 text-xs mb-7">per måned · inkl. mva</p>
                      <button
                        onClick={() => handleServiceCta(tier.formLabel)}
                        className="mt-auto w-full accent-gradient text-white font-medium px-5 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20"
                      >
                        {plenAvtalen.ctaLabel}
                      </button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.1}>
                <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-stone-200">
                  <h3 className="font-display text-xl text-stone-900 mb-5">{plenAvtalen.includesTitle}</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {plenAvtalen.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Check size={16} className="text-[#864A28] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-center text-stone-400 text-sm mt-4">{plenAvtalen.priceNote}</p>

                <div className="mt-8 max-w-2xl mx-auto flex items-start gap-4 bg-[#864A28]/5 border border-[#864A28]/20 rounded-xl px-6 py-5">
                  <div className="w-10 h-10 rounded-lg bg-[#864A28]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf size={20} className="text-[#864A28]" />
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed pt-1.5">{plenAvtalen.crossSell}</p>
                </div>

                <div className="mt-8 max-w-3xl mx-auto space-y-3">
                  {plenAvtalen.fineprint.map((p, i) => (
                    <p key={i} className="text-stone-500 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* GIVEAWAY / KAMPANJE */}
        {giveaway && (
          <section className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <AnimatedSection>
                <div className="bg-[#292524]/50 rounded-2xl p-8 md:p-12 border border-[#864A28]/20 text-center">
                  <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#6B3B20]/20">
                    <Gift size={28} className="text-white" />
                  </div>
                  <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3">
                    {giveaway.heading}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                    {giveaway.title}
                  </h2>
                  <p className="text-[#F5F0E8]/70 max-w-xl mx-auto leading-relaxed mb-10">
                    {giveaway.intro}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 text-left mb-10">
                    <div>
                      <h3 className="font-display text-lg text-[#F5F0E8] mb-4">Premien omfatter</h3>
                      <ul className="space-y-3">
                        {giveaway.prizes.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-[#F5F0E8]/75 text-sm">
                            <Check size={16} className="text-[#C4885C] shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-[#F5F0E8] mb-4">{giveaway.stepsIntro}</h3>
                      <ol className="space-y-3">
                        {giveaway.steps.map((s, i) => (
                          <li key={s} className="flex items-start gap-3 text-[#F5F0E8]/75 text-sm">
                            <span className="w-6 h-6 rounded-full bg-[#864A28]/20 border border-[#864A28]/40 text-[#C4885C] text-xs font-medium flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span className="pt-0.5">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <p className="text-[#F5F0E8]/45 text-sm mb-6">{giveaway.drawNote}</p>
                  <p className="font-display text-lg md:text-xl text-[#C4885C] italic mb-8">
                    {giveaway.slogan}
                  </p>

                  <div className="flex gap-3 justify-center">
                    <a
                      href={giveaway.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/70 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={giveaway.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/70 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* BORETTSLAG-CALLOUT */}
        {segment.borettslagNote && (
          <section className="py-12 bg-[#F5F0E8] bg-noise">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-[#864A28]/20 px-6 py-6 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#864A28]/10 flex items-center justify-center shrink-0">
                    <Building2 size={20} className="text-[#864A28]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-stone-900 mb-1">Borettslag og sameier</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{segment.borettslagNote}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* KONTAKT */}
        <section id="kontakt" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">Kontakt</p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-4">
                {segment.formTitle}
              </h2>
              <p className="text-[#F5F0E8]/60 text-center max-w-xl mx-auto mb-16">
                {segment.formIntro}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              <AnimatedSection className="md:col-span-3">
                <ContactForm
                  defaultSegment={segment.segmentLabel}
                  source={segment.formSource}
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
