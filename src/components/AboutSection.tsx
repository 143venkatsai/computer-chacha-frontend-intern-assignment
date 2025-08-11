import React from "react";

export const AboutSection = () => (
  <section className="bg-[#FCF7F0] flex flex-col-reverse lg:flex-row items-center justify-center gap-30 px-4 lg:px-16 py-16">
    <div className="relative w-65 h-85 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tl from-[#f7b2f7] to-[#ffffff22] shadow-xl">
      <img
        src="/designer.png"
        alt="Erica Designer"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="max-w-xl">
      <span className="text-xs text-yellow-400 font-semibold tracking-wider uppercase">
        About
      </span>
      <h2 className="mt-1 text-3xl lg:text-4xl text-gray-900">
        Crafting Unique Brand Experiences Since 2014
      </h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        With a Visual Arts degree, my journey began in graphic design, crafting
        logos and marketing materials. Video editing followed, where meticulous
        attention to detail set my work apart, and I ventured into 3D modeling
        for immersive experiences.
      </p>
      <button className="mt-6 border border-black rounded-full px-5 py-2 text-sm text-black font-bold">
        SCHEDULE A CALL
      </button>
    </div>
  </section>
);
