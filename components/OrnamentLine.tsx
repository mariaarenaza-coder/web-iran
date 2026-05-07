export default function OrnamentLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="flex-1 h-px bg-[#C9A96E] opacity-70" />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1 L13 7 L7 13 L1 7 Z" fill="#C9A96E" opacity="0.85"/>
        <path d="M7 4 L10 7 L7 10 L4 7 Z" fill="#F8F3E8"/>
      </svg>
      <span className="flex-1 h-px bg-[#C9A96E] opacity-70" />
    </div>
  );
}
