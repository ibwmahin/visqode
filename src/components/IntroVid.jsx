// IntroVid.jsx
import React, { useState } from "react";

export default function IntroVid() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h3 className="text-sm text-center text-gray-400 mb-6">
          See How We Help Brands Dominate the Digital Space
        </h3>

        {/* Video Preview */}
        <div className="bg-gradient-to-t from-[#2154ff] to-[#531bf6] backdrop-blur-lg rounded-lg ">
          <div className="flex justify-center mb-10 p-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-7xl aspect-video ">
              {!isPlaying ? (
                <>
                  <img
                    // have to add custom thumbnail for better ui expriance
                    src="/path-to-thumbnail.jpg"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform">
                      ▶ Play Video
                    </div>
                  </button>
                </>
              ) : (
                <video
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/video/2016/10/21/6047-188286517_large.mp4"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-6 px-4">
          <div className="bg-[#00041f] border border-[#1F2233] rounded-xl p-6 text-white shadow-md hover:shadow-blue-500/10 transition-shadow">
            <i className="bx bxs-swatch text-3xl text-blue-500 mb-4"></i>
            <h4 className="text-lg font-semibold mb-2">Custom Designs</h4>
            <p className="text-sm text-gray-400">
              We don’t do templates. Your website will be crafted to reflect
              your unique brand voice, identity, and purpose.
            </p>
          </div>
          <div className="bg-[#00041f] border border-[#1F2233] rounded-xl p-6 text-white shadow-md hover:shadow-blue-500/10 transition-shadow">
            <i className="bx bxs-bolt text-3xl text-blue-500 mb-4"></i>
            <h4 className="text-lg font-semibold mb-2">
              Lightning-Fast Performance
            </h4>
            <p className="text-sm text-gray-400">
              From clean code to optimized assets — we ensure blazing speed and
              seamless user experience across all devices.
            </p>
          </div>
          <div className="bg-[#00041f] border border-[#1F2233] rounded-xl p-6 text-white shadow-md hover:shadow-blue-500/10 transition-shadow">
            <i className=" bx bxs-grid-circle-diagonal-left text-3xl text-blue-500 mb-4"></i>
            <h4 className="text-lg font-semibold mb-2">SEO That Ranks</h4>
            <p className="text-sm text-gray-400">
              We build with SEO-first architecture to help your brand climb
              search rankings and gain organic visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#0F1120] border border-[#1F2233] rounded-xl p-6 text-white shadow-md hover:shadow-blue-500/10 transition-shadow">
      <div className="text-2xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
