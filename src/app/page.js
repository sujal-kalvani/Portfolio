"use client"
import { ReactTyped } from "react-typed";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';;
import { SiLeetcode } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Hexagon from "./components/Hexagon";
import Skills from "./Skills/page";
import Experience from "./Experience/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Education from "./Education/page";

export default function Home() {

  const router = useRouter();

  const linkdin_redirect = () => {
    window.open("https://www.linkedin.com/in/sujal-kalvani-0012a325a/", "_blank");
  }

  const github_redirect = () => {
    window.open("https://github.com/sujal-kalvani", "_blank")
  }

  const leetcode_redirect = () => {
    window.open("https://leetcode.com/u/gOfzh7RBwm/", "_blank")
  }

  return (
    <>
      <div className="flex w-full min-h-[90vh] justify-between p-5 min-lg:p-14 max-lg:flex-col max-lg:gap-16 items-center" id="about">
        <div className="min-lg:hidden">
          <Hexagon />
        </div>
        <div className="info flex flex-col gap-3 w-1/2 max-lg:w-full">
          <p className="text-2xl">Hello, it's me</p>
          <p className="text-3xl font-bold">Sujal Kalwani</p>
          <h1 className="text-2xl font-poppins font-bold">
            I’m a{" "}
            <ReactTyped className="text-cyan-400"
              strings={["MERN Stack Developer", "Coder", "Tech Enthusiast", "Open Source Contributor"]}
              typeSpeed={90}
              backSpeed={60}
              loop
            />

          </h1>
          <p>MCA student at Indus University with strong skills in MERN Stack, Data Structures & Algorithms, and problemsolving. Seeking Software Engineer/Full-Stack Developer roles where I can apply my skills to build scalable applications and grow as a professional </p>

          <div className="social-medias flex gap-3">
            <div className="border rounded-full h-10 w-10 border-cyan-400 flex justify-center items-center cursor-pointer" onClick={linkdin_redirect}>
              <FaLinkedin className="w-5 h-5 " />
            </div>
            <div className="border rounded-full h-10 w-10 border-cyan-400 flex justify-center items-center cursor-pointer" onClick={github_redirect}>
              <FaGithub className="w-5 h-5 " />
            </div>
            <div className="border rounded-full h-10 w-10 border-cyan-400 flex justify-center items-center cursor-pointer" onClick={leetcode_redirect}>
              <SiLeetcode className="w-5 h-5 " />
            </div>
            <div className="border rounded-full h-10 w-10 border-cyan-400 flex justify-center items-center cursor-pointer">
              <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=sujalkalvani@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Sujal,%20I%20checked%20your%20portfolio..."} target="_blank"><SiGmail className="w-5 h-5 " /></Link>
            </div>
          </div>

          <div className="resume font-bold rounded-2xl bg-cyan-400 text-black h-10 w-40 cursor-pointer flex justify-center items-center">
            <Link href={"https://drive.google.com/file/d/1Jy91PppKW6sw9UHWmv3CzE2qGITRA9R-/view?usp=sharing"}>Download CV</Link>
          </div>
        </div>
        <div className="max-lg:hidden">
          <Hexagon />
        </div>
      </div>

      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
