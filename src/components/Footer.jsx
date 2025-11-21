import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const handleScroll = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="mx-auto text-center">
        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#21a7eb] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/" },
            { icon: <FaTwitter />, link: "https://twitter.com/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#21a7eb] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-300 mt-6">
          © 2025 Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

