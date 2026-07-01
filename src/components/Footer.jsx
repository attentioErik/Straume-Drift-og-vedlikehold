import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { ucare } from '../utils/img';

const LOGO_WHITE = 'https://ucarecdn.com/73413fc5-89f7-40af-b5ad-602c75a7d606/logo_white_transperant300x.png';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={ucare(LOGO_WHITE, { w: 280 })} alt="Totalbyggdrift" className="h-8 mb-5" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Kanalrens og service på ventilasjon — i tillegg til et komplett spekter av drift- og
              vedlikeholdstjenester for boliger, borettslag og næringsbygg.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/straume_drift_vedlikehold/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571583957448"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-brand transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-white/50 mb-4">Sider</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/privat" className="hover:text-brand-soft transition-colors">Privat</Link></li>
              <li><Link to="/bedrift" className="hover:text-brand-soft transition-colors">Bedrift</Link></li>
              <li><Link to="/tjenester" className="hover:text-brand-soft transition-colors">Tjenester</Link></li>
              <li><Link to="/om-oss" className="hover:text-brand-soft transition-colors">Om oss</Link></li>
              <li><Link to="/referanser" className="hover:text-brand-soft transition-colors">Referanser</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-white/50 mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+4746405965" className="flex items-center gap-3 hover:text-brand-soft transition-colors">
                  <Phone size={16} className="text-brand-soft" /> 464 05 965
                </a>
              </li>
              <li>
                <a href="mailto:post@totalbyggdrift.no" className="flex items-center gap-3 hover:text-brand-soft transition-colors">
                  <Mail size={16} className="text-brand-soft" /> post@totalbyggdrift.no
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-soft" /> Boliger, borettslag & næring
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Totalbyggdrift. Alle rettigheter reservert.</p>
          <a
            href="https://www.attentio.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-brand-soft text-xs transition-colors"
          >
            Utviklet av attentio
          </a>
        </div>
      </div>
    </footer>
  );
}
