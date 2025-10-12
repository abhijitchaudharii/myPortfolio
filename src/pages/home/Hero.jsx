import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I’m <span className="text-blue-400">a Web Developer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          I create modern, responsive, and user-friendly websites to bring ideas
          to life on the web.
        </p>
        <div className="mt-6">
          <a
            href="/projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
