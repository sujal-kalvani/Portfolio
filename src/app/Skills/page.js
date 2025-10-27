"use client"
import React from "react";
import Skills_container from "../components/Skills_container";

const Page = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 px-4 md:px-10 text-white flex flex-col items-center skills"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-cyan-500 inline-block pb-2">
          SKILLS
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <Skills_container />
    </section>
  );
};

export default Page;
