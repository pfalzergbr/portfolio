export interface ProjectSnippet {
  title: string;
  path: string;
  snippet: string;

}

export interface Tech {
  icon: string;
  label: string;
  description?: string;
  projects?: ProjectSnippet[];
}

export const languagesBlock: Tech[] = [
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'html', label: 'HTML' },
  { icon: 'css', label: 'CSS' },

];

export const frontendBlock: Tech[] = [
  { icon: 'react', label: 'React' },
  { icon: 'nextjs', label: 'Next.js' },
  { icon: 'redux', label: 'Redux' },
  { icon: 'vue', label: 'Vue' },
  // { icon: 'nuxt', label: 'Nuxt.js' },
  { icon: 'sass', label: 'Sass' },
];

export const backendBlock: Tech[] = [
  { icon: 'nodejs', label: 'Node.js' },
  { icon: 'mysql', label: 'MySql' },
  { icon: 'postgres', label: 'PostgreSQL' },
  { icon: 'mongodb', label: 'MongoDb' },
  { icon: 'firebase', label: 'Firebase' },
];

export const otherBlock: Tech[] = [
  { icon: 'git', label: 'Git' },
  { icon: 'github', label: 'Github' },
  { icon: 'docker', label: 'Docker' },
  { icon: 'jest', label: 'Jest' },
  { icon: 'figma', label: 'Figma' },
];