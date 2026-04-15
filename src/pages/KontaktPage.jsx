import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Seo from '../components/Seo';

export default function KontaktPage() {
  return (
    <>
      <Seo
        title="Kontakt"
        description="Kontakt Totalbyggdrift for et uforpliktende tilbud. Vi svarer vanligvis innen én virkedag."
        canonical="https://www.totalbyggdrift.no/kontakt"
      />
      <div className="font-body text-stone-800 bg-[#F5F0E8] min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="bg-[#F5F0E8] bg-noise pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-[#864A28] font-medium text-sm tracking-widest uppercase mb-4">Kontakt oss</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
                La oss hjelpe deg
              </h1>
              <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                Har du spørsmål eller ønsker et uforpliktende tilbud? Fyll ut skjemaet,
                så tar vi kontakt — vanligvis innen én virkedag.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="py-16 md:py-24 bg-[#1C1917] bg-noise relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#864A28]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#864A28]/5 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              <AnimatedSection className="md:col-span-3">
                <ContactForm />
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
