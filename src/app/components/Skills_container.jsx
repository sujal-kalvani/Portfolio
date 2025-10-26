"use client";
import React, { useState } from "react";
import Image from "next/image";
// import img from "../../../public/html.png"

const Skills_container = () => {
  const [skills, setSkills] = useState([
    {
      title: "Frontend",
      items: [
        { skill: "HTML", icon: "/html.png" },
        { skill: "CSS", icon: "/css.png" },
        { skill: "JavaScript", icon: "/js.png" },
        { skill: "React.Js", icon: "/react.png" },
        { skill: "Next.Js", icon: "/next.png" },
        { skill: "Tailwind", icon: "/tailwind.png" },
        { skill: "Bootstrap", icon: "/bootstrap.png" },
        { skill: "Redux", icon: "/redux.png" },
      ],
    },
    {
      title: "Backend",
      items: [
        { skill: "Node.js", icon: "/node.png" },
        { skill: "Express.js", icon: "/express.png" },
        { skill: "MySQL", icon: "/mysql.png" },
        { skill: "MongoDB", icon: "/mongodb.png" },
      ],
    },
    {
      title: "Languages",
      items: [
        { skill: "C", icon: "/c.png" },
        { skill: "C++", icon: "/c++.png" },
        { skill: "JavaScript", icon: "/js.png" },
        { skill: "Python", icon: "/python.png" },
        { skill: "Java", icon: "/java.png" },
        { skill: "C#", icon: "/c_hash.png" },
      ],
    },
    {
      title: "Tools",
      items: [
        { skill: "Git", icon: "/git.png" },
        { skill: "GitHub", icon: "/github.png" },
        { skill: "VsCode", icon: "/vscode.png" },
        { skill: "Postman", icon: "/postman.png" },
        { skill: "Compass", icon: "/compass.png" },
        { skill: "Vercel", icon: "/vercel.png" },
      ],
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center items-start gap-10 w-full min-h-screen p-10 max-sm:p-5">
      {skills.map((category, index) => (
        <div
          key={index}
          className="bg-transparent rounded-2xl p-6 w-[370px] min-h-[400px] flex flex-col items-center transition-transform hover:scale-105 shadow-[0_0_12px_white]"
        >
          <h2 className="text-2xl font-bold inline-block mb-5">
            {category.title}
          </h2>

          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center hover:scale-110 transition-transform"
              >
                <Image
                  src={item.icon}
                  alt={item.skill}
                  width={50}         
                  height={50}         
                  className="mb-2"
                  style={{ height: "auto" }} 
                />

                <p className="text-sm font-semibold">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills_container;
