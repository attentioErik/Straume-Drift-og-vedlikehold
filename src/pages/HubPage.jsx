import { Link } from 'react-router-dom';
import { Check, BadgeCheck, Award, Cpu, UserCheck, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import InnkjopsgruppenSection from '../components/InnkjopsgruppenSection';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';
import { servicesForSegment } from '../data/services';

export const hubs = {
  privat: {
    segment: 'privat',
    eyebrow: 'For privatpersoner',
    title: 'Ventilasjon, vedlikehold og praktisk hjelp for hjemmet',
    intro: 'Friskere inneluft, færre bekymringer og én kontaktperson for boligen din — fra service på ventilasjon til småjobber, basseng og hagearbeid.',
    heroImage: 'https://ucarecdn.com/a1415a6d-4427-4e65-a522-f7a125407df6/',
    formSource: 'Privat-hub',
    seoTitle: 'Privat – ventilasjon og vedlikehold for hjemmet',
    seoDescription: 'Service på ventilasjon, kanalrens, småjobber, basseng og praktisk hjelp for privatpersoner og boliger.',
  },
  bedrift: {
    segment: 'bedrift',
    eyebrow: 'For næring, borettslag og sameier',
    title: 'Drift, vedlikehold og ventilasjon for hele eiendommen',
    intro: 'Én leverandør for hele eiendommen — fra ventilasjon og tekniske anlegg til vaktmestertjenester og uteområder. Med egne avtaler og fast kontaktperson.',
    heroImage: 'https://ucarecdn.com/a104f5b9-c737-441a-81c3-5dfed6d410ed/Skjermbilde20260326kl150921.png',
    formSource: 'Bedrift-hub',
    seoTitle: 'Bedrift – drift, vedlikehold og ventilasjon',
    seoDescription: 'Ventilasjon, tekniske anlegg, vaktmester, uteområder og serviceavtaler for næringsbygg, borettslag og sameier.',
    creds: {
      eyebrow: 'Din egen driftstekniker',
      title: 'Ditt bygg fortjener mer enn tilfeldig oppfølging',
      body: 'Med flere fagbrev innen elektro og over 30 års erfaring fra byggautomasjon tilbyr vi teknisk oppfølging, kontroll via SD-anlegg, praktiske driftstjenester og koordinering av nødvendige faggrupper.',
      stats: [
        { icon: BadgeCheck, label: 'Flere fagbrev innen elektro' },
        { icon: Award, label: 'Over 30 års erfaring' },
        { icon: Cpu, label: 'Kontroll via SD-anlegg' },
        { icon: UserCheck, label: 'Én fast kontaktperson' },
      ],
    },
  },
};

export default function HubPage({ config }) {
  const list = servicesForSegment(config.segment);
  const serviceOptions = list.map((s) => s.formLabel);

  return (
    <>
      <Seo title={config.seoTitle} description={config.seoDescription} canonical={`https://www.totalbyggdrift.no/${config.segment}`} image={config.heroImage} />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="relative pt-16">
          <div className="absolute inset-0">
            <img src={ucare(config.heroImage, { w: 1600 })} alt={config.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-brand-soft font-semibold text-xs tracking-[0.12em] uppercase mb-3">{config.eyebrow}</p>
                <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight">{config.title}</h1>
                <p className="mt-5 text-lg text-white/80 leading-relaxed">{config.intro}</p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Button to="/kontakt" size="lg">Bestill befaring</Button>
                  <Button href="tel:+4746405965" variant="ghostLight" size="lg">Ring 464 05 965</Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* DRIFTSTEKNIKER (bedrift) */}
        {config.creds && (
          <section className="py-20 md:py-24 bg-ink relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
              <AnimatedSection>
                <p className="text-brand-soft font-semibold text-xs tracking-[0.12em] uppercase mb-3">{config.creds.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-5">{config.creds.title}</h2>
                <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">{config.creds.body}</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {config.creds.stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center"><s.icon size={22} className="text-brand-soft" /></span>
                      <span className="text-white/75 text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* TJENESTER */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Tjenester" title={config.segment === 'privat' ? 'Tjenester for deg som privatperson' : 'Tjenester for din virksomhet'} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>

        {/* INNKJØPSGRUPPEN (kun privat) */}
        {config.segment === 'privat' && <InnkjopsgruppenSection />}

        {/* KONTAKT */}
        <section id="kontakt" className="py-20 md:py-28 bg-surface-blue">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Kontakt" title="Få et uforpliktende tilbud" intro="Velg tjenesten du er interessert i og fyll ut skjemaet, så tar vi kontakt." center />
            <div className="mt-12 grid md:grid-cols-5 gap-12">
              <AnimatedSection className="md:col-span-3">
                <ContactForm defaultSegment={config.segment === 'privat' ? 'Privat' : 'Bedrift'} source={config.formSource} services={serviceOptions} />
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
