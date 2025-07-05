const CTA = () => {
  return (
    <section className="bg-blue-950/40 w-3xl max-w-6xl p-6  mx-auto rounded-2xl shadow-lg">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Title */}
        <h1 className="text-white  bg-blue-950/20  text-4xl font-extrabold">
          Start Your Project
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-md">
          Contact us today to start crafting your exceptional and customized
          website solutions.
        </p>

        {/* Features */}
        <ul className="flex sm:flex-row justify-center items-center gap-4 text-white/90 text-sm font-medium bg-blue-950/40 px-3 py-2 rounded-full">
          <li className="flex items-center gap-2 bg-blue-950 px-3 py-1 rounded-full">
            <i className="bx bxs-check-circle text-[#4ade80] text-xl" />
            Customized Design
          </li>
          <li className="flex items-center gap-2 bg-blue-950 px-3 py-1 rounded-full">
            <i className="bx bxs-check-circle text-[#4ade80] text-xl" />
            Ongoing Support
          </li>
          <li className="flex items-center gap-2 bg-blue-950 px-3 py-1 rounded-full">
            <i className="bx bxs-check-circle text-[#4ade80] text-xl" />
            Fast Delivery
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#" className="hidden md:block">
          <button className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Start a Project
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
