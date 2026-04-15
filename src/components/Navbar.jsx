import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SECTIONS = [
  ['tjenester', 'Tjenester'],
  ['om', 'Om oss'],
  ['hvorfor', 'Hvorfor oss'],
  ['referanser', 'Referanser'],
  ['galleri', 'Galleri'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleSectionClick = (id) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1917]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={handleLogoClick}>
          <img src="https://ucarecdn.com/73413fc5-89f7-40af-b5ad-602c75a7d606/logo_white_transperant300x.png" alt="Totalbyggdrift" className="h-8" />
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#F5F0E8]/80">
          {SECTIONS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleSectionClick(id)}
              className="hover:text-[#C4885C] transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <Link
            to="/kontakt"
            className="hover:text-[#C4885C] transition-colors duration-200"
          >
            Kontakt
          </Link>
          <Link
            to="/kontakt"
            className="accent-gradient text-white text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Ta kontakt
          </Link>
        </div>

        <button
          className="md:hidden text-[#F5F0E8]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1C1917] border-t border-white/10 px-4 pb-4 space-y-3">
          {SECTIONS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleSectionClick(id)}
              className="block w-full text-left text-[#F5F0E8]/80 hover:text-[#C4885C] py-2 transition-colors"
            >
              {label}
            </button>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-left text-[#F5F0E8]/80 hover:text-[#C4885C] py-2 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
