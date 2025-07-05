import OtherServices from "./OtherServices/OtherServices.jsx";

const Services = () => {
  return (
    <section className=" py-16">
      {/* Main Container */}
      <div className="flex justify-center items-center flex-col gap-5 w-[90%] md:w-[90%] mx-auto">
        {/* Category Label */}
        <div className="bg-blue-950/50 border border-neutral-500/50 px-5 py-1 rounded-full text-sm text-white uppercase tracking-wide">
          Services
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Explore Our Core Services
        </h2>

        {/* Subheading */}
        <p className="text-neutral-400 text-sm text-center max-w-xl">
          Discover our comprehensive range of services tailored to enhance your
          digital presence.
        </p>

        {/* card section from here -------------------------------- */}
        {/* Services Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 px-4">
          {/* Web Design Card */}
          <div className="bg-[#00041f] border border-neutral-900 rounded-3xl p-6 text-white shadow-lg">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <button className="bg-gradient-to-t from-white/10 to-transparent border border-neutral-900/30 text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-blue-700 transition">
                Contact Us
                <i className="bx bx-arrow-up-right ml-2"></i>
              </button>
            </div>

            {/* Card Description */}
            <p className="text-neutral-400 text-sm mb-4">
              We don’t just code websites — we build digital experiences that
              work fast, look stunning, and scale with your growth. Every line
              is written with purpose and performance in mind.
            </p>
            <div className="w-full h-[.1rem] bg-neutral-100/30 rounded-full my-3"></div>
            {/* Features List */}
            <ul className="space-y-2">
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Custom-built websites tailored to your goals
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Lightning-fast performance and modern tech stack
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Backend development (APIs, dashboards, logic)
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  SEO-friendly structure & responsive layouts
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Secure and scalable infrastructure
                </span>
              </li>
            </ul>
          </div>

          {/* Web Development Card */}
          <div className="bg-[#00041f] border border-neutral-900 rounded-3xl p-6 text-white shadow-lg">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Brand Building</h3>
              <button className="bg-gradient-to-t from-white/10 to-transparent border border-neutral-900/30 text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-blue-700 transition">
                Contact Us
                <i className="bx bx-arrow-up-right ml-2"></i>
              </button>
            </div>

            {/* Card Description */}
            <p className="text-neutral-400 text-sm mb-4">
              Your brand isn’t just a logo — it’s how the world sees you. We
              craft cohesive brand systems that spark trust, stand out, and stay
              memorable.
            </p>
            <div className="w-full h-[.1rem] bg-neutral-100/30 rounded-full my-3"></div>
            {/* Features List */}
            <ul className="space-y-2">
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Unique brand identity (colors, fonts, visuals)
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Logo design & visual storytelling
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Tone-of-voice development
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Digital branding assets (social kits, pitch decks)
                </span>
              </li>
              <li className="flex items-center ">
                <i className="bx bxs-check-circle mr-2 text-green-400"></i>
                <span className="text-sm text-white">
                  Consistency across web, socials, and marketing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <OtherServices />
    </section>
  );
};

export default Services;
