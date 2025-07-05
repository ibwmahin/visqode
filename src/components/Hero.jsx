import React from "react";
import ScrollToBottom from "./ui/ScrollToBottom";
import DotGrid from "../components/ui/Bg-Ui/DotGrid";

const Hero = () => {
  return (
    <section className="relative w-full h-screen  overflow-hidden bg-transparent px-4">
      {/* droid grid */}
      <div className="w-full h-screen absolute top-0 right-0 opacity-45 bg-none">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>{" "}
      <ScrollToBottom />
      <div className="relative z-10 flex items-center justify-center flex-col gap-8 md:gap-12 h-full text-center">
        {/* Upper Notch Tag */}
        <div className="border border-neutral-400/30 px-4 md:px-6 py-2 rounded-full bg-neutral-50/10 flex justify-center items-center gap-2 text-sm md:text-base">
          We design digital experiences people remember.
          <button className="">
            <i className="bx bx-sparkle flex justify-center items-center bg-gradient-to-b from-[#4d79ff] to-[#4011f2] py-1 px-4 rounded-full"></i>
          </button>
        </div>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold capitalize leading-tight ">
          We Build Stunning
          <br /> Websites & Bold Brands
        </div>

        {/* Subheading */}
        <div className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          At VisQode, we blend cutting-edge development with strategic branding
          to help businesses launch fast, scale smart, and stand out online.
        </div>

        {/* CTA Button */}
        <a href="#">
          <button className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] text-white px-7 py-3 md:px-9 md:py-3 rounded-full hover:bg-[#933ff7] transition-all duration-300 text-sm md:text-base">
            Get Your Custom Website Now
          </button>
        </a>

        {/* Active Status */}
        <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
          <div className="bg-green-500/50 rounded-full h-[20px] w-[20px] flex justify-center items-center">
            <div className="bg-green-500/90 rounded-full h-[10px] w-[10px]"></div>
          </div>
          <div>2 people Active Now!</div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
