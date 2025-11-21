import Typewriter from 'typewriter-effect';
import Tilt from "react-parallax-tilt";
import Profile from "../assets/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-20 md:mt-28 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            ABHISHEK
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-[#21a7eb]">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "ReactJS Developer", "UI Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </h3>

          {/* About Text */}
          <p className="text-base sm:text-lg text-gray-300 mt-6 leading-relaxed">
            Frontend Developer with 3+ years of experience building responsive,
            high-performance web applications using ReactJS, Angular,
            JavaScript, TypeScript, Material UI, Bootstrap, and RESTful APIs.
            Strong in UI architecture, reusable components, and performance
            optimization. Currently upskilling in Next.js
            and Tailwind CSS toward full-stack development.
          </p>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1mgRrlPEA_Li1Bo0ummrCJxlU1ybwjW8C/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 rounded-full text-lg font-bold text-white transition-transform hover:scale-105
                       bg-linear-to-r from-[#21a7eb] to-[#21a7eb] shadow-[0_0_20px_1px_rgba(33,167,235,0.4)]"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-[#21a7eb]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={Profile}
              alt="Abhishek"
              className="w-full h-full rounded-full object-cover 
                         drop-shadow-[0_0_20px_1px_rgba(33,167,235,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
