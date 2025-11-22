import { experiences } from '../constants'
import ReadMore from './ReadMore'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw]" >

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#21a7eb] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          An overview of the roles I’ve held and the real-world impact I’ve delivered through industry experience.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-300 border-4 border-[#21a7eb] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white/20 bg-[#043a53]/70 backdrop-blur-md shadow-[0_0_20px_1px_rgba(33,167,235,0.4)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } ml-10 lg:m-0 md:ml-32 md:mr-32 transition-all duration-300 hover:scale-[1.03]`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-6">
                {/* Role, Company, Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{experience.date}</p>
                </div>
              </div>
              <ReadMore text={experience.desc} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
