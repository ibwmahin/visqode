import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#00041f] text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {/* Branding & CTA */}
        <div className="relative md:pr-8">
          {/* vertical divider */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-700/40" />

          <h1 className="text-2xl font-bold mb-4">
            <span className="text-blue-500">Vis</span>
            <span className="text-gray-500">Qode</span>
          </h1>
          <h2 className="text-white font-semibold mb-2">
            Book a Call For Free Consultation
          </h2>
          <p className="text-gray-400 mb-4">
            Experienced team delivering exceptional digital solutions tailored
            to your brand.
          </p>
          <button className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] px-5 py-2 rounded-full font-medium inline-flex items-center transition hover:scale-105">
            Contact Us <i className="bx bx-arrow-right ml-2 text-xl"></i>
          </button>

          <div className="mt-8">
            <p className="text-gray-400 mb-2">Our Social Handles</p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="p-2 bg-[#1F2233] rounded-lg hover:bg-[#2A2D44] transition"
              >
                <i className="bxl bx-linkedin text-xl"></i>
              </a>
              <a
                href="https://www.x.com/"
                aria-label="Twitter"
                className="p-2 bg-[#1F2233] rounded-lg hover:bg-[#2A2D44] transition"
              >
                <i className="bxl bx-twitter text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="p-2 bg-[#1F2233] rounded-lg hover:bg-[#2A2D44] transition"
              >
                <i className="bxl bx-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricings</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
            <li className="flex items-center">
              <a href="#">Works</a>
              <span className="ml-2 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Other</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">Waitlist</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ’s</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 mt-10 h-px bg-gray-700/40" />

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <p className="text-gray-500 text-sm text-right">
          &copy;2025 VisQode. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
