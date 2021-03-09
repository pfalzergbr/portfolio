export const normalizeTech = ( techData ):Tech[] => {
  const normalizedTechData: Tech[] = techData.map(tech => tech.node)
  return normalizedTechData;
}

export const normalizeProject = ( projectData ) => {
  const normalizedTechData = projectData.map(project => project.node)
  return normalizedTechData;
}


export const buildTechBlocks = (techStack: Tech[]): TechStack => {
  const blocks = {
    languages: [],
    frontend: [],
    backend: [],
    database: [],
    other: [],
  }
  for (let i = 0; i < techStack.length; i++) {
    blocks[techStack[i].column].push(techStack[i]);
  }
  return blocks;
}