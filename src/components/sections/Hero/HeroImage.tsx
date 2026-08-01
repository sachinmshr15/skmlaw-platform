import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      {/* Golden Glow */}

      <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* Golden Ring */}

      <div className="absolute top-8 h-[540px] w-[540px] rounded-full border border-yellow-400/20" />

      <div className="absolute top-14 h-[500px] w-[500px] rounded-full border border-yellow-400/10" />

      {/* Floating Dot */}

      <div className="absolute -right-5 top-24 h-5 w-5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40" />

      <div className="absolute bottom-24 -left-5 h-4 w-4 rounded-full bg-yellow-400" />

      {/* Image */}

      <Image
        src="/images/profile/sachin-hero.png"
        alt="Advocate Sachin Kumar Mishra"
        width={520}
        height={650}
        priority
        className="relative z-10 rounded-[30px] border border-yellow-500/20 shadow-[0_25px_80px_rgba(212,175,55,.18)]"
      />

    </div>
  );
}