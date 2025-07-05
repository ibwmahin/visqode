import React from "react";
import Row from "./ui/Row";

const Comparison = () => {
  return (
    <section className="py-20 text-white w-full px-4 md:w-[85%] lg:w-[60%] mx-auto">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex items-center justify-center flex-col gap-4">
          <div className="bg-blue-950/50 border-neutral-500/50 px-5 py-1 rounded-full text-sm">
            Comparison
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Choosing Arise Over Others
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl">
            See why Arise stands out with superior service, innovation, and
            client satisfaction benchmarks.
          </p>
        </div>

        {/* VS Comparison Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center mb-10">
          <div className="text-xl sm:text-2xl font-extrabold">Other</div>
          <div className="bg-gradient-to-b from-[#2154ff]/50 to-[#531bf6]/50 rounded-full h-12 w-12 flex items-center justify-center">
            <div className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] rounded-full h-8 w-8 flex items-center justify-center text-sm font-semibold">
              v<span className="font-extrabold text-lg mx-[1px]">/</span>s
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold">VisQode</div>
        </div>

        {/* Dynamic Row Component */}
        <Row />
      </div>
    </section>
  );
};

export default Comparison;
