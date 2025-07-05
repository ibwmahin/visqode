const Pricing = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-4 w-full px-4 lg:w-[60%] mx-auto text-white py-20">
      <div className="bg-blue-900/20 border border-white/20 rounded-full flex items-center justify-center px-6 py-1 text-sm">
        Pricing
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
        Get the transparent Pricing
      </div>
      <div className="text-gray-400 text-sm sm:text-base text-center max-w-xl">
        Explore our competitive pricing plans designed to meet diverse business
        needs and budgets
      </div>

      {/* Pricing Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Basic */}
        <div className="bg-blue-950/40 border border-white/10 rounded-2xl shadow-xl p-6 w-full hover:shadow-[0_0_20px_rgba(0,204,255,0.1)] transition">
          <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
            <i className="bx bxs-star text-yellow-400 text-2xl" />
            Basic
          </div>
          <div className="mb-2 flex items-center">
            <div className="text-3xl font-bold">$1,995/m</div>
            <span className="ml-2 inline-block bg-white/10 rounded-full px-2 py-1 text-xs text-white/70">
              15% Off
            </span>
          </div>
          <p className="text-white/70 text-sm mb-4">
            For startups and small teams getting started with digital presence.
          </p>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
            Get Started
          </button>
          <div className="text-cyan-400 text-sm font-medium mt-4 flex items-center gap-1 hover:underline cursor-pointer">
            Book a Call <i className="bx bx-arrow-right text-base" />
          </div>
          <ul className="mt-6 space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2">
              <i className="bx bxs-check-circle text-green-400 text-lg" />
              Custom Homepage desing (up to 3 pages)
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bxs-check-circle text-green-400 text-lg" />
              Mobile & tablet responsive
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              One request at a time
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              Light SEO optimization
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              Brand strategy consulting
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              Multiple brands
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              Performance analytics dashboard
            </li>
            <li className="flex items-start gap-2">
              <i className="bx bx-x-circle text-red-400 text-lg" />
              Priority Support
            </li>
          </ul>
        </div>

        {/* Standard */}
        <div className="relative bg-blue-950/40 border-2 border-blue-600 rounded-2xl shadow-2xl p-6 w-full hover:shadow-[0_0_30px_rgba(0,204,255,0.2)] transition">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-b-full">
            Most Popular
          </div>
          <div className="flex items-center gap-3 mt-4 mb-4 text-xl font-semibold">
            <i className="bx bxs-star text-yellow-400 text-2xl" />
            Standard
          </div>
          <div className="mb-2 flex items-center">
            <div className="text-3xl font-bold">$3,995/m</div>
            <span className="ml-2 inline-block bg-white/10 rounded-full px-2 py-1 text-xs text-white/70">
              15% Off
            </span>
          </div>
          <p className="text-white/70 text-sm mb-4">Pause or cancel anytime.</p>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
            Get Started
          </button>
          <div className="text-cyan-400 text-sm font-medium mt-4 flex items-center gap-1 hover:underline cursor-pointer">
            Book a Call <i className="bx bx-arrow-right text-base" />
          </div>
          <ul className="mt-6 space-y-3 text-white/80 text-sm">
            {[
              "Full website design (up to 6 pages)",
              "Unlimited design request (one at a time)",
              "Advanced SEO setup.",
              "Branding assets (color, typography, logo kit)",
              "Mobile-first responsive design.",
              "Performance optimization.",
              "Multiple brand handling.",
              "Pause or Cancel Anytime",
            ].map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className="bx bxs-check-circle text-green-400 text-lg" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div className="bg-blue-950/40 border border-white/10 rounded-2xl shadow-xl p-6 w-full hover:shadow-[0_0_20px_rgba(0,204,255,0.1)] transition">
          <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
            <i className="bx bxs-star text-yellow-400 text-2xl" />
            Pro
          </div>
          <div className="mb-2 flex items-center">
            <div className="text-3xl font-bold">$5,995/m</div>
            <span className="ml-2 inline-block bg-white/10 rounded-full px-2 py-1 text-xs text-white/70">
              15% Off
            </span>
          </div>
          <p className="text-white/70 text-sm mb-4">Pause or cancel anytime.</p>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
            Get Started
          </button>
          <div className="text-cyan-400 text-sm font-medium mt-4 flex items-center gap-1 hover:underline cursor-pointer">
            Book a Call <i className="bx bx-arrow-right text-base" />
          </div>
          <ul className="mt-6 space-y-3 text-white/80 text-sm">
            {[
              "Everything in Standard",
              "Unlimited pages + CMS integration.",
              "Brand strategy consultation",
              "Complete design system.",
              "User journey and conversion audit",
              "Custom analytics dashboard",
              "Priority 24/7 Support",
              "Dedicated project manager.",
            ].map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className="bx bxs-check-circle text-green-400 text-lg" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
