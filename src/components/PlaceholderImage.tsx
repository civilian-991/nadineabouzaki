"use client";

interface PlaceholderImageProps {
  title: string;
  className?: string;
  aspectRatio?: string;
}

const colors = [
  "#2c1810", "#1a2332", "#2d1f2d", "#1e2d1e", "#2d2a1e",
  "#1a1a2e", "#2e1a1a", "#1e2d2d", "#2d1e28", "#1a2e1e",
  "#2a1e2d", "#1e2a2d", "#2d2d1a", "#1e1a2d", "#2d1a2a",
];

function getColor(title: string): string {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function PlaceholderImage({ title, className = "", aspectRatio = "440/360" }: PlaceholderImageProps) {
  const bg = getColor(title);

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        aspectRatio,
        backgroundColor: bg,
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(255,255,255,0.03) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(255,255,255,0.02) 0%, transparent 50%)
        `,
      }}
    >
      <span className="px-4 text-center text-sm tracking-wider text-white/30 uppercase">
        {title}
      </span>
    </div>
  );
}
