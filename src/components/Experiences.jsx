import { EXPERIENCES } from "../constants"

const Experiences = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES.map((Experiences, index) => (
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{Experiences.year}</p>
                    </div>
                    <div className="w-full max-w-full lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {Experiences.role} - <span className="text-sm text-purple-100"> {Experiences.company} </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{Experiences.description}</p>
                        {Experiences.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences