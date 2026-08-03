import ContactButtons from "./ContactButtons";
import ContactHighlights from "./ContactHighlights";

export default function ContactContent() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl text-center">

      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-yellow-500/20
          bg-yellow-500/10
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-yellow-400
        "
      >
        Free Initial Consultation
      </span>

      {/* Heading */}

      <h2 className="mt-8 font-heading text-5xl font-bold leading-tight lg:text-6xl">

        Ready To Discuss

        <span className="block text-yellow-400">

          Your Legal Matter?

        </span>

      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

        Whether you need assistance with Income Tax,
        GST, Appeals, Business Registration or Legal
        Advisory, SKM Laws & Associates is committed
        to providing practical, transparent and
        professional guidance tailored to your needs.

      </p>

      {/* Highlights */}

      <ContactHighlights />

      {/* Buttons */}

      <ContactButtons />

    </div>
  );
}