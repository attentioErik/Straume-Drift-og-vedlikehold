import { Link } from 'react-router-dom';
import { Check, Star, Gift } from 'lucide-react';
import Button from './Button';
import { ucare } from '../../utils/img';

const fmt = (n) => n.toLocaleString('nb-NO');

// Rikt priskort for fastpris-tjenester (ventilasjon).
// CTA: `ctaTo` (Link) eller `onCta` (knapp).
export default function PriceCard({ service, ctaTo, onCta }) {
  const p = service.pricing;
  const hasDisc = p.discountPercent > 0;
  const now = hasDisc ? Math.round(p.basePrice * (1 - p.discountPercent / 100)) : p.basePrice;
  const saving = p.basePrice - now;

  return (
    <div className={`relative bg-white rounded-3xl px-8 pt-10 pb-8 h-full flex flex-col ${service.badge ? 'border-2 border-brand shadow-xl shadow-brand/10' : 'border border-line'}`}>
      {service.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 accent-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-brand/25">
          <Star size={13} fill="currentColor" /> {service.badge}
        </span>
      )}

      <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-1">Service</p>
      <h3 className="font-display text-2xl text-ink leading-tight">{service.title}</h3>
      <p className="text-muted text-sm mt-1 mb-6">{service.priceSubtitle || service.summary}</p>

      {hasDisc && (
        <div className="flex items-center gap-3 mb-2">
          <span className="text-faint line-through">kr {fmt(p.basePrice)}</span>
          <span className="bg-brand-tint text-brand text-xs font-semibold px-3 py-1 rounded-full">Du sparer {fmt(saving)},-</span>
        </div>
      )}
      <div className="flex flex-wrap items-end gap-x-2.5 gap-y-1 mb-1">
        <span className="font-display text-4xl sm:text-5xl text-ink leading-none">kr {fmt(now)},-</span>
        <span className="text-muted text-sm mb-1.5">inkl. mva og kjøring</span>
      </div>

      {service.bonus && (
        <div className="mt-5 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-50 px-4 py-3 text-emerald-800 text-sm font-medium flex items-start gap-2.5">
          <Gift size={17} className="shrink-0 mt-0.5" />
          <span>{service.bonus}</span>
        </div>
      )}

      {service.partnerPerk && (
        <div className="mt-4 rounded-xl border border-brand/20 bg-brand-tint/60 px-4 py-4">
          <img src={ucare(service.partnerPerk.logo, { w: 320 })} alt="innkjøpsGRUPPEN" className="h-6 w-auto mb-2.5" loading="lazy" />
          <p className="text-ink-soft text-sm leading-relaxed">{service.partnerPerk.note}</p>
        </div>
      )}

      <p className="font-semibold text-ink mt-7 mb-1">Dette er inkludert:</p>
      <ul className="mb-7">
        {service.included.map((it) => (
          <li key={it} className="flex items-start gap-3 py-3 border-b border-line last:border-0 text-ink-soft text-sm">
            <Check size={17} className="text-brand shrink-0 mt-0.5" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {ctaTo ? (
          <Button to={ctaTo} size="lg" className="w-full">Bestill service</Button>
        ) : (
          <Button onClick={onCta} size="lg" className="w-full">Bestill service</Button>
        )}
        <p className="text-center text-muted text-xs mt-3">
          Usikker på valg? <Link to="/kontakt" className="text-brand font-semibold underline underline-offset-2">Få en vurdering</Link> før bestilling
        </p>
      </div>
    </div>
  );
}
