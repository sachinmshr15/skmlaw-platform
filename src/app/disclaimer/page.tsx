import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal Disclaimer of SKM Laws And Associates.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[#081320] py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}

        <div className="text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-yellow-400
            "
          >
            In Accordance With BCI Rules
          </span>

          <h1
            className="
              mt-8
              font-serif
              text-5xl
              font-bold
              text-white
            "
          >
            Disclaimer
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            This Disclaimer governs your use of the
            SKM Laws And Associates website and explains
            the purpose, limitations and professional
            obligations applicable to this website.
          </p>

        </div>

        {/* Content */}

        <article
          className="
            mt-16
            rounded-[28px]
            border
            border-yellow-500/10
            bg-[#0B1525]
            p-10
            text-slate-300
          "
        >

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              1. Professional Conduct
            </h2>

            <p>
              Under the applicable Rules of the Bar
              Council of India, advocates are prohibited
              from soliciting work or advertising in any
              manner whatsoever.
            </p>

            <p>
              This website has been developed solely for
              informational purposes and should not be
              construed as an advertisement,
              solicitation, invitation or inducement.
            </p>

          </section>

          <hr className="my-10 border-yellow-500/10" />

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              2. Visitor Acknowledgement
            </h2>

            <p>
              By accessing this website you acknowledge
              that:
            </p>

            <ul className="list-disc space-y-3 pl-8">

              <li>
                You are seeking information regarding
                SKM Laws And Associates voluntarily and
                on your own initiative.
              </li>

              <li>
                No solicitation, advertisement,
                invitation or inducement has been made
                by the Firm or any of its members.
              </li>

              <li>
                Your visit is entirely voluntary.
              </li>

            </ul>

          </section>

          <hr className="my-10 border-yellow-500/10" />

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              3. Information Only
            </h2>

            <p>
              The content available on this website is
              intended only for general information and
              awareness regarding legal and taxation
              matters.
            </p>

            <p>
              Nothing contained on this website shall
              constitute legal advice, tax advice,
              professional opinion or creation of an
              advocate-client relationship.
            </p>

          </section>

          <hr className="my-10 border-yellow-500/10" />

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              4. No Liability
            </h2>

            <p>
              SKM Laws And Associates shall not be liable
              for any direct, indirect or consequential
              loss arising from reliance upon the
              information published on this website.
            </p>

          </section>

          <hr className="my-10 border-yellow-500/10" />

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              5. Intellectual Property
            </h2>

            <p>
              All articles, graphics, publications,
              logos, designs and other content appearing
              on this website are the intellectual
              property of SKM Laws And Associates unless
              otherwise stated.
            </p>

          </section>

          <hr className="my-10 border-yellow-500/10" />

          <section className="space-y-6">

            <h2 className="font-serif text-3xl font-bold text-yellow-400">
              6. Contact
            </h2>

            <p>
              For any clarification regarding this
              Disclaimer, you may contact:
            </p>

            <div
              className="
                rounded-2xl
                border
                border-yellow-500/20
                bg-[#081320]
                p-6
              "
            >
              <p className="font-semibold text-white">
                SKM Laws And Associates
              </p>

              <p className="mt-2">
                Email: info@skmlaws.in
              </p>

              <p>
                Website: https://www.skmlaws.in
              </p>
            </div>

          </section>

        </article>

      </div>
    </main>
  );
}