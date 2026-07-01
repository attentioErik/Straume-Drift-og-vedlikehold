import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroller til toppen ved sidebytte. Hopper IKKE til toppen når URL-en har en
// hash (f.eks. /#tjenester) — da overlater vi scrollingen til hash-håndteringen.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
