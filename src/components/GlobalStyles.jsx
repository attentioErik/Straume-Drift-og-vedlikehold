// Designsystem (blå «frisk luft»):
//  • Primær: brand #3C7DF0 / brand-dark #2f6fe0 — pill-knapper, lenker, aksent.
//  • Tekst: ink #0F1A2A (overskrift), ink-soft #33485e, muted #5a6b7d.
//  • Flater: hvit, surface #f5f8fc, surface-blue #eef5fd; border line #e6ebf1.
//  • Font: Hanken Grotesk overalt. Kort: rounded-3xl. Knapper/pills: rounded-full.
export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap');

      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }

      .font-display {
        font-family: 'Hanken Grotesk', system-ui, sans-serif;
        font-weight: 700;
        letter-spacing: -0.02em;
        overflow-wrap: break-word;
        hyphens: auto;
        -webkit-hyphens: auto;
      }
      .font-body { font-family: 'Hanken Grotesk', system-ui, sans-serif; }

      .accent-gradient {
        background: linear-gradient(135deg, #3C7DF0 0%, #2f6fe0 100%);
      }

      /* Mobil P0: aldri under 16px på felt (hindrer iOS-innzoom) */
      input, textarea, select { font-size: 16px; }

      /* Mobil P1: rask tapp-respons, dempet highlight */
      a, button, [role="button"], input, select, textarea, label {
        touch-action: manipulation;
        -webkit-tap-highlight-color: rgba(60,125,240,0.12);
      }

      /* Mobil P2: respekter «reduser bevegelse» */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  );
}
