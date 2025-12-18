import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "./ProjectsInfo"
import { SiGithub } from "react-icons/si";
import { HiExternalLink, HiX } from "react-icons/hi";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (project.id) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }

  }, [project.id, onClose]);

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
        e.stopPropagation();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/50 backdrop-blur-sm animate-fadeIn">

      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        className="bg-(--card-background)/90 rounded-2xl shadow-xl max-w-4xl w-full p-6 animate-scaleIn">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-white font-semibold">{project.name}</h2>
          <HiX size={28} fill="white" className="cursor-pointer transition duration-150 hover:bg-white/20 rounded-full" onClick={onClose} />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <img src={project.prints[0]} alt="" className="rounded-lg" />

            <div className="flex gap-3 justify-between">
              {project.deploy && (
                
                <a href={project.deploy} target="_blank" rel="noopener noreferrer"
                  className="flex gap-2 items-center text-white p-2 bg-(--blue) hover:bg-(--dark-blue) rounded-lg transition duration-200">
                  <HiExternalLink size={24} fill="white" />
                  Acessar projeto
                </a>
              )}

              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex gap-2 items-center text-white p-2 bg-violet-800 hover:bg-violet-950 rounded-lg transition duration-200">
                <SiGithub size={24} />
                Acessar repositório
              </a>
            </div>

            <span className="text-(--text-color)">
              {project.completionDate === undefined ? (
                "Em andamento"
              ) : (
                project.completionDate
              )}
            </span>

          </div>

          <div>
            <p className="mb-4 text-(--text-color) whitespace-pre-line">{project.about}</p>

            <h4 className="font-medium text-(--light-blue) pb-3 pt-5">Tecnologias:</h4>
            <div className="flex gap-3 flex-wrap">
              {
                project.technologies.map((tech) => (
                  <img src={tech.image} alt={tech.name} title={tech.name} className="h-8 hover:scale-110 transition-all duration-250" />
                ))
              }
            </div>
          </div>
        </div>

      </div>

    </div>,
    document.body
  )
}

export default ProjectModal