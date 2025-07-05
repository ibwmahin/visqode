import React from "react";
import SpectrumLogo from "../assets/images/logo/spectrum.png";
import VelocityLogo from "../assets/images/logo/spectrum.png";
import EnigmaLogo from "../assets/images/logo/spectrum.png";
import LuminaLogo from "../assets/images/logo/spectrum.png";
import VortexLogo from "../assets/images/logo/spectrum.png";
import SynergyLogo from "../assets/images/logo/spectrum.png";

const logos = [
  { src: SpectrumLogo, alt: "Spectrum" },
  { src: VelocityLogo, alt: "Velocity" },
  { src: EnigmaLogo, alt: "Enigma" },
  { src: LuminaLogo, alt: "Lumina" },
  { src: VortexLogo, alt: "Vortex" },
  { src: SynergyLogo, alt: "Synergy" },
  { src: SpectrumLogo, alt: "Spectrum" },
  { src: VelocityLogo, alt: "Velocity" },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-yellow-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.047 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
  </svg>
);

export default function StarSection() {
  return (
    <section className="py-12 my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Stars + Rating */}
        <div className="flex flex-col items-center justify-center mb-6 space-y-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="text-white text-xs sm:text-sm font-medium">
            4.9/5 From 3,602 Customers
          </span>
        </div>

        {/* Logos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {logos.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 w-24"
            >
              <img src={src} alt={alt} className="h-8 w-auto" />
              <span className="text-[10px] sm:text-xs text-gray-400">
                {alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
