import { createContext, useState, type ReactNode } from "react";
import type { Project } from "../projects/ProjectsInfo";

interface ModalProps {
  project: Project;
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalProps)

export function ModalProvider({ children }: ModalProviderProps) {

  const [project, setProject] = useState<Project>({
    id: 0,
    name: "",
    about: "",
    prints: [],
    technologies: [],
    mainTechnologies: [],
    github: ""
  })

  return (
    <ModalContext.Provider value={{ project }}>
      { children }
    </ModalContext.Provider>
  )
}