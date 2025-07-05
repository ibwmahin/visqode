import React, { useState } from "react";
import "./Navigation.css";
import videoBg from "../../assets/videos/blackhole.mp4";
import logo from "../../assets/images/logo/VisQode-Transperent-wide.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative overflow-hidden">
      {/* ✅ Restored your exact video styles */}
      <video
        className="absolute  -translate-y-20 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      <nav className="bg-transparent flex justify-between items-center w-[90%] max-w-7xl mx-auto py-10 px-4 md:px-0 relative z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-white flex justify-center items-center">
          <img src={logo} alt="visqode" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`md:flex hidden justify-center items-center gap-8 bg-[#00000050] border border-neutral-300/30 py-4 px-6 rounded-full backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "hidden" : "flex"
          }`}
        >
          {["Home", "Works", "Blogs", "Timeline", "Waitlist"].map((item) => (
            <li className="relative group" key={item}>
              <a
                href="#"
                className="text-white px-4 py-2 rounded-full border border-blue-900/30 transition-all duration-300 group-hover:bg-blue-700/20 group-hover:border-blue-900/50"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop Only) */}
        <a href="#" className="hidden md:block">
          <button className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] text-white px-9 py-3 rounded-full">
            Contact us
          </button>
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <i
            className={`bx ${
              isMenuOpen ? "bx-x" : "bx-menu"
            } text-3xl text-white cursor-pointer`}
            onClick={toggleMenu}
          ></i>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/95 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-50 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Close */}
          <i
            className="bx bx-x text-4xl text-white cursor-pointer absolute top-6 right-6"
            onClick={closeMenu}
          ></i>

          <ul className="flex flex-col items-center gap-6 text-xl px-6">
            {[
              "Home",
              "Works",
              "Blogs",
              "Timeline",
              "Waitlist",
              "All Pages",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="text-white px-4 py-2 rounded-full border border-blue-900/30 hover:bg-blue-700/20 hover:border-blue-900/50 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="text-white px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
