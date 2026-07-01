import { CheckCircle, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';

const bullets = [
  'Fast oppfølging',
  'Profesjonelt resultat',
  'Én leverandør for alt',
];

const HERO_IMAGE = 'https://ucarecdn.com/a6c2959e-d551-4815-a1dd-30d92097599e/hf_20260414_113345_7b895200f3b14c328ed1f0a1b4da82b21.png';

export default function UteomraderPage() {
  const scrollToKontakt = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Seo
        title="Drift og vedlikehold av uteområder"
        description="Profesjonelt vedlikehold av plen, grøntarealer og uteområder for borettslag og bygg. Fast oppfølging og én leverandør for alt."
        canonical="https://www.totalbyggdrift.no/drift-vedlikehold-uteomrader"
        image={HERO_IMAGE}
      />
      <div className="font-body text-stone-800 bg-[#F5F0E8] min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-16">
          <div className="absolute inset-0">
            <img
              src={ucare(HERO_IMAGE, { w: 1600 })}
              alt="Drift og vedlikehold av uteområder"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/60 to-[#1C1917]/30" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-4">
                  Uteområder
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F5F0E8] leading-tight">
                  Drift og vedlikehold av uteområder
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="mt-6 text-xl md:text-2xl text-[#F5F0E8]/90 font-display italic">
                  Ta vare på eiendommen
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="mt-4 text-lg text-[#F5F0E8]/70 max-w-xl leading-relaxed">
                  Vi tar oss av plen, grøntarealer og løpende vedlikehold for borettslag og bygg.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
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

        {/* INFO + BULLETS */}
        <section className="py-20 md:py-28 bg-[#F5F0E8] bg-noise">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <AnimatedSection>
                <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-3">
                  Hva vi tilbyr
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
                  Profesjonelt vedlikehold for borettslag og bygg
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Vi tar oss av plen, grøntarealer og løpende vedlikehold. Med én leverandør
                  slipper dere å koordinere flere aktører — vi sørger for at uteområdene ser
                  velstelt og ordentlig ut hele sesongen.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <ul className="space-y-4">
                  {bullets.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 shadow-sm border border-stone-100"
                      style={{
                        animation: 'fadeIn 0.4s ease forwards',
                        animationDelay: `${0.2 + i * 0.1}s`,
                        opacity: 0,
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center shrink-0">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                      <p className="text-stone-800 font-medium text-lg pt-1.5">{b}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center md:text-left">
                  <button
                    onClick={scrollToKontakt}
                    className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20 inline-flex items-center gap-2"
                  >
                    <Send size={18} />
                    Få et tilbud nå
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="py-20 md:py-28 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="text-[#C4885C] font-medium text-sm tracking-widest uppercase mb-3 text-center">Kontakt</p>
              <h2 className="font-display text-3xl md:text-4xl text-center text-[#F5F0E8] mb-4">
                Få et uforpliktende tilbud
              </h2>
              <p className="text-[#F5F0E8]/60 text-center max-w-xl mx-auto mb-16">
                Fyll ut skjemaet under, så tar vi kontakt med en løsning tilpasset deres uteområder.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              <AnimatedSection className="md:col-span-3">
                <ContactForm defaultSegment="Bedrift" source="Uteområder-landingsside" />
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
