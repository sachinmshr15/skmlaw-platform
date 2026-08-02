import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex h-[860px] w-full items-end justify-end">

      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 h-[620px] w-[620px] rounded-full bg-yellow-500/15 blur-[140px]" />

      {/* Soft Gold Ring */}
      <div className="absolute bottom-14 right-16 h-[560px] w-[560px] rounded-full border border-yellow-500/10" />

      {/* Founder Image */}
      <Image
        src="/images/profile/sachin-hero.png"
        alt="Advocate Sachin Kumar Mishra"
        width={760}
        height={920}
        priority
        className="
          relative
          z-20
          h-auto
          w-auto
          max-h-[900px]
          object-contain
          object-bottom
          drop-shadow-[0_45px_90px_rgba(0,0,0,.55)]
          transition-all
          duration-500
          hover:scale-[1.02]
        "
      />

      {/* Decorative Accent */}
      <div className="absolute top-28 right-6 h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,.9)]" />

      <div className="absolute bottom-32 left-8 h-3 w-3 rounded-full bg-yellow-400/70" />
    </div>
  );
}