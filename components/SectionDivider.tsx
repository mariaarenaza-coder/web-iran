export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <div className="flex items-center gap-1.5">
        <span className="block h-px w-16 bg-[#C9A96E] opacity-60" />
        <span className="block h-px w-8 bg-[#C9A96E] opacity-40" />
        <span className="block h-px w-3 bg-[#C9A96E] opacity-25" />
      </div>
      <FleurOrnament />
      <div className="flex items-center gap-1.5">
        <span className="block h-px w-3 bg-[#C9A96E] opacity-25" />
        <span className="block h-px w-8 bg-[#C9A96E] opacity-40" />
        <span className="block h-px w-16 bg-[#C9A96E] opacity-60" />
      </div>
    </div>
  );
}

function FleurOrnament() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {/* Outer diamond points */}
      <path d="M11 1 L12.4 9.6 L21 11 L12.4 12.4 L11 21 L9.6 12.4 L1 11 L9.6 9.6 Z" fill="#C9A96E" opacity="0.7"/>
      {/* Inner cross */}
      <path d="M11 6 L11.8 10.2 L16 11 L11.8 11.8 L11 16 L10.2 11.8 L6 11 L10.2 10.2 Z" fill="#C9A96E" opacity="0.9"/>
      {/* Center dot */}
      <circle cx="11" cy="11" r="1.5" fill="#F8F3E8"/>
    </svg>
  );
}
