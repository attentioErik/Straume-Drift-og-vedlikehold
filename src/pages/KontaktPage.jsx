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
        description="Bestill en uforpliktende befaring eller be om tilbud. Vi svarer vanligvis innen én virkedag."
        canonical="https://www.totalbyggdrift.no/kontakt"
      />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        <section className="bg-surface-blue pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Kontakt oss</p>
              <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">La oss hjelpe deg</h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Bestill en uforpliktende befaring eller be om tilbud. Fyll ut skjemaet, så tar vi kontakt — vanligvis innen én virkedag.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12 md:gap-16">
            <AnimatedSection className="md:col-span-3">
              <ContactForm source="Kontaktside" />
            </AnimatedSection>
            <AnimatedSection className="md:col-span-2" delay={0.15}>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
