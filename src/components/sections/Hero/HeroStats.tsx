const stats = [
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "500+",
    label: "Happy Clients",
  },
  {
    number: "1000+",
    label: "Matters Handled",
  },
  {
    number: "PAN",
    label: "India Services",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-yellow-400">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}