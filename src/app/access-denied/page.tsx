import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import ExitWebsiteButton from "./ExitWebsiteButton";

export const metadata = {
  title: "Access Restricted",
};

export default function AccessDeniedPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#081320]
        px-6
      "
    >
      <section
        className="
          w-full
          max-w-2xl
          rounded-[32px]
          border
          border-yellow-500/20
          bg-[#0B1525]
          p-10
          text-center
          shadow-[0_25px_80px_rgba(0,0,0,.55)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-red-500/10
          "
        >
          <ShieldAlert
            size={54}
            className="text-red-400"
          />
        </div>

        {/* Brand */}

        <h1
          className="
            mt-8
            font-serif
            text-4xl
            font-bold
            text-yellow-400
          "
        >
          SKM
        </h1>

        <p
          className="
            mt-2
            text-2xl
            font-semibold
            text-white
          "
        >
          Laws And Associates
        </p>

        <div
          className="
            mx-auto
            mt-5
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-yellow-500
            to-transparent
          "
        />

        <h2
          className="
            mt-10
            text-3xl
            font-bold
            text-white
          "
        >
          Access Restricted
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-300
          "
        >
          You must accept the Website Disclaimer
          before accessing SKM Laws And Associates.
        </p>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-slate-500
          "
        >
          This website follows the applicable
          professional conduct requirements for
          advocates. Please review and accept the
          disclaimer to continue.
        </p>

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:justify-center
          "
        >
          <Link
            href="/"
            className="
              rounded-xl
              bg-yellow-500
              px-8
              py-3
              font-semibold
              text-black
              transition
              hover:bg-yellow-400
            "
          >
            Return to Disclaimer
          </Link>

          <ExitWebsiteButton />
        </div>
      </section>
    </main>
  );
}
