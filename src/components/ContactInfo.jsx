import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Kontaktinformasjon</h3>
        <div className="space-y-4">
          <a
            href="tel:+4746405965"
            className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
          >
            <Phone size={18} className="text-[#C4885C]" />
            +47 46 40 59 65
          </a>
          <a
            href="mailto:post@totalbyggdrift.no"
            className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C4885C] transition-colors"
          >
            <Mail size={18} className="text-[#C4885C]" />
            post@totalbyggdrift.no
          </a>
          <div className="flex items-center gap-3 text-[#F5F0E8]/70">
            <MapPin size={18} className="text-[#C4885C]" />
            Straume, Vestland
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-[#F5F0E8] mb-4">Følg oss</h3>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/straume_drift_vedlikehold/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571583957448"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C4885C] hover:border-[#C4885C]/30 transition-colors"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div className="bg-[#292524]/40 rounded-2xl p-6 border border-[#F5F0E8]/5">
        <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">
          Vi tilbyr alltid en uforpliktende samtale for å kartlegge dine behov.
          Ingen jobb er for liten – ta kontakt, så finner vi en løsning.
        </p>
      </div>
    </div>
  );
}
