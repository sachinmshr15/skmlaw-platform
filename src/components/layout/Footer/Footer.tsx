import Container from "@/components/ui/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterPractice from "./FooterPractice";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050D18] text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/5 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-500/5 blur-[180px]" />

      {/* Top Border */}

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <Container>

        <div className="relative z-10 py-20">

          <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr]">

            <FooterBrand />

            <FooterLinks />

            <FooterPractice />

            <FooterContact />

          </div>

        </div>

      </Container>

      <FooterBottom />

    </footer>
  );
}