import { SkillsInfo } from "../constants"
import Tilt from "react-parallax-tilt";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-linear-to-t from-[#054261] via-[#0f5f7c] to-transparent"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#21a7eb] mx-auto mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A blend of the skills and frameworks I rely on to build clean, fast, and intuitive user interfaces.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category, index) => (
          <div
            key={index}
            className="bg-[#043a53]/70 backdrop-blur px-5 sm:px-10 py-8 sm:py-6 mb-10 
          w-full sm:w-[48%] rounded-2xl border border-white/20 
          shadow-[0_0_20px_1px_rgba(33,167,235,0.4)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 
                  border border-gray-500 rounded-2xl py-2 px-2 sm:py-2 sm:px-1
                  w-29 bg-transparent"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}
