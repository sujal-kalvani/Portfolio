"use client"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
  const cleanId = sectionId.replace("#", ""); // remove '#'
  const section = document.getElementById(cleanId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-cyan-500">Sujal Kalwani</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", path: "#about" },
            { name: "Skills", path: "#skills" },
            { name: "Experience", path: "#experience" },
            { name: "Projects", path: "#projects" },
            { name: "Education", path: "#education" },
            { name: "Contact Us", path: "#contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.path)}
              className="hover:text-cyan-500 text-sm sm:text-base my-1 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/sujal.kalwani.7/" },
            { icon: <FaTwitter />, link: "https://x.com/sujal_kalvani" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sujal-kalvani-0012a325a/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/sujal_kalvani_7/" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-cyan-500  transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sujal Kalwani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;