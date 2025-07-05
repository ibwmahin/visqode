const WhyUs = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full px-4 md:w-[85%] lg:w-[60%] mx-auto my-24">
      <div className="bg-blue-950/50 border-neutral-500/50 px-5 py-1 rounded-full text-white text-sm">
        Why Us
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
        Why VisQode Stands Out
      </div>
      <div className="text-neutral-300/70 text-sm sm:text-[14px] text-center max-w-xl">
        Discover why VisQode excels in delivering innovative, client-focused web
        design and branding solutions.
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
        {[
          {
            icon: "bxs-star",
            title: "Expert Team",
            desc: "Dedicated professionals with expertise in cutting-edge web development and brand building.",
          },
          {
            icon: "bxs-people-diversity",
            title: "Fast Delivery",
            desc: "Rapid project turnaround without compromising quality or creativity.",
          },
          {
            icon: "bxs-medal-star-alt",
            title: "Secure Solutions",
            desc: "Implementing robust security measures to safeguard your data and customers.",
          },
          {
            icon: "bxs-hourglass",
            title: "Creative Design",
            desc: "Eye-catching visuals and intuitive interfaces crafted uniquely for your brand.",
          },
          {
            icon: "bxs-grid-circle-diagonal-left",
            title: "Data Analytics",
            desc: "Actionable insights and reporting to help you make smart, data-driven decisions.",
          },
          {
            icon: "bxs-user-voice",
            title: "24/7 Support",
            desc: "Reliable round-the-clock support to keep your business running smoothly.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#020c2f] to-[#000] border-blue-600 border-2 rounded-lg p-6 text-white"
          >
            <i
              className={`bx ${card.icon} text-4xl mb-4 bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent`}
            ></i>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-neutral-50/80 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
