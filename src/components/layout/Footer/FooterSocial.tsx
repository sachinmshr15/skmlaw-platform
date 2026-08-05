import SocialLinks from "@/components/shared/SocialLinks";

export default function FooterSocial() {
  return (
    <div className="mt-8">

      <h4
        className="
          mb-5
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-yellow-400
        "
      >
        Follow Us
      </h4>

      <SocialLinks />

    </div>
  );
}