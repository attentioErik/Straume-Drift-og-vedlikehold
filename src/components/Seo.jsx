import { Helmet } from 'react-helmet-async';
import { ucare } from '../utils/img';

export default function Seo({ title, description, canonical, image }) {
  const fullTitle = title ? `${title} | Totalbyggdrift` : 'Totalbyggdrift | Profesjonell drift og vedlikehold';
  const desc = description || 'Profesjonelle drift- og vedlikeholdstjenester for næringsbygg, borettslag og privat.';
  const url = canonical || 'https://www.totalbyggdrift.no';
  const rawImg = image || 'https://ucarecdn.com/a104f5b9-c737-441a-81c3-5dfed6d410ed/Skjermbilde20260326kl150921.png';
  const img = ucare(rawImg, { w: 1200, format: 'jpeg' });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
