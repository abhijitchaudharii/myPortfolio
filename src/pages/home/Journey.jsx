import React, { useState, useEffect } from "react";

import JavaCerti from "../../assets/Java.jpg";
import SQLCerti from "../../assets/SQL.jpg";
import JavaScriptCerti from "../../assets/JavaScript.jpg";
import HPECerti from "../../assets/HPE.jpg";

const Journey = () => {
  const education = [
    {
      title: "Bachelor of Engineering in Computer Science",
      college: "Prof. Ram Meghe College of Engineering",
      location: "Amravati",
      year: "2022",
    },
    {
      title: "Diploma in Computer Science & Engineering",
      college: "Govt. Polytechnic College",
      location: "Khamgaon",
      year: "2019",
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Wipro",
      period: "2025 - Present",
    },
    {
      role: "Front-End Developer",
      company: "Fiserv",
      period: "2022 - 2025",
    },
  ];

  // Dummy certification images (replace with your actual cert URLs or files)
  const certificates = [JavaCerti, SQLCerti, HPECerti, JavaScriptCerti];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(timer);
  }, [certificates.length]);

  return (
    <section
      id="journey"
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Journey Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left text-gray-800 mb-12">
            My Academics & Professional Journey
          </h2>

          {/* Timeline Container */}
          <div className="relative border-l-4 border-blue-500">
            {/* Education */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 ml-4">
              🎓 Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {edu.title}
                </h4>
                <p className="text-gray-600">
                  {edu.college}, {edu.location}
                </p>
                <p className="text-sm text-gray-500">
                  Completion Year: {edu.year}
                </p>
              </div>
            ))}

            {/* Professional Experience */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 ml-4">
              💼 Professional Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h4>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Certification Slideshow */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            🏆 Certifications
          </h3>
          <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">
            {certificates.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Certificate ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Optional: Dots Navigation */}
          <div className="flex mt-4 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
