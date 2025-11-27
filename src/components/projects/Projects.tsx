import ProjectCard from "./ProjectCard"
import ProjectsInfo from "./ProjectsInfo"


function Projects() {
  return (
    <div className="pt-24">
      <h2 className="pb-6 text-[2.438rem] text-white font-medium">Projetos</h2>

      <div className="grid gap-5.5 md:grid-cols-2 justify-items-center">

        { ProjectsInfo.map((project) => (
          <ProjectCard project={project} />
        ))}

      </div>
    </div>
  )
}

export default Projects