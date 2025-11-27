import type { Technology } from "../habilities/HabilitiesInfo";
import { addTechs } from "../../utils/AddTechs"

export type Project = {
  id: number;
  name: string;
  about: string;
  prints: string[];
  technologies: Technology[];
  mainTechnologies: Technology[];
  deploy?: string;
  github: string;
  completionDate: string;
}

const ProjectsInfo = [
  {
    id: 5,
    name: "GoLady",
    about: "O Wedfy é a primeira versão de uma aplicação web de freelancing, onde desenvolvedores podem ter acesso a trabalhos para ganhar experiência profissional e receber algum direcionamento por meio de recomendações de notícias da área dependendo do nicho que ele deseja adquirir mais conhecimento. Este projeto foi desenvolvido como Trabalho e Conclusão de Curso para minha graduação em Análise e Desenvolvimento de Sistemas.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/golady.png?updatedAt=1763434255988"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    github: "https://github.com/Luuh03/Frontend-WedFY",
    completionDate: "Em andamento"
  },
  {
    id: 4,
    name: "FisioCare",
    about: "O Wedfy é a primeira versão de uma aplicação web de freelancing, onde desenvolvedores podem ter acesso a trabalhos para ganhar experiência profissional e receber algum direcionamento por meio de recomendações de notícias da área dependendo do nicho que ele deseja adquirir mais conhecimento. Este projeto foi desenvolvido como Trabalho e Conclusão de Curso para minha graduação em Análise e Desenvolvimento de Sistemas.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/fisiocare.png?updatedAt=1763434255582"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    github: "https://github.com/Luuh03/Frontend-WedFY",
    completionDate: "Em andamento"
  },
  {
    id: 3,
    name: "Garfo&Go",
    about: "O Wedfy é a primeira versão de uma aplicação web de freelancing, onde desenvolvedores podem ter acesso a trabalhos para ganhar experiência profissional e receber algum direcionamento por meio de recomendações de notícias da área dependendo do nicho que ele deseja adquirir mais conhecimento. Este projeto foi desenvolvido como Trabalho e Conclusão de Curso para minha graduação em Análise e Desenvolvimento de Sistemas.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/garfogo.png?updatedAt=1763434255879"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    github: "https://github.com/Luuh03/Frontend-WedFY",
    completionDate: "Em andamento"
  },
  {
    id: 2,
    name: "Blog Pessoal",
    about: "O Blog Pessoal é uma aplicação que permite que usuários publiquem, editem e visualizem postagens relacionadas a temas variados, de forma organizada e segura. Este projeto foi desenvolvido com fins educacionais, simulando uma aplicação real de blog para praticar conceitos de API REST com Java e Spring Boot. Entre os principais recursos que um blog pessoal oferece, destacam-se: Criação, edição e exclusão de postagens Associação de postagens a temas específicos Cadastro e autenticação de usuários Visualização de postagens por tema ou usuário Controle de acesso a operações sensíveis",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/blogpessoal.png?updatedAt=1763434255691"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://blogpessoal-nu.vercel.app",
    github: "https://github.com/Luuh03/blogpessoal",
    completionDate: "1 de Julho de 2025"
  },
  {
    id: 1,
    name: "Wedfy",
    about: "O Wedfy é a primeira versão de uma aplicação web de freelancing, onde desenvolvedores podem ter acesso a trabalhos para ganhar experiência profissional e receber algum direcionamento por meio de recomendações de notícias da área dependendo do nicho que ele deseja adquirir mais conhecimento. Este projeto foi desenvolvido como Trabalho e Conclusão de Curso para minha graduação em Análise e Desenvolvimento de Sistemas.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/wedfy.png?updatedAt=1763434255321"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["ASP.NET", "React", "MySQL"]),
    github: "https://github.com/Luuh03/Frontend-WedFY",
    completionDate: "Em andamento"
  }
]

export default ProjectsInfo;