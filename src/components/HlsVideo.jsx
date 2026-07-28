import { useEffect, useRef } from 'react';

// Spiller Uploadcare adaptive_video (HLS). Native i Safari/iOS; hls.js
// lastes dynamisk (egen chunk) kun når nettleseren trenger det.
export default function HlsVideo({ src, className = '', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;

    // Native HLS (Safari, iOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      return;
    }

    let hls;
    let cancelled = false;
    import('hls.js').then(({ default: Hls }) => {
      if (cancelled) return;
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        video.src = src;
      }
    });
    return () => {
      cancelled = true;
      if (hls) hls.destroy();
    };
  }, [src]);

  return <video ref={ref} className={className} playsInline {...rest} />;
}
