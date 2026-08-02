import Image from "next/image";
import { founder } from "@/content/founder";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center lg:justify-start">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

      {/* Decorative Ring */}

      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/10" />

      {/* Image */}

      <div className="relative z-20">

        <Image
          src="/images/profile/sachin-about.png"
          alt={founder.name}
          width={500}
          height={650}
          priority
          className="
            rounded-[36px]
            border
            border-yellow-500/10
            object-cover
            shadow-[0_45px_100px_rgba(0,0,0,.55)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:scale-[1.02]
          "
        />

        {/* Experience Card */}

        <div
          className="
absolute
top-148
right-1
z-30
w-[140px]
rounded-2xl
border
border-yellow-500/20
bg-[#0b1625]/90
px-6
py-5
backdrop-blur-xl
shadow-[0_25px_60px_rgba(0,0,0,.45)]
"
        >
          <h3 className="text-center text-5xl font-bold leading-none text-yellow-400">
  {founder.experience}
</h3>

<p className="mt-2 text-center text-xs leading-5 text-gray-300">
  {founder.experienceLabel}
</p>
        </div>

      </div>

      {/* Floating Accent */}

      <div className="absolute right-10 top-10 h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,.9)]" />

    </div>
  );
}