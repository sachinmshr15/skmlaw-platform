"use client";

import { useEffect, useState } from "react";

import DisclaimerModal from "./DisclaimerModal";

const STORAGE_KEY = "skm-disclaimer";

const VALIDITY_DAYS = 30;

export default function DisclaimerProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setOpen(true);
      return;
    }

    try {
      const data = JSON.parse(stored);

      const acceptedAt = new Date(data.acceptedAt);

      const expires = new Date(acceptedAt);

      expires.setDate(
        expires.getDate() + VALIDITY_DAYS,
      );

      if (new Date() > expires) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        accepted: true,
        acceptedAt: new Date().toISOString(),
      }),
    );

    setOpen(false);
  }

    function handleDecline() {
    window.location.href = "/access-denied";
    }

  return (
    <DisclaimerModal
      open={open}
      onAccept={handleAccept}
      onDecline={handleDecline}
    />
  );
}