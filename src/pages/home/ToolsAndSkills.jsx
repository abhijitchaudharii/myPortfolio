import React from "react";

const ToolsAndSkills = () => {
  const tools = [
    {
      name: "Visual Studio Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "IntelliJ IDEA",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    },
  ];

  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "TailwindCSS", level: 80 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 70 },
    // { name: "Spring Boot", level: 65 },
  ];

  return (
    <section id="skills" className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Tools & Skills
        </h2>

        {/* Roles Showcase */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Front-End Developer",
            "Software Developer",
            "Full-Stack Developer",
            "Web Development",
          ].map((role, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-blue-100 text-blue-600 font-medium rounded-full shadow-sm hover:bg-blue-200 transition"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Tools & Skills Side by Side */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tools Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">
              🛠 Tools I Use
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-20 md:w-24 transition transform hover:scale-105"
                >
                  <img src={tool.logo} alt={tool.name} className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                  <span className="text-sm text-gray-700 text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">
              🚀 Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndSkills;
