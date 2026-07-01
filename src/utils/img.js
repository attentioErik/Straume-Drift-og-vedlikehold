// Uploadcare on-the-fly bildeoptimalisering.
// Legger på CDN-operasjoner: riktig bredde, auto-format (webp/avif),
// smart kvalitet og progressiv lasting. Ignorerer ikke-ucarecdn-URLer.
export function ucare(url, { w, format = 'auto', quality = 'smart' } = {}) {
  if (!url || !url.includes('ucarecdn.com')) return url;
  const m = url.match(/ucarecdn\.com\/([0-9a-f-]{36})/i);
  if (!m) return url;
  let ops = '';
  if (w) ops += `-/resize/${w}x/`;
  ops += `-/format/${format}/-/quality/${quality}/-/progressive/yes/`;
  return `https://ucarecdn.com/${m[1]}/${ops}`;
}
