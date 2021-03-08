export const normalizeTech = ( techData ):Tech[] => {
  const normalizedTechData: Tech[] = techData.map(tech => tech.node)
  return normalizedTechData;
}


// export const normalizeTech2 = ( techData ):Tech[] => {
//   const normalizedTechData: Tech[] = techData.map(tech => {
//     const techArray = tech.node;
//     return tech.node
//   }
//     )
//   return normalizedTechData;
// }