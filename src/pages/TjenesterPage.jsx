import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';
import { ventilasjonServices, driftServices } from '../data/services';
import { Phone } from 'lucide-react';

export default function TjenesterPage() {
  return (
    <>
      <Seo
        title="Tjenester"
        description="Kanalrens og service på ventilasjon, samt et komplett spekter av drift- og vedlikeholdstjenester for boliger, borettslag og næringsbygg."
        canonical="https://www.totalbyggdrift.no/tjenester"
      />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        <section className="bg-surface-blue pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Tjenester</p>
              <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">Alt vi kan hjelpe deg med</h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Fra kanalrens og service på ventilasjon til drift, vedlikehold og praktisk hjelp — for boliger, borettslag og næringsbygg.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Ventilasjon" title="Kanalrens & service på ventilasjon" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ventilasjonServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Drift & vedlikehold" title="Drift, vedlikehold og praktisk hjelp" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {driftServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="accent-gradient rounded-[2rem] px-8 py-12 text-center text-white">
              <h2 className="font-display text-2xl md:text-3xl mb-4">Usikker på hva du trenger?</h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8">Ta kontakt for en uforpliktende befaring, så finner vi riktig løsning sammen.</p>
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
