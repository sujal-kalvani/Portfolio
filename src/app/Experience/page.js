import React, { useState } from "react";
import Image from "next/image";

const ExperiencePage = () => {
  const [companies] = useState([
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEv4G3kTZHxEg/company-logo_200_200/company-logo_200_200/0/1735896283903/hotchpotz_logo?e=1762387200&v=beta&t=38Qu55vzQXxUMQvBF2iabDh4H97HM-I-Fh2tSMVfS34",
      role: "MERN Stack Intern",
      name: "Hotchpotz",
      duration: "July 2024 - August 2024",
      description:
        "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
      ],
    },
  ]);

  return (
    <section
      id="experience"
      className="w-full py-5 px-6 bg-transparent text-white flex flex-col items-center scroll-mt-20"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-cyan-500 inline-block pb-2">
          EXPERIENCE
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-3xl mx-auto">
          A collection of my work experience & the roles I have taken in various
          organizations.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {companies.map((c, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 w-full sm:w-[400px] flex flex-col items-center shadow-[0_0_12px_white] hover:scale-105 transition-transform duration-300"
          >
            {/* Header */} 
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={c.logo}
                alt={c.name}
                width={70}
                height={70}
                className="rounded-full border border-cyan-400"
              />
              <div>
                <p className="text-xl font-bold">{c.role}</p>
                <p className="text-lg text-cyan-400">{c.name}</p>
                <p className="text-gray-400 text-sm">{c.duration}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-base leading-relaxed text-gray-300 mb-4">
              {c.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2">
              {c.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/10 text-cyan-300 border border-cyan-500 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
