import Image from "next/image";
import {
  GraduationCap,
  Scale,
  MapPin,
  BriefcaseBusiness,
  ShieldCheck,
  Globe2,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Biography() {
  return (
    <section className="bg-[#07111d] py-24 text-white">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="flex justify-center">

            <Image
              src="/images/profile/sachin-about.png"
              alt="Advocate Sachin Kumar Mishra"
              width={430}
              height={540}
              className="rounded-[30px] border border-yellow-500/20 shadow-2xl"
            />

          </div>

          {/* Right */}

          <div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-yellow-400">

              Founder Profile

            </span>

            <h2 className="mt-6 font-heading text-5xl font-bold">

              Advocate

              <span className="block text-yellow-400">
                Sachin Kumar Mishra
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">

              I provide legal and taxation advisory services for
              individuals, professionals, startups and businesses
              with a strong focus on practical solutions,
              regulatory compliance and professional ethics.

            </p>

            {/* Information */}

            <div className="mt-10 space-y-5">

              <Info
                icon={<GraduationCap size={22} />}
                title="Qualification"
                value="LL.B. • B.A. (Economics) • Certified GST Practitioner (GSTP ID - 092200010948GPD)"
              />

              <Info
                icon={<Scale size={22} />}
                title="Practice Areas"
                value="Income Tax • GST • Appeals • Business Advisory"
              />

              <Info
                icon={<BriefcaseBusiness size={22} />}
                title="Professional Focus"
                value="Taxation, Litigation & Compliance"
              />

              <Info
                icon={<MapPin size={22} />}
                title="Office"
                value="Misrikh, Sitapur, Uttar Pradesh"
              />

              <Info
                icon={<Globe2 size={22} />}
                title="Consultation"
                value="PAN India (Online & Offline)"
              />

            </div>

            {/* Trust */}

            <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-[#0d1b2a] p-6">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-yellow-400" />

                <h3 className="text-xl font-bold">

                  Professional Commitment

                </h3>

              </div>

              <p className="mt-4 leading-8 text-gray-300">

                Every matter is approached with transparency,
                confidentiality and careful legal analysis.
                The objective is to provide practical,
                legally sound and client-focused advice.

              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400">

        {icon}

      </div>

      <div>

        <h4 className="font-semibold text-white">

          {title}

        </h4>

        <p className="mt-1 text-gray-400">

          {value}

        </p>

      </div>

    </div>
  );
}