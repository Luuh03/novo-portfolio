import ProjectCard from "./ProjectCard"
import ProjectsInfo, { type Project } from "./ProjectsInfo"

interface ProjectsProps {
  onSelectProject: (project: Project) => void
}

function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <div className="pt-24" id="projects">
      <h2 className="pb-6 text-[2.438rem] text-white font-medium">Projetos</h2>

      <div className="grid gap-5.5 md:grid-cols-2 justify-items-center">

        {ProjectsInfo.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onSelect={() => onSelectProject(project)}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects