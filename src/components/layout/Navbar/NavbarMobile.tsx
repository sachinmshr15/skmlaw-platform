"use client";

import { useState } from "react";

import MobileDrawer from "./MobileDrawer";
import MobileMenuButton from "./MobileMenuButton";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileMenuButton
        open={open}
        onClick={() => setOpen((value) => !value)}
      />

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}