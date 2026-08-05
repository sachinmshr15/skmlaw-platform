import {
  Scale,
  Landmark,
  Receipt,
  FileCheck,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Income Tax",
    icon: Receipt,
  },
  {
    title: "GST Advisory",
    icon: Landmark,
  },
  {
    title: "Tax Litigation",
    icon: Scale,
  },
  {
    title: "Income Tax Appeals",
    icon: FileCheck,
  },
  {
    title: "Business Registration",
    icon: Building2,
  },
  {
    title: "Business Advisory",
    icon: BriefcaseBusiness,
  },
];

export default function FooterPractice() {
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
        Practice Areas
      </h3>

      <ul className="mt-8 space-y-5">

        {practiceAreas.map((item) => {

          const Icon = item.icon;

          return (

            <li
              key={item.title}
              className="
                group
                flex
                items-center
                gap-4
                text-gray-300
                transition-all
                duration-300
                hover:text-yellow-400
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-yellow-500/10
                  bg-[#081321]
                  transition-all
                  duration-300
                  group-hover:border-yellow-500/30
                  group-hover:bg-yellow-500/10
                "
              >

                <Icon
                  size={18}
                  className="text-yellow-400"
                />

              </div>

              <span>

                {item.title}

              </span>

            </li>

          );

        })}

      </ul>

    </div>
  );
}