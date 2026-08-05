import Link from "next/link";

import { navigation } from "@/config/navigation";

export default function FooterLinks() {
  return (
    <div>

      <h3
        className="
          font-heading
          text-2xl
          font-semibold
          text-yellow-400
        "
      >
        Quick Links
      </h3>

      <nav className="mt-8">

        <ul className="space-y-4">

          {navigation.main.map((item) => (

            <li key={item.href}>

              <Link
                href={item.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-gray-300
                  transition-all
                  duration-300
                  hover:text-yellow-400
                "
              >

                <span
                  className="
                    h-[2px]
                    w-0
                    bg-yellow-400
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                />

                {item.label}

              </Link>

            </li>

          ))}

        </ul>

      </nav>

    </div>
  );
}