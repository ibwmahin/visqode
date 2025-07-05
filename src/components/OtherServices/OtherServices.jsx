import "./OtherServices.css";

const OtherServices = () => {
  // Duplicate buttons for seamless infinite scroll
  const buttons = [
    {
      icon: "bxs-brush",
      text: "Logo Design",
    },
    {
      icon: "bxs-sparkles-alt",
      text: "Social Post Design",
    },
    {
      icon: "bxs-bolt",
      text: "Branding",
    },
    {
      icon: "bxs-fire",
      text: "Packaging Design",
    },
    {
      icon: "bxs-camcoder",
      text: "Video Editing",
    },
  ];

  return (
    <div className="relative w-[50%] mx-auto mt-20 overflow-hidden rounded-3g">
      <div className="flex items-center justify-center w-full mb-10 text-2xl">
        <div className="w-1/2 bg-gradient-to-b from-[#4d79ff] to-[#4011f2] h-[.1rem] animate-ping"></div>
        <div className=" w-full text-center">OtherServices</div>
        <div className="w-1/2 bg-gradient-to-b from-[#4d79ff] to-[#4011f2] h-[.1rem] animate-ping "></div>
      </div>

      {/* Gradient fade effects on both sides */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Infinite scroll container */}
      <div className="flex animate-infinite-scroll gap-5 whitespace-nowrap">
        {/* First set of buttons */}
        {buttons.map((button, index) => (
          <button
            key={`first-${index}`}
            className="bg-[#00043f] border-2 border-neutral-500/20 rounded-full px-5 py-2 flex items-center  flex-shrink-0"
          >
            <i
              className={`bx ${button.icon} bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent`}
            ></i>
            {button.text}
          </button>
        ))}
        {/* Second set for seamless loop */}
        {buttons.map((button, index) => (
          <button
            key={`second-${index}`}
            className="bg-[#00043f] border-2 border-neutral-500/20 rounded-full px-5 py-2 flex items-center flex-shrink-0"
          >
            <i
              className={`bx ${button.icon} bg-gradient-to-t from-[#2154ff] to-[#531bf6] bg-clip-text text-transparent`}
            ></i>
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
