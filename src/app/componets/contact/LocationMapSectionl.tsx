"use client";

type FixedMapProps = {
  lat: number;
  lng: number;
  zoom?: number; // 1..20 (typical sweet spot 15–17)
  title?: string; // aria-label & tooltip
  openLabel?: string; // button text
};

export default function FixedMap({
  lat,
  lng,
  zoom = 16,
  title = "Map showing our location",
  openLabel = "View on Google Maps",
}: FixedMapProps) {
  // Use coordinates so Google pins the exact spot and keeps it consistent.
  // q=<lat>,<lng> + z=<zoom> + output=embed works without an API key.
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  const openHref = `https://www.google.com/maps?daddr=${lat},${lng}`;

  return (
    <div className="md:mt-54 md:mb-20 mb-10 mt-36 w-full max-w-[360px] md:max-w-360  mx-auto relative h-[300px] sm:h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
      {/* Disable interactions so it's truly fixed */}
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 pointer-events-none"
        aria-label={title}
      />

      {/* Centered pin overlay (always fixed even if the map image loads late) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
        aria-hidden="true"
      >
        {/* Simple SVG pin */}
        <svg width="36" height="36" viewBox="0 0 24 24" className="drop-shadow">
          <path
            d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
            fill="#2563eb"
          />
        </svg>
      </div>

      {/* Soft vignette for style */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/10 to-transparent" />

      {/* Action button to open in Google Maps (keeps the embed non-interactive) */}
      <div className="absolute bottom-3 right-3">
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-sm font-medium text-slate-800 shadow hover:bg-white"
        >
          {openLabel}
        </a>
      </div>
    </div>
  );
}
