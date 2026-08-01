export default function HeroGlow() {
  return (
    <>
      {/* Left Golden Glow */}

      <div className="absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Right Golden Glow */}

      <div className="absolute right-[-120px] top-44 h-[340px] w-[340px] rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* Bottom Glow */}

      <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[150px]" />
    </>
  );
}