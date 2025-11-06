import type { Technology } from "./ExperiencesInfo"

interface Experience {
  companyLogo: string,
  beginningDate: string,
  endingDate: string,
  role: string,
  description: string,
  technologies?: Technology[] | null,
  skills?: string | null
}

interface ExperienceProps {
  experience: Experience
}


function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <div className="bg-(--card-background) rounded-2xl p-9 text-(--text-color)">
      <div className="flex gap-3 justify-between items-center max-xm:items-start max-xm:flex-col-reverse">
        <img src={experience.companyLogo} alt="Logo Generation Brasil"
          className="w-32" />
        <span className="font-medium">{experience.beginningDate} - {experience.endingDate}</span>
      </div>

      <h3 className="font-semibold text-white py-6 text-xl">{experience.role}</h3>

      <p className="">{experience.description}</p>

      {
        experience.technologies ? (

          <>
            <h4 className="font-medium text-(--light-blue) pb-3 pt-5">Tecnologias:</h4>

            <div className="flex gap-3 flex-wrap">
              {
                experience.technologies.map((tech) => (
                  <img src={tech.image} alt={tech.name} className="h-8" />
                ))
              }
            </div>
          </>
        ) : (
          <p className="pt-5"><span className="font-medium text-(--light-blue) pr-2">Habilidades:</span>{experience.skills}</p>
        )
      }

    </div>
  )
}

export default ExperienceCard