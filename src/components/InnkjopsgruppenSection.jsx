import { Check, ArrowUpRight, Info } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Button from './ui/Button';
import { ucare } from '../utils/img';
import { innkjopsgruppen as ig } from '../data/content';

// Medlemsfordel-seksjon: mørkt band med innkjøpsGRUPPEN-logo, fordeler og lenke.
export default function InnkjopsgruppenSection() {
  return (
    <section className="py-20 md:py-24 bg-ink relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-brand-soft font-semibold text-xs tracking-[0.12em] uppercase mb-3">{ig.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">{ig.title}</h2>
              <p className="mt-5 text-white/70 leading-relaxed max-w-lg">{ig.text}</p>
              <ul className="mt-6 space-y-3">
                {ig.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check size={17} className="text-brand-soft shrink-0 mt-0.5" /><span>{b}</span>
                  </li>
                ))}
              </ul>
              {ig.highlight && (
                <p className="mt-6 inline-flex items-center gap-2 bg-brand/15 border border-brand/30 text-white text-sm font-medium rounded-full px-4 py-2">
                  <Info size={15} className="text-brand-soft shrink-0" />
                  {ig.highlight}
                </p>
              )}
              <div className="mt-8">
                <Button href={ig.url} target="_blank" rel="noopener noreferrer" variant="white">
                  Les mer om innkjøpsGRUPPEN <ArrowUpRight size={17} />
                </Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white rounded-3xl border border-white/10 px-10 py-12 w-full max-w-sm flex items-center justify-center">
                <img src={ucare(ig.logoLight, { w: 520 })} alt="innkjøpsGRUPPEN" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
