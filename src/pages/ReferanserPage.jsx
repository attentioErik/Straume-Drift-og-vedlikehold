import { Star, Quote, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';
import { testimonials, galleryItems } from '../data/content';

export default function ReferanserPage() {
  return (
    <>
      <Seo title="Referanser og galleri" description="Kundeomtaler og et utvalg av prosjekter og oppdrag vi har utført innen ventilasjon, drift og vedlikehold." canonical="https://www.totalbyggdrift.no/referanser" />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        <section className="bg-surface-blue pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Referanser</p>
              <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">Hva kundene sier — og hva vi gjør</h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">Omtaler fra fornøyde kunder og et utvalg av prosjekter vi har utført.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* OMTALER */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Kundeomtaler" title="Tilbakemeldinger fra kunder" />
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name + i} delay={i * 0.1}>
                  <div className="bg-surface-blue rounded-3xl p-8 border border-line h-full flex flex-col">
                    <div className="flex gap-1 text-brand mb-4">{[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}</div>
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
            </div>
          </div>
        </section>

        {/* GALLERI */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Vårt arbeid" title="Galleri" intro="Et utvalg av prosjekter og oppdrag vi har utført for våre kunder." center />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {galleryItems.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.06} className={item.span}>
                  <div className="relative group w-full h-full rounded-2xl overflow-hidden border border-line cursor-pointer">
                    <img src={ucare(item.img, { w: 800 })} alt={item.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/55 transition-colors duration-300 flex items-end p-5">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{item.label}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="accent-gradient rounded-[2rem] px-8 py-12 text-center text-white">
              <h2 className="font-display text-2xl md:text-3xl mb-4">Vil du bli vår neste fornøyde kunde?</h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8">Ta kontakt for en uforpliktende befaring.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="tel:+4746405965" variant="white" size="lg"><Phone size={18} /> Ring 464 05 965</Button>
                <Button to="/kontakt" variant="ghostLight" size="lg">Send forespørsel</Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
