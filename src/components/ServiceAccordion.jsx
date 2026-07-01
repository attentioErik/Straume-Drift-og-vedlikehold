import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function ServiceAccordion({ categories = [] }) {
  // Første kategori åpen som standard
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {categories.map((cat, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={cat.title}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-stone-900 group-hover:text-[#864A28] transition-colors">
                {cat.title}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-[#864A28] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <ul className="px-6 pb-6 pt-1 space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                      <Check size={16} className="text-[#864A28] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
