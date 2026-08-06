"use client";

type DisclaimerModalProps = {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
};

export default function DisclaimerModal({
  open,
  onAccept,
  onDecline,
}: DisclaimerModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        p-6
        backdrop-blur-md
      "
    >
      <div
        className="
          relative
          w-full
          max-w-3xl
          rounded-[28px]
          border
          border-yellow-500/20
          bg-[#0B1525]
          p-10
          shadow-[0_30px_80px_rgba(0,0,0,.65)]
        "
      >
        {/* Gold Accent */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-1
            rounded-t-[28px]
            bg-gradient-to-r
            from-yellow-500
            via-yellow-300
            to-yellow-500
          "
        />

        {/* Logo */}

        {/* Brand */}

<div className="text-center">

  <h1
    className="
      font-serif
      text-4xl
      font-bold
      tracking-wide
      text-yellow-400
      md:text-5xl
    "
  >
    SKM
  </h1>

  <p
    className="
      mt-2
      text-2xl
      font-semibold
      tracking-wide
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
</div>

        {/* Heading */}

        <h2
          className="
            mt-8
            text-center
            font-serif
            text-4xl
            font-bold
            text-white
          "
        ><div className="flex justify-center">
  <span
    className="
      inline-flex
      items-center
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
</div>
          Important Disclaimer
        </h2>

        {/* Body */}

        <div
          className="
            mt-7
            space-y-5
            text-[16px]
            leading-8
            text-slate-300
          "
        >
          <p>
            Under the Rules of the Bar Council of India,
            advocates are prohibited from soliciting work
            or advertising in any manner.
          </p>

          <p>
            This website has been developed solely for
            informational purposes and shall not be
            construed as advertisement, solicitation,
            invitation, or legal opinion.
          </p>

          <p>
            By entering this website, you acknowledge that:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              You are seeking information regarding SKM
              Laws & Associates on your own initiative.
            </li>

            <li>
              There has been no solicitation,
              advertisement, invitation, or inducement by
              the Firm or any of its members.
            </li>

            <li>
              The information published here is intended
              only for general awareness and shall not be
              treated as legal or tax advice.
            </li>

            <li>
              You should obtain independent professional
              advice before acting on any information
              contained on this website.
            </li>
          </ul>

          <p className="font-semibold text-yellow-400">
            By clicking "I Accept", you agree to the above
            terms and wish to continue to the website.
          </p>
        </div>

        {/* Buttons */}

        <div
          className="
            mt-11
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
        <div className="mt-8 text-center">
  <a
    href="/disclaimer"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-sm
      font-medium
      text-yellow-400
      transition
      hover:text-yellow-300
      hover:underline
    "
  >
    Read Full Disclaimer
  </a>
</div>
          <button
            autoFocus
            onClick={onAccept}
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
            I Accept
          </button>

          <button
            onClick={onDecline}
            className="
              rounded-xl
              border
              border-slate-600
              px-8
              py-3
              font-semibold
              text-white
              transition
              hover:border-red-500
              hover:text-red-400
            "
          >
            Decline
          </button>
        </div>

        {/* Footer */}

        <p
          className="
            mt-7
            text-center
            text-xs
            leading-6
            text-slate-500
          "
        >
          © SKM Laws And Associates · Bar Council of India
          Compliance Notice
        </p>
      </div>
    </div>
  );
}