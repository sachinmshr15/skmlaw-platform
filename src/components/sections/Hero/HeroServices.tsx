const services = [
  "Income Tax",
  "GST Compliance",
  "Appeals",
  "Tax Planning",
  "Business Advisory",
  "Startup Advisory",
];

export default function HeroServices() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {services.map((service) => (
        <span
          key={service}
          className="
            rounded-full
            border
            border-yellow-500/20
            bg-white/5
            px-5
            py-2
            text-sm
            text-gray-200
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-yellow-400
            hover:bg-yellow-500/10
            hover:text-yellow-300
          "
        >
          {service}
        </span>
      ))}
    </div>
  );
}