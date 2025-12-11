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
  completionDate?: string;
}

const ProjectsInfo = [
  {
    id: 5,
    name: "GoLady",
    about: "Este projeto tem como objetivo implementar um aplicativo de carona compartilhada exclusivo para mulheres, permitindo o gerenciamento eficiente das viagens oferecidas e realizadas. \n\nO sistema é responsável por realizar operações de CRUD (Create, Read, Update, Delete) sobre as principais entidades do aplicativo: usuários, viagens e veículos cadastrados. \n\nA plataforma simula um sistema completo de gestão de corridas, priorizando a experiência da usuária, a eficiência no serviço e, acima de tudo, a segurança.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/golady.png?updatedAt=1763434255988"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://golady.netlify.app",
    github: "https://github.com/Projetos-Grupo-01/GoLady_frontend",
    completionDate: "29 de Julho de 2025"
  },
  {
    id: 4,
    name: "FisioCare",
    about: "Este projeto propõe o desenvolvimento de um serviço voltado ao gerenciamento e acompanhamento das rotinas de treino de pacientes em fisioterapia. \n\nA aplicação é estruturada para realizar operações de CRUD (Create, Read, Update, Delete) sobre as entidades centrais do sistema: usuários, exercícios e categorias. \n\nO gerenciamento eficiente desses recursos é complementado pela implementação de uma camada de segurança, visando assegurar a integridade dos dados e o controle de acesso por meio de autenticação e autorização.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/fisiocare.png?updatedAt=1763434255582"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://octacode-fisiocare.netlify.app",
    github: "https://github.com/Projetos-Grupo-01/FisioCare_frontend",
    completionDate: "11 de Julho de 2025"
  },
  {
    id: 3,
    name: "Garfo&Go",
    about: "Este projeto tem como objetivo implementar um sistema de delivery de alimentos, que permite o gerenciamento de produtos oferecidos por diferentes restaurantes. \n\nO sistema é responsável por realizar operações de CRUD (Create, Read, Update, Delete) sobre os produtos cadastrados. A interface foi desenvolvida com React, Vite, Tailwind e TypeScript, simulando o sistema de delivery de alimentos, com foco na apresentação da interface e funcionalidades como visualização de produtos, cadastro, edição e exclusão, utilizando dados simulados (mock).",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/garfogo.png?updatedAt=1763434255879"
    ],
    technologies: addTechs(["Spring Boot", "React", "MySQL", "Java", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    github: "https://github.com/Projetos-Grupo-01/GarfoeGo-frontend",
    completionDate: "3 de Julho de 2025"
  },
  {
    id: 2,
    name: "Blog Pessoal",
    about: "O Blog Pessoal é uma aplicação que permite que usuários publiquem, editem e visualizem postagens relacionadas a temas variados, de forma organizada e segura. \n\nEste projeto foi desenvolvido com fins educacionais, simulando uma aplicação real de blog para praticar conceitos de API REST com Java e Spring Boot. \n\nEntre os principais recursos que um blog pessoal oferece, destacam-se: \n- Criação, edição e exclusão de postagens; \n- Associação de postagens a temas específicos; \n- Cadastro e autenticação de usuários; \n- Visualização de postagens por tema ou usuário; \n- Controle de acesso a operações sensíveis.",
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
    about: "O Wedfy é a primeira versão de uma aplicação web de freelancing, onde desenvolvedores podem ter acesso a trabalhos para ganhar experiência profissional e receber algum direcionamento por meio de recomendações de notícias da área dependendo do nicho que ele deseja adquirir mais conhecimento. \n\nEste projeto foi desenvolvido como Trabalho e Conclusão de Curso para minha graduação em Análise e Desenvolvimento de Sistemas.",
    prints: [
      "https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/wedfy.png?updatedAt=1763434255321"
    ],
    technologies: addTechs(["ASP.NET", "React", "MySQL", "CSharp", "HTML5", "CSS3", "Git"]),
    mainTechnologies: addTechs(["ASP.NET", "React", "MySQL"]),
    github: "https://github.com/Luuh03/Frontend-WedFY"
  }
]

export default ProjectsInfo;