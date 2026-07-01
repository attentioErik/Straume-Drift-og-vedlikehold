import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl text-ink mb-4">Kontaktinformasjon</h3>
        <div className="space-y-4">
          <a href="tel:+4746405965" className="flex items-center gap-3 text-ink-soft hover:text-brand transition-colors">
            <span className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center">
              <Phone size={18} className="text-brand" />
            </span>
            464 05 965
          </a>
          <a href="mailto:post@totalbyggdrift.no" className="flex items-center gap-3 text-ink-soft hover:text-brand transition-colors">
            <span className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center">
              <Mail size={18} className="text-brand" />
            </span>
            post@totalbyggdrift.no
          </a>
          <div className="flex items-center gap-3 text-ink-soft">
            <span className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center">
              <MapPin size={18} className="text-brand" />
            </span>
            Boliger, borettslag & næring
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink mb-4">Følg oss</h3>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/straume_drift_vedlikehold/" target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center text-ink-soft hover:text-white hover:bg-brand hover:border-brand transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61571583957448" target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center text-ink-soft hover:text-white hover:bg-brand hover:border-brand transition-colors">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div className="bg-surface-blue rounded-3xl p-6 border border-line">
        <p className="text-ink-soft text-sm leading-relaxed">
          Vi tilbyr alltid en uforpliktende befaring for å kartlegge behovet ditt.
          Ingen jobb er for liten — ta kontakt, så finner vi en løsning.
        </p>
      </div>
    </div>
  );
}
