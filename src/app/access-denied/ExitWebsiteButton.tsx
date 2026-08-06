"use client";

export default function ExitWebsiteButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="
        rounded-xl
        border
        border-slate-600
        px-8
        py-3
        font-semibold
        text-white
        transition
        hover:border-red-500
        hover:text-red-400
      "
    >
      Exit Website
    </button>
  );
}
