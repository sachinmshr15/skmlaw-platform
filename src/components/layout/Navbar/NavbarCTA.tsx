import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function NavbarCTA() {
  return (
    <Button
      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex"
    >
      {siteConfig.consultationText}
    </Button>
  );
}