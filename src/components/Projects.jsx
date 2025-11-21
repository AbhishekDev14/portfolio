import { projects } from '../constants'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-linear-to-t from-[#054261] via-[#0f5f7c] to-transparent relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#21a7eb] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Work samples that demonstrate my technical skills, creativity, and practical project experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/20 bg-[#043a53]/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_20px_1px_rgba(33,167,235,0.4)] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
