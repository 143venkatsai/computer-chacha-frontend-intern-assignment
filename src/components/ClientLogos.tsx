import React from "react";

// Example: Use SVG for icon-style logos (replace with your own as needed)
const logos = [
  { name: "IPSUM", type: "text", class: "font-bold text-lg" },
  {
    name: "N",
    type: "icon",
    class: "font-bold text-lg",
  },
  {
    name: "lines",
    type: "icon",
    class: "font-bold text-lg",
  },
  {
    name: "loops",
    type: "icon",
    class: "font-bold text-lg",
  },
  { name: "logoipsum", type: "text", class: "font-bold text-lg" },
  {
    name: "LOGO IPSUM",
    type: "text",
    class: "font-bold text-lg",
  },
  { name: "logoipsum2", type: "text", class: "font-bold text-lg" },
];

export const ClientLogos: React.FC = () => (
  <div className="relative w-full flex items-center justify-center py-12 bg-[#FCF7F0]">
    <div
      className="
        absolute inset-0
        -skew-y-6
        -translate-y-8
        pointer-events-none
        z-0
      "
      style={{
        background: `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.85) 0%,   /* black with fade */
      #A53392 20%,
      #FF7E3F 50%,
      #FFD684 80%,
      rgba(250, 245, 236, 0.85) 100% /* cream with fade */
    )
  `,
      }}
    />
    <div
      className="
    relative z-10
    flex gap-8 md:gap-12 lg:gap-10 items-center
    w-full
    overflow-x-auto md:overflow-x-visible
    flex-nowrap
    px-4
    scrollbar-hide
  "
    >
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center min-w-[72px] lg:min-w-[128px] h-16 flex-shrink-0"
        >
          <span className={`text-white ${logo.class}`}>{logo.name}</span>
        </div>
      ))}
    </div>
  </div>
);
