import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171412] border-t border-[#F5F0E8]/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="https://ucarecdn.com/73413fc5-89f7-40af-b5ad-602c75a7d606/logo_white_transperant300x.png" alt="Totalbyggdrift" className="h-7 opacity-80" />
          <p className="text-[#F5F0E8]/30 text-sm">
            &copy; {new Date().getFullYear()} Totalbyggdrift. Alle rettigheter reservert.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/straume_drift_vedlikehold/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571583957448"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F0E8]/30 hover:text-[#C4885C] transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-[#F5F0E8]/5 text-center">
          <a
            href="https://www.attentio.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F0E8]/20 hover:text-[#F5F0E8]/40 text-xs transition-colors"
          >
            Utviklet av attentio
          </a>
        </div>
      </div>
    </footer>
  );
}
