import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMenuClick(menuId) {
    setActiveMenu(menuId);
    setIsOpen(false);

    const section = document.getElementById(menuId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
        px-[7vw] md:px-[7vw] lg:px-[20vw] 
        ${isScroll
          ? "bg-[#054261]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }
      `}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#21a7eb]">&lt;</span>
          <span className="text-white">Abhishek</span>
          <span className="text-[#21a7eb]">&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#21a7eb] 
                ${activeMenu === item.id ? "text-[#21a7eb]" : ""}`}
            >
              <button onClick={() => handleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/AbhishekDev14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#21a7eb]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-b95b07303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#21a7eb]"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div
            className="
            absolute top-16 left-1/2 -translate-x-1/2 
            w-4/5 bg-[#050414]/50 backdrop-blur-lg 
            z-50 rounded-lg shadow-lg md:hidden
          "
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white 
                    ${activeMenu === item.id ? "text-[#21a7eb]" : ""}`}
                >
                  <button onClick={() => handleMenuClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}

              <div className="flex space-x-4">
                <a
                  href="https://github.com/AbhishekDev14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-b95b07303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}

        {/* Mobile menu icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#21a7eb] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <TfiMenuAlt
              className="text-3xl text-[#21a7eb] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
