import AnimatedSection from '../AnimatedSection';

// Seksjonsoverskrift: eyebrow (liten uppercase) + tittel + valgfri intro.
// `dark` for mørke seksjoner, `center` for sentrert.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  className = '',
}) {
  return (
    <AnimatedSection className={className}>
      <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
        {eyebrow && (
          <p className={`font-semibold text-xs tracking-[0.15em] uppercase mb-3 ${dark ? 'text-brand-soft' : 'text-brand'}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`font-display text-3xl md:text-4xl leading-tight ${dark ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>
            {intro}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
