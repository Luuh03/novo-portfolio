import Techs from "../components/habilities/HabilitiesInfo"
import type { Technology } from "../components/habilities/HabilitiesInfo";


export const addTechs = (techNames: string[]): Technology[] => {
  const allTechs = Techs.flatMap((t) => t.list);
  return allTechs.filter((tech) => techNames.includes(tech.name))
}