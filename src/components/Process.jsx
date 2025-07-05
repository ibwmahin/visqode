import React from "react";
import dotImage from "../assets/images/dot.png"; // ✅ import the image

const cardBgStyle = {
  backgroundImage: `url(${dotImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Process = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 w-[90%] md:w-[60%] mx-auto my-20">
      {/* Heading */}
      <div className="bg-blue-950/50 border border-neutral-500/50 px-5 py-1 rounded-full text-sm text-white">
        Process
      </div>

      <div className="text-3xl md:text-4xl font-bold text-center text-white">
        Our Design Process
      </div>

      <div className="text-neutral-300/60 text-[14px] text-center max-w-xl">
        Explore our streamlined approach to creating bespoke websites that align
        with your goals.
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
        {/* Card 1 */}
        <div
          style={cardBgStyle}
          className="h-[15rem] rounded-lg p-6 border border-blue-600/50 bg-black/60 bg-blend-overlay flex flex-col justify-around"
        >
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="text-white text-sm mb-2  bg-blue-900/40 py-1 px-3 border border-neutral-400/20 rounded-full">
              Step 01
            </div>
            <div className="bg-gradient-to-br from-[#000a47] to-[#000735] py-2 px-3 rounded-2xl">
              <i className="bx bxs-light-bulb bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent text-4xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            Discovery Phase
          </h2>
          <p className="text-neutral-50/80 text-sm">
            We dive deep into your brand’s vision, challenges, and goals to
            build a strategy that aligns with your business objectives.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={cardBgStyle}
          className="h-[15rem] rounded-lg p-6 border border-blue-600/50 bg-black/60 bg-blend-overlay flex flex-col justify-around"
        >
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="text-white text-sm mb-2  bg-blue-900/40 py-1 px-3 border border-neutral-400/20 rounded-full">
              Step 02
            </div>
            <div className="bg-gradient-to-br from-[#000a47] to-[#000735] py-2 px-3 rounded-2xl">
              {" "}
              <i className="bx bxs-paint bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent text-4xl"></i>
            </div>{" "}
          </div>{" "}
          <h2 className="text-2xl font-bold mb-2 text-white">Design Concept</h2>
          <p className="text-neutral-50/80 text-sm">
            Based on insights, we craft visually compelling and user-centric
            design mockups that capture your brand’s identity.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={cardBgStyle}
          className="h-[15rem] rounded-lg p-6 border border-blue-600/50 bg-black/60 bg-blend-overlay flex flex-col justify-around"
        >
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="text-white text-sm mb-2  bg-blue-900/40 py-1 px-3 border border-neutral-400/20 rounded-full">
              Step 03
            </div>
            <div className="bg-gradient-to-br from-[#000a47] to-[#000735] py-2 px-3 rounded-2xl">
              <i className="bx bxs-code bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent text-4xl"></i>
            </div>{" "}
          </div>{" "}
          <h2 className="text-2xl font-bold mb-2 text-white">
            Development & Testing
          </h2>
          <p className="text-neutral-50/80 text-sm">
            Our developers bring the designs to life with clean code,
            performance optimization, and rigorous multi-device testing.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={cardBgStyle}
          className="h-[15rem] rounded-lg p-6 border border-blue-600/50 bg-black/60 bg-blend-overlay flex flex-col justify-around"
        >
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="text-white text-sm mb-2  bg-blue-900/40 py-1 px-3 border border-neutral-400/20 rounded-full">
              Step 04
            </div>
            <div className="bg-gradient-to-br from-[#000a47] to-[#000735] py-2 px-3 rounded-2xl">
              <i className="bx bxs-rocket bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent text-4xl"></i>
            </div>{" "}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            Launch & Support
          </h2>
          <p className="text-neutral-50/80 text-sm">
            We deploy your site with confidence and continue to support and
            scale your digital presence post-launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
