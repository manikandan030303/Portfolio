import {PROJECTS} from '../constants'
const Projects = () => {
  return (
   <div className="border-b border-neutral-900 pb-4">
  <h1 className="my-20 text-center text-4xl">Projects</h1>
  <div>
    {PROJECTS.map((projects, index) => (
      <div
        key={index}
        className="mb-12 flex flex-col items-center gap-6 lg:flex-row lg:justify-center"
      >
        {/* Image */}
        <div className="w-full flex justify-center lg:w-1/4">
          <img
            src={projects.image}
            alt={projects.title}
            width={150}
            height={150}
            className="rounded shadow-md h-[100px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-xl text-center lg:text-left lg:w-3/4">
          <h6 className="mb-2 text-xl font-semibold text-white">{projects.title}</h6>
          <p className="mb-4 text-neutral-400">{projects.description}</p>
          <div className="flex flex-wrap justify-center lg:justify-start">
            {projects.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Projects