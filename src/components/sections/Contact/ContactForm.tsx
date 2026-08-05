export default function ContactForm() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-yellow-500/10
        bg-[#0B1625]
        p-10
      "
    >
      <h3 className="font-heading text-3xl font-semibold text-white">
        Request A Consultation
      </h3>

      <p className="mt-4 text-gray-400">
        Complete the form below and our team will contact you as soon as
        possible.
      </p>

      <form className="mt-10 space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
        />

        <select
          className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Service
          </option>

          <option>Income Tax</option>

          <option>GST Advisory</option>

          <option>GST Registration</option>

          <option>Income Tax Appeal</option>

          <option>GST Appeal</option>

          <option>Business Registration</option>

          <option>Legal Consultation</option>

          <option>Other</option>
        </select>

        <textarea
          rows={6}
          placeholder="Tell us about your requirement..."
          className="w-full rounded-xl border border-yellow-500/10 bg-[#07111d] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
        />

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-yellow-400
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-yellow-300
            hover:shadow-[0_20px_50px_rgba(234,179,8,.25)]
          "
        >
          Request Consultation
        </button>

      </form>
    </div>
  );
}