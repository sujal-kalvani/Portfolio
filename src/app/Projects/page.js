import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    const [companies] = useState([
      {
        logo: "https://drive.google.com/uc?export=view&id=13gIz4aL7wWeo1pN6e1cJEmnw0RESJj0G",
        role: "Make My Shop",
        description:
          "Make My Shop is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables users to browse products, add them to the cart, and place orders using either Cash on Delivery (COD) or online payments via Stripe.",
        skills: [
          "HTML",
          "CSS",
          "React.js",
          "Tailwind",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
        link:"https://github.com/sujal-kalvani/MakeMyShop-project"
      },
      {
        logo: "https://drive.google.com/uc?export=view&id=1VmEpqGP1kRTXETx01Dfo3Kyec3CuTb4J",
        role: "YouTube Downloader",
        description:
        "YouTube Downloader is a MERN stack web app that lets users download YouTube videos in various formats and resolutions. It uses ytdl-core to fetch video details and provides a simple, responsive interface for fast and easy downloads.",
        skills: [
          "HTML",
          "CSS",
          "React.js",
          "Tailwind",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
        link:"https://github.com/sujal-kalvani/Downloader"
      },
      {
        logo: "https://drive.google.com/uc?export=view&id=12oUOVKml-LfPqTJfuZxN4yBQKfig-jqi",
        role: "TO-Do List",
        description:
        "To-Do List is a simple and interactive web app built using the MERN stack that allows users to add, edit, and delete tasks. It helps users manage daily activities efficiently with a clean, responsive interface and real-time task updates.",
        skills: [
          "HTML",
          "CSS",
          "React.js",
          "Tailwind",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
        link:"https://github.com/sujal-kalvani/Todolist-in-mern-stack"
      },
      {
        logo: "https://drive.google.com/uc?export=view&id=1jsmqQOnPOp2i-WkYuEFzx0f90cgQSlw-",
        role: "TextUtils",
        description:
        "TextUtils is a React-based web app that allows users to analyze and modify text easily. It provides features like converting text to uppercase or lowercase, removing extra spaces, counting words and characters, and previewing text in real time with a clean and responsive UI.",
        skills: [
          "HTML",
          "CSS",
          "React.js",
          "Tailwind",
        ],
        link:"https://github.com/sujal-kalvani/Text-Utils"
      },
    ])
  return (
 <section id="projects" className="w-full py-10 flex flex-col items-center ">
      <h1 className="text-4xl font-bold border-b-4 pb-2 border-cyan-500">
        PROJECTS
      </h1>
    <p className="text-xl mt-2 max-w-4xl text-center max-lg:text-sm px-4">
      A showcase of the projects I have worked on,highlighting my skills & experience in various technologies
    </p>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {companies.map((c, index) => (
          <div
            key={index}
            className="bg-transparent rounded-2xl p-6 w-[90%] sm:w-[420px] flex flex-col items-center shadow-[0_0_12px_white] hover:scale-105 transition-transform gap-5"
          >
              <Image
                src={c.logo}
                alt={c.role}
                width={500}
                height={500}
                className="border"
              />
                <p className="text-2xl font-bold">{c.role}</p>

            <p className="text-center text-sm leading-relaxed text-gray-200 mb-4">
              {c.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {c.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/20 text-cyan-300 border border-cyan-500 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link href={c.link} className='font-bold rounded-2xl bg-cyan-400 text-black h-10 w-40 cursor-pointer flex justify-center items-center'>View</Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default page
