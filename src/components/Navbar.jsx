import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { ucare } from '../utils/img';
import Button from './ui/Button';

const LOGO = 'https://ucarecdn.com/30423fd5-034d-4a17-b174-0e026d344528/';

const LINKS = [
  ['/privat', 'Privat'],
  ['/bedrift', 'Bedrift'],
  ['/tjenester', 'Tjenester'],
  ['/om-oss', 'Om oss'],
  ['/referanser', 'Referanser'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
          <img src={ucare(LOGO, { w: 280 })} alt="Totalbyggdrift" className="h-7" />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {LINKS.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors duration-200 hover:text-brand ${isActive(to) ? 'text-brand' : ''}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+4746405965"
            className="flex items-center gap-2 text-ink hover:text-brand transition-colors"
          >
            <Phone size={15} className="text-brand" />
            464 05 965
          </a>
          <Button to="/kontakt" size="sm">Bestill befaring</Button>
        </div>

        <button
          className="lg:hidden text-ink flex items-center justify-center min-h-[44px] min-w-[44px] -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-line px-4 pb-5 pt-2 space-y-1">
          {LINKS.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="block w-full text-ink-soft hover:text-brand py-2.5 font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+4746405965"
            className="flex items-center gap-2 text-ink py-2.5 font-medium"
          >
            <Phone size={16} className="text-brand" />
            464 05 965
          </a>
          <Button to="/kontakt" className="w-full mt-2" onClick={() => setMenuOpen(false)}>
            Bestill befaring
          </Button>
        </div>
      )}
    </nav>
  );
}
