import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'accent-gradient text-white shadow-lg shadow-brand/25 hover:opacity-90',
  outline:
    'border border-line text-ink bg-white hover:bg-surface',
  soft:
    'bg-brand-tint text-brand hover:bg-brand-soft/30',
  ghostLight:
    'border border-white/30 text-white hover:bg-white/10',
  white:
    'bg-white text-ink hover:bg-surface shadow-lg shadow-ink/10',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
};

// Pill-knapp. Rendrer <Link> ved `to`, <a> ved `href`, ellers <button>.
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 min-h-[44px] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
