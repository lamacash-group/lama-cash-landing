export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-[#b088f4]" : "text-[#7134c2]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display max-w-4xl text-3xl font-black uppercase leading-[1.08] tracking-tight md:text-5xl ${
          light ? "text-white" : "text-[#171717]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
