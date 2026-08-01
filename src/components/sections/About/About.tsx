import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#081321] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="flex justify-center">
            <Image
              src="/images/profile/sachin-about.png"
              alt="Advocate Sachin Kumar Mishra"
              width={420}
              height={520}
              className="rounded-3xl border border-yellow-500/20"
            />
          </div>

          <div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
              Founder • SKM Laws & Associates
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Advocate
              <span className="block text-yellow-400">
                Sachin Kumar Mishra
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Professional legal, taxation and business advisory
              services with a practical, transparent and client-focused
              approach for individuals, professionals and businesses.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="/about"
                className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black"
              >
                View Full Profile
              </Link>

              <Link
                href="tel:+917007756899"
                className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400"
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}