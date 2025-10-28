import Techs from "./HabilitiesInfo";
import HabilityBox from "./HabilityBox";

function Habilities() {
  return (
    <div className="pt-24">
      <h2 className="text-[2.438rem] text-white font-medium">Habilidades</h2>
      <span className="text-base text-(--text-color)">Tecnologias que utilizo no dia a dia</span>

      {
        Techs.map((section) => (
          <div>

            <h3 className="text-white text-2xl py-5.5">{section.name}</h3>
            <div className="grid grid-cols-2
              xm:grid-cols-3
              sm:grid-cols-5
              lg:grid-cols-6
              xl:grid-cols-4
              2xl:grid-cols-5 gap-5.5 justify-items-center">
              {
                section.list.map((hability) => (
                  <HabilityBox key={hability.id} hability={hability} />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Habilities