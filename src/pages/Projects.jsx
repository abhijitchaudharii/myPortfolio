import React from "react";
import Navbar from "../components/Navbar";

const projects = [
  {
    name: "E-commerce Website",
    description:
      "A full-featured online shopping platform with cart, payment, and product management.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Personal Portfolio",
    description:
      "Responsive personal portfolio website built to showcase skills and projects.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game built with JavaScript and React.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    name: "Expense Tracker Application",
    description:
      "Application to track daily expenses with charts and category filters.",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    name: "Movies Search Website",
    description:
      "Web app to search movies using public APIs with details and ratings.",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    name: "Blinkit Clone",
    description:
      "Grocery delivery web app clone with product listing and cart functionality.",
    image: "https://picsum.photos/400/300?random=6",
  },
  {
    name: "Employee Management System",
    description:
      "Admin dashboard to manage employee records, leave, and payroll.",
    image: "https://picsum.photos/400/300?random=7",
  },
  // Additional projects
  {
    name: "Blog Platform",
    description:
      "A CMS-style platform for creating, editing, and publishing blogs.",
    image: "https://picsum.photos/400/300?random=8",
  },
  {
    name: "Weather App",
    description:
      "Real-time weather application fetching data from APIs for any location.",
    image: "https://picsum.photos/400/300?random=9",
  },
  {
    name: "Chat Application",
    description:
      "Realtime chat application with authentication and group chat features.",
    image: "https://picsum.photos/400/300?random=10",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20"
    >
      <Navbar />
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
