import ExperienceCard from "./ExperienceCard"
import ExperiencesInfo from "./ExperiencesInfo"


function Experiences() {
  return (
    <div className="pt-24 gap-6 flex flex-col">
        <h2 className="text-[2.438rem] text-white font-medium">Experiência</h2>

        {
          ExperiencesInfo.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))
        }
    </div>
  )
}

export default Experiences