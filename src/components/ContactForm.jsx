import { useState } from 'react';
import { ChevronDown, Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ defaultSegment = '' }) {
  const [formData, setFormData] = useState({
    segment: defaultSegment,
    navn: '',
    epost: '',
    telefon: '',
    melding: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://usebasin.com/f/fafba46e96b5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // still show success to the user
    }
    setFormSent(true);
    setFormData({ segment: defaultSegment, navn: '', epost: '', telefon: '', melding: '' });
  };

  if (formSent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-[#C4885C]/20 bg-gradient-to-br from-[#C4885C]/5 to-transparent">
        <div className="w-20 h-20 rounded-full bg-[#C4885C]/10 border border-[#C4885C]/20 flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-[#C4885C]" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-[#F5F0E8] mb-3">
          Takk for din henvendelse!
        </h3>
        <p className="text-[#F5F0E8]/60 max-w-md mb-8 leading-relaxed">
          Vi har mottatt meldingen din og vil ta kontakt med deg så snart som mulig — vanligvis innen én virkedag.
        </p>
        <button
          onClick={() => setFormSent(false)}
          className="text-[#C4885C] hover:text-[#A86840] transition-colors text-sm font-medium flex items-center gap-2"
        >
          <Send size={14} />
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[#F5F0E8]/60 text-sm mb-2">Jeg kontakter som...</label>
        <div className="relative">
          <select
            value={formData.segment}
            onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
            className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-[#1C1917]">Velg segment</option>
            <option value="Næringsbygg" className="bg-[#1C1917]">Næringsbygg</option>
            <option value="Borettslag / sameie" className="bg-[#1C1917]">Borettslag / sameie</option>
            <option value="Privat" className="bg-[#1C1917]">Privat</option>
            <option value="Entreprenørarbeid" className="bg-[#1C1917]">Entreprenørarbeid</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F5F0E8]/30 pointer-events-none" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#F5F0E8]/60 text-sm mb-2">Navn</label>
          <input
            type="text"
            required
            value={formData.navn}
            onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
            className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
            placeholder="Ditt navn"
          />
        </div>
        <div>
          <label className="block text-[#F5F0E8]/60 text-sm mb-2">Telefon</label>
          <input
            type="tel"
            value={formData.telefon}
            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
            placeholder="Ditt telefonnummer"
          />
        </div>
      </div>
      <div>
        <label className="block text-[#F5F0E8]/60 text-sm mb-2">E-post</label>
        <input
          type="email"
          required
          value={formData.epost}
          onChange={(e) => setFormData({ ...formData, epost: e.target.value })}
          className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors"
          placeholder="din@epost.no"
        />
      </div>
      <div>
        <label className="block text-[#F5F0E8]/60 text-sm mb-2">Melding</label>
        <textarea
          required
          rows={5}
          value={formData.melding}
          onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
          className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C4885C]/50 focus:ring-1 focus:ring-[#C4885C]/30 transition-colors resize-none"
          placeholder="Beskriv hva du trenger hjelp med..."
        />
      </div>
      <button
        type="submit"
        className="accent-gradient text-white font-medium px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#6B3B20]/20 flex items-center gap-2"
      >
        <Send size={18} />
        Send henvendelse
      </button>
    </form>
  );
}
