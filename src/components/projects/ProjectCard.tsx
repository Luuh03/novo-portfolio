import type { Project } from "./ProjectsInfo"
import { useState } from "react"
import Modal from "./Modal";

interface ProjectProps {
  project: Project
}

function ProjectCard({ project }: ProjectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(true)}
      className="group cursor-pointer flex flex-col w-60 transition-all duration-250 hover:scale-110 bg-(--card-background) shadow-lg/40 rounded-lg overflow-hidden">

      <div className="relative rounded-lg overflow-hidden">
        <img
          src={project.prints[0]}
          className="w-full object-cover"
        />

        {/* Camada de degradê fixa na parte de baixo */}
        <div
          className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-black/45 to-transparent
              transition-opacity duration-300
              opacity-100
              group-hover:opacity-0"
        ></div>

        {/* Camada escura OVERLAY para o hover */}
        <div
          className="
              absolute inset-0
              bg-black/60
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100"
        ></div>

      </div>

      <div className="mx-3 mb-4 -mt-10 z-0 h-8 overflow-hidden">
        <p className="font-semibold text-white text-2xl transition duration-300 group-hover:-translate-y-8">{project.name}</p>
        <p className="font-semibold text-white text-2xl transition duration-300 group-hover:-translate-y-8">Ver detalhes</p>
      </div>

      <div className="flex justify-center gap-3 pb-2">

        {
          project.mainTechnologies.map((tech) => (
            <img src={tech.image} alt={tech.name} title={tech.name} className="h-8 hover:scale-110 transition-all duration-250" />
          ))
        }
      </div>
      
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Projeto Legal 🚀</h2>
        <p className="mb-4">
          Aqui você pode colocar descrição, imagens, links, tecnologias, etc.
        </p>

        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-neutral-800 text-white rounded-lg"
        >
          Fechar
        </button>
      </Modal>
    </div>
  )
}

export default ProjectCard