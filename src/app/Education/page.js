"use client"
import React from 'react'

const page = () => {

    const education = [
    {
  id: 0,
  img:"/indus university.jpg",
  school: "indus university",
  date: "Sept 2025 - July 2027",
  grade: "soon",
  desc: "Pursuing my Master's degree in Computer Applications from Indus University, Ahmedabad. More details coming soon...",
  degree: "Master of Computer Applications (MCA)",
},
{
  id: 1,
  img:" /Gujarat_University_Logo.png",
  school: "Gujarat University",
  date: "Aug 2022 - Aug 2025",
  grade: "7.91 CGPA",
  desc: "I completed my Bachelor's degree in Computer Applications from Gujarat University, Ahmedabad. Throughout my studies, I explored a variety of subjects that deepened my understanding of computing and technology. From Data Structures and Algorithms to Web Development and Database Management Systems, I gained both theoretical knowledge and practical experience. My academic projects allowed me to apply these concepts to real-world challenges.",
  degree: "Bachelor of Computer Applications (B.C.A)",
},
{
  id: 2,
  img: "/kg dholakiya.jpg",
  school: "K.G. Dholakiya School, Rajkot",
  date: "Apr 2021 - Mar 2022",
  grade: "91 PR",
  desc: "I completed my Class 12 education from K.G. Dholakiya School, Rajkot, under the GSEB board, where I studied Accountancy, Statistics, and Economics with O.C. (Business Administration).",
  degree: "GSEB (XII) - Commerce with Statistics & Accountancy",
},
{
  id: 3,
  img:"/saraswati.png",
  school: "Saraswati Vidhyalay School, Rajula",
  date: "Apr 2019 - Mar 2020",
  grade: "80 PR",
  desc: "I completed my Class 10 education from Saraswati Vidhyalay School, Rajula, Amreli, under the GSEB board, where I studied Science with Mathematics.",
  degree: "GSEB (X) - Science with Mathematics",
},

  ];

  return (
  <section
      id="education"
      className="py-24 pb-0 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-cyan-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page
