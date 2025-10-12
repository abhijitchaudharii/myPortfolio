import React from "react";

const WhyHireMe = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </div>

        {/* Bio Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Hire Me for Your Next Project?
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            I am a passionate <span className="text-blue-500 font-semibold">Web Developer</span> 
            with over 3 years of experience building modern, responsive, and 
            user-friendly websites. I love turning ideas into reality through 
            clean, efficient code and beautiful designs.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Whether you need a sleek portfolio, a powerful business website, or 
            a dynamic web app, I bring dedication, creativity, and a 
            problem-solving mindset to every project.
          </p>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-4xl font-bold text-blue-500">3+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">100+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-start gap-6 mt-8">
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
              >
                Let’s Work Together
              </a>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
