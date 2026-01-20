import ExperienceCard from "./ExperienceCard"
import ExperiencesInfo from "./ExperiencesInfo"


function Experiences() {
  return (
    <div className="pt-24" id="experiences">
      <h2 className="pb-6 text-[2.438rem] text-white font-medium">Experiência</h2>
      <div className="gap-15 flex flex-col">

        {
          ExperiencesInfo.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))
        }
      </div>
    </div>
  )
}

export default Experiences