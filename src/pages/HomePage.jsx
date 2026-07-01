import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, Phone, Star, Play, X, BadgeCheck, Building2, Quote,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PriceCard from '../components/ui/PriceCard';
import InnkjopsgruppenSection from '../components/InnkjopsgruppenSection';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';
import { ventilasjonServices, driftServices, getService } from '../data/services';
import { stats, steps, testimonials, videos } from '../data/content';

const HERO_IMG = 'https://ucarecdn.com/7be3c1eb-183b-4e98-b38a-c6a229ad1a62/';

const priceServices = ['avtrekksventilasjon', 'balansert-ventilasjon'].map(getService);
const aggregat = getService('ventilasjonsaggregat');

export default function HomePage() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  return (
    <>
      <Seo
        title="Kanalrens og service på ventilasjon"
        description="Friskere inneluft starter med ren ventilasjon. Profesjonell kanalrens og service på avtrekks- og balansert ventilasjon for boliger, borettslag og næringsbygg."
        image={HERO_IMG}
      />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="relative min-h-[88dvh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={ucare(HERO_IMG, { w: 1920 })}
              alt="Frisk inneluft i et hjem med god ventilasjon"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-xl">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 bg-brand-tint text-brand text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full">
                  Kanalrens & service ventilasjon
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] mt-6">
                  Friskere inneluft starter med <span className="text-brand">ren ventilasjon</span>.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="mt-6 text-lg text-ink-soft max-w-lg leading-relaxed">
                  Profesjonell kanalrens og service på ventilasjon — for boliger, borettslag og
                  næringsbygg. Rask respons og sertifiserte fagfolk.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Button to="/kontakt" size="lg">Bestill befaring</Button>
                  <Button to="/tjenester" variant="white" size="lg">Se priser</Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-soft">
                  {['Sertifiserte fagfolk', 'Fast pris', 'Egne avtaler for borettslag'].map((t) => (
                    <span key={t} className="flex items-center gap-2">
                      <Check size={16} className="text-brand" /> {t}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* TJENESTER (ventilasjon) */}
        <section id="tjenester" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Våre tjenester"
              title="Alt ventilasjonen din trenger"
              intro="Fra akutt behov til fast service — vi holder anlegget rent og effektivt, og inneluften frisk hele året."
            />
            <div className="mt-12 border-t border-line">
              {ventilasjonServices.filter((s) => s.slug !== 'kanalrens').map((s, i) => (
                <AnimatedSection key={s.slug} delay={(i % 4) * 0.05}>
                  <Link
                    to={`/tjenester/${s.slug}`}
                    className="group flex items-center gap-5 border-b border-line border-l-[3px] border-l-brand/60 hover:border-l-brand hover:bg-surface-blue/60 transition-all pl-6 pr-4 py-6"
                  >
                    <span className="w-11 h-11 rounded-full bg-brand-tint flex items-center justify-center shrink-0">
                      <s.icon size={20} className="text-brand" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl text-ink">{s.title}</h3>
                      <p className="text-muted text-sm mt-1 max-w-xl">{s.summary}</p>
                    </div>
                    <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-soft group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors shrink-0">
                      <ArrowRight size={17} />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PRISER */}
        <section id="priser" className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Priser" title="Faste priser på service" center />
            <AnimatedSection delay={0.1}>
              <div className="flex justify-center mt-6 mb-12">
                <span className="inline-flex items-center gap-2 bg-brand-tint text-brand text-sm font-semibold px-4 py-2 rounded-full">
                  <BadgeCheck size={16} /> Introtilbud: −25 % på all service nå
                </span>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
              {priceServices.map((s, i) => (
                <AnimatedSection key={s.slug} delay={i * 0.1}>
                  <PriceCard service={s} ctaTo={`/tjenester/${s.slug}`} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.15}>
              <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-ink rounded-3xl px-8 py-6 text-white">
                <p className="text-white/80 text-sm leading-relaxed">
                  Borettslag og næringsbygg får egne priser og avtaler på kanalrens og ventilasjonsservice.
                </p>
                <Button to="/bedrift" variant="white" size="sm" className="shrink-0">
                  Be om tilbud <ArrowRight size={16} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* INNKJØPSGRUPPEN */}
        <InnkjopsgruppenSection />

        {/* FORDELER / STATS */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Våre fordeler" title="Et team som holder luften ren" />
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-3xl overflow-hidden border border-line">
              {stats.map((st, i) => (
                <AnimatedSection key={st.label} delay={i * 0.08}>
                  <div className="bg-white p-8 h-full">
                    <div className="font-display text-5xl md:text-6xl text-brand leading-none tracking-tight">{st.value}</div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">{st.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* SLIK FUNGERER DET */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Slik fungerer det"
              title="Fra henvendelse til ren ventilasjon i 5 steg"
              intro="Det er enklere enn du tror — fem steg, så er inneluften frisk igjen."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl border border-line p-6 h-full">
                    <div className="font-display text-3xl text-brand/30">{step.num}</div>
                    <p className="text-brand text-xs font-semibold uppercase tracking-wider mt-3">{step.tag}</p>
                    <h3 className="font-display text-lg text-ink mt-1">{step.title}</h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* KUNDEOMTALER */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Kundeomtaler" title="Hva kundene sier om oss" />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name + i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                  <div className="bg-surface-blue rounded-3xl p-8 border border-line h-full flex flex-col">
                    <div className="flex gap-1 text-brand mb-4">
                      {[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}
                    </div>
                    <Quote size={28} className="text-brand/20 mb-3" />
                    <p className="text-ink-soft leading-relaxed flex-1">{t.text}</p>
                    <div className="flex items-center gap-3 mt-6">
                      {t.img && <img src={ucare(t.img, { w: 120 })} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />}
                      <div>
                        <p className="font-display text-ink text-sm">{t.name}</p>
                        <p className="text-muted text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={0.2}>
                <div className="accent-gradient rounded-3xl p-8 text-white h-full flex flex-col justify-center text-center">
                  <div className="font-display text-6xl leading-none">4.9</div>
                  <div className="flex gap-1 justify-center text-white my-3">
                    {[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-white/85 text-sm">Snittvurdering fra kunder på utført ventilasjonsservice.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* VI TAR OSS AV RESTEN OGSÅ */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Vi tar oss av resten også"
              title="Dagens tjenester for drift og vedlikehold"
              intro="Som tidligere leverer vi et komplett spekter av drifts- og vedlikeholdstjenester for næringsbygg, borettslag og privat."
            />

            <AnimatedSection delay={0.1}>
              <Link to={`/tjenester/${aggregat.slug}`} className="group block mt-12 mb-6 rounded-3xl overflow-hidden border border-line bg-ink text-white">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <p className="text-brand-soft text-xs font-semibold uppercase tracking-wider mb-3">{aggregat.eyebrow}</p>
                    <h3 className="font-display text-2xl md:text-3xl mb-3">{aggregat.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{aggregat.summary}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-7 text-sm text-white/80">
                      {aggregat.included.slice(0, 3).map((it) => (
                        <span key={it} className="flex items-center gap-2"><Check size={15} className="text-brand-soft" />{it}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      Be om befaring <ArrowRight size={17} />
                    </span>
                  </div>
                  <div className="relative min-h-[220px]">
                    <img src={ucare(aggregat.image, { w: 800 })} alt={aggregat.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {driftServices.filter((s) => s.slug !== 'serviceavtale').map((s, i) => (
                <AnimatedSection key={s.slug} delay={(i % 3) * 0.06}>
                  <Link to={`/tjenester/${s.slug}`} className="group block bg-white rounded-2xl p-6 border border-line hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all h-full">
                    <span className="w-11 h-11 rounded-full bg-brand-tint flex items-center justify-center mb-4">
                      <s.icon size={20} className="text-brand" />
                    </span>
                    <h3 className="font-display text-lg text-ink mb-1.5">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{s.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                      Les mer <ArrowRight size={15} />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* SE OSS I ARBEID */}
        <section className="py-20 md:py-28 bg-ink relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              eyebrow="Se oss i arbeid"
              title="Hvorfor velge Totalbyggdrift?"
              intro="Lang erfaring innen drift, vedlikehold og ventilasjon — se hvordan vi jobber."
              dark center
            />
            <AnimatedSection delay={0.1}>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {videos.map((video, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer" onClick={() => setFullscreenVideo(video.full)}>
                    <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                      <iframe src={video.bg} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} title={video.title} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={26} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="mt-10 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-full bg-brand/20 flex items-center justify-center shrink-0"><Building2 size={20} className="text-brand-soft" /></span>
                  <div>
                    <h3 className="font-display text-lg text-white">Egne avtaler for borettslag og næringsbygg</h3>
                    <p className="text-white/60 text-sm mt-1">Fast kontaktperson, fleksible serviceavtaler og egne priser. Vi tilpasser oss bygget og budsjettet deres.</p>
                  </div>
                </div>
                <Button to="/bedrift" variant="white" size="sm" className="shrink-0">Be om tilbud</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA-BAND */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="accent-gradient rounded-[2rem] px-8 py-14 md:py-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative">
                  <h2 className="font-display text-3xl md:text-4xl mb-4">Klar for friskere luft?</h2>
                  <p className="text-white/85 max-w-xl mx-auto mb-9">
                    Bestill en uforpliktende befaring, så finner vi riktig service for ditt anlegg.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="tel:+4746405965" variant="white" size="lg"><Phone size={18} /> Ring 464 05 965</Button>
                    <Button to="/kontakt" variant="ghostLight" size="lg">Send forespørsel</Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>

      {fullscreenVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setFullscreenVideo(null)}>
          <button onClick={() => setFullscreenVideo(null)} className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X size={20} />
          </button>
          <div className="w-full max-w-md rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
              <iframe src={fullscreenVideo} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="Totalbyggdrift video" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
