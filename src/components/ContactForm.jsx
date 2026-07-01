import { useState, useEffect } from 'react';
import { ChevronDown, Send, CheckCircle } from 'lucide-react';
import Button from './ui/Button';

const DEFAULT_SEGMENTS = ['Privat', 'Bedrift'];
const INPUT =
  'w-full bg-white border border-line rounded-xl px-4 py-3 text-ink placeholder-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors';

export default function ContactForm({
  defaultSegment = '',
  source = '',
  services = null,
  presetService = '',
  presetNonce = 0,
}) {
  const serviceMode = Array.isArray(services) && services.length > 0;

  const [formData, setFormData] = useState({
    segment: defaultSegment,
    tjeneste: presetService,
    navn: '',
    epost: '',
    telefon: '',
    melding: '',
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    if (presetService) setFormData((prev) => ({ ...prev, tjeneste: presetService }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetNonce]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      navn: formData.navn,
      epost: formData.epost,
      telefon: formData.telefon,
      melding: formData.melding,
      segment: formData.segment,
    };
    if (serviceMode) payload.tjeneste = formData.tjeneste || 'Ikke spesifisert';
    if (source) payload.kilde = source;

    try {
      await fetch('https://usebasin.com/f/fafba46e96b5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // still show success to the user
    }
    setFormSent(true);
    setFormData({ segment: defaultSegment, tjeneste: '', navn: '', epost: '', telefon: '', melding: '' });
  };

  if (formSent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border border-line bg-surface-blue">
        <div className="w-20 h-20 rounded-full bg-brand-tint flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-brand" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">Takk for din henvendelse!</h3>
        <p className="text-muted max-w-md mb-8 leading-relaxed">
          Vi har mottatt meldingen din og tar kontakt så snart som mulig — vanligvis innen én virkedag.
        </p>
        <button
          onClick={() => setFormSent(false)}
          className="text-brand hover:text-brand-dark transition-colors text-sm font-semibold flex items-center gap-2"
        >
          <Send size={14} />
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {serviceMode ? (
        <div>
          <label className="block text-ink-soft text-sm font-medium mb-2">Ønsket tjeneste</label>
          <div className="relative">
            <select
              value={formData.tjeneste}
              onChange={(e) => setFormData({ ...formData, tjeneste: e.target.value })}
              className={`${INPUT} appearance-none cursor-pointer pr-10`}
            >
              <option value="">Velg tjeneste</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
              <option value="Annet / vet ikke">Annet / vet ikke</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>
      ) : (
        <div>
          <label className="block text-ink-soft text-sm font-medium mb-2">Jeg kontakter som...</label>
          <div className="relative">
            <select
              value={formData.segment}
              onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
              className={`${INPUT} appearance-none cursor-pointer pr-10`}
            >
              <option value="">Velg segment</option>
              {DEFAULT_SEGMENTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-ink-soft text-sm font-medium mb-2">Navn</label>
          <input type="text" required value={formData.navn}
            onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
            className={INPUT} placeholder="Ditt navn" />
        </div>
        <div>
          <label className="block text-ink-soft text-sm font-medium mb-2">Telefon</label>
          <input type="tel" value={formData.telefon}
            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            className={INPUT} placeholder="Ditt telefonnummer" />
        </div>
      </div>
      <div>
        <label className="block text-ink-soft text-sm font-medium mb-2">E-post</label>
        <input type="email" required value={formData.epost}
          onChange={(e) => setFormData({ ...formData, epost: e.target.value })}
          className={INPUT} placeholder="din@epost.no" />
      </div>
      <div>
        <label className="block text-ink-soft text-sm font-medium mb-2">Melding</label>
        <textarea required rows={5} value={formData.melding}
          onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
          className={`${INPUT} resize-none`} placeholder="Beskriv hva du trenger hjelp med..." />
      </div>
      <Button type="submit" size="lg">
        <Send size={18} />
        Send henvendelse
      </Button>
    </form>
  );
}
