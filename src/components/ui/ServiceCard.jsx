import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Tjenestekort som lenker til /tjenester/:slug
export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/tjenester/${service.slug}`}
      className="group block bg-white rounded-2xl p-6 border border-line hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all h-full"
    >
      <span className="w-11 h-11 rounded-full bg-brand-tint flex items-center justify-center mb-4">
        <Icon size={20} className="text-brand" />
      </span>
      <h3 className="font-display text-lg text-ink mb-1.5">{service.title}</h3>
      <p className="text-muted text-sm leading-relaxed">{service.summary}</p>
      <span className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
        Les mer <ArrowRight size={15} />
      </span>
    </Link>
  );
}
