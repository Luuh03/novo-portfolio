import Techs from "../habilities/HabilitiesInfo"

export type Technology = {
  id: number;
  name: string;
  image: string;
}

const addTechs = (techNames: string[]): Technology[] => {
  const allTechs = Techs.flatMap((t) => t.list);
  return allTechs.filter((tech) => techNames.includes(tech.name))
}

const ExperiencesInfo = [
  {
    id: 1,
    companyLogo: "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Companies%20Logos/generation.png?updatedAt=1761927229942",
    beginningDate: "Abr/2025",
    endingDate: "Jun/2025",
    role: "Desenvolvedor Full Stack Junior",
    description: "Participação em bootcamp intensivo focado em aprimorar conhecimentos Java e React com entrega de projetos e desenvolvimento de softskills.",
    technologies: addTechs(["Java", "Spring Boot", "VS Code", "React", "TypeScript", "MySQL", "Insomnia", "JUnit"])
  },
  {
    id: 2,
    companyLogo: "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Companies%20Logos/goodbom.png?updatedAt=1762458247773",
    beginningDate: "Out/2024",
    endingDate: "Mar/2025",
    role: "Operador de Loja II",
    description: "Responsável por realizar atendimento ao cliente como operador de caixa e auxiliar na organização e decoração da loja.",
    skills: "Comunicação, Resolução de problemas, Trabalho em equipe e Proatividade."
  },
  {
    id: 3,
    companyLogo: "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Companies%20Logos/apex.png?updatedAt=1761927229586",
    beginningDate: "Mai/2024",
    endingDate: "Jun/2024",
    role: "Consultor de Atendimento Bilíngue (Inglês)",
    description: "Responsável por realizar atendimento em inglês de clientes por chat e ligação.",
    skills: "Comunicação verbal e escrita em Inglês, Resolução de problemas."
  },
  {
    id: 4,
    companyLogo: "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Companies%20Logos/ci&t.png?updatedAt=1761927229797",
    beginningDate: "Fev/2022",
    endingDate: "Mar/2023",
    role: "Estagiário de Desenvolvimento",
    description: "Responsável por desenvolvimento de novas rotas em APIs, correção de código, testes unitários e injeção de dados.",
    technologies: addTechs(["CSharp", "ASP.NET", "MySQL", "Visual Studio", "Git", "Jira"])
  }
]

export default ExperiencesInfo