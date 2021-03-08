export const normalizeTech = ( techData ):Tech[] => {
  const normalizedTechData: Tech[] = techData.map(tech => tech.node)
  return normalizedTechData;
}