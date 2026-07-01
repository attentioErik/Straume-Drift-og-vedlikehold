import { Link } from 'react-router-dom';
import { Wind, Cog, Waves, ShieldCheck, Users, Zap, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';
import { ucare } from '../utils/img';

const kompetanse = [
  { icon: Wind, title: 'Ventilasjon', desc: 'Kanalrens og service på avtrekks- og balansert ventilasjon.' },
  { icon: Cog, title: 'Tekniske anlegg', desc: 'Automasjon, SD-anlegg, ventilasjon, varme og kjøling.' },
  { icon: Waves, title: 'Bassengdrift', desc: 'Drift og vedlikehold av basseng og badeanlegg.' },
  { icon: ShieldCheck, title: 'Regelverk', desc: 'Kunnskap om krav og forskrifter for trygg drift.' },
];

const fordeler = [
  { icon: Users, title: 'Én kontaktperson', desc: 'Du slipper å forholde deg til mange leverandører. Vi har full oversikt.' },
  { icon: ShieldCheck, title: 'Fleksible avtaler', desc: 'Tilpasset ditt behov — fra fast service til hjelp ved behov.' },
  { icon: Zap, title: 'Rask respons', desc: 'Kort vei fra telefon til handling. Vi stiller opp når det haster.' },
  { icon: Cog, title: 'Teknisk kompetanse', desc: 'Flere fagbrev innen elektro og over 30 års erfaring fra byggautomasjon.' },
];

const ABOUT_IMG = 'https://ucarecdn.com/746bb917-c71f-4f95-a68a-c6ec77cecad2/DSC00529Edit.jpg';

export default function OmOssPage() {
  return (
    <>
      <Seo title="Om oss" description="Totalbyggdrift har lang erfaring innen ventilasjon, automasjon, tekniske anlegg og praktisk vedlikehold for boliger, borettslag og næringsbygg." canonical="https://www.totalbyggdrift.no/om-oss" />
      <div className="font-body text-ink bg-white min-h-screen">
        <Navbar />

        <section className="bg-surface-blue pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Om oss</p>
              <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">Erfaring du kan stole på</h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Totalbyggdrift leverer ventilasjon, drift og vedlikehold for boliger, borettslag og næringsbygg — med fagkompetanse og en personlig, lokal oppfølging.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden border border-line shadow-xl">
                <img src={ucare(ABOUT_IMG, { w: 900 })} alt="Totalbyggdrift i arbeid" className="w-full h-[360px] object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-brand font-semibold text-xs tracking-[0.12em] uppercase mb-3">Vår historie</p>
              <h2 className="font-display text-3xl text-ink mb-5">Fra teknisk drift til komplett ventilasjonspartner</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>Vi har lang erfaring innen automasjon, tekniske anlegg og praktisk vedlikehold. Med bakgrunn fra drift av basseng, tekniske styringssystemer og bygningsvedlikehold tilbyr vi en bred og pålitelig tjeneste.</p>
                <p>I dag har vi spisset tilbudet mot kanalrens og service på ventilasjon — samtidig som vi leverer hele spekteret av drift og vedlikehold for næringsbygg, borettslag og privat.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Kompetanse" title="Dette kan vi" center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {kompetanse.map((k, i) => (
                <AnimatedSection key={k.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-line p-6 h-full">
                    <span className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center mb-4"><k.icon size={22} className="text-brand" /></span>
                    <h3 className="font-display text-lg text-ink mb-1.5">{k.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{k.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Hvorfor oss" title="Det som skiller oss ut" center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fordeler.map((u, i) => (
                <AnimatedSection key={u.title} delay={i * 0.08}>
                  <div className="text-center p-2">
                    <span className="w-14 h-14 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand/20"><u.icon size={24} className="text-white" /></span>
                    <h3 className="font-display text-lg text-ink mb-2">{u.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="accent-gradient rounded-[2rem] px-8 py-12 text-center text-white">
              <h2 className="font-display text-2xl md:text-3xl mb-4">La oss ta en prat</h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8">Lurer du på hva vi kan gjøre for boligen eller bygget ditt? Ta kontakt for en uforpliktende befaring.</p>
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
