export interface ProjectSnippet {
  title: string;
  size: string;
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
  {
    icon: 'javascript',
    label: 'JavaScript',
    description:
      'One of the most popular programming languages on the web, backbone of my stack, useful on both the front and backend. Recently I favor Typescript for own projects, but writing plenty of javascript.',
    projects: [
      {
        title: 'Tradelog',
        size: 'full',
        path: '#',
        snippet:
          'Full stack application for stock market traders, to track trading results. React front, Node-Express-Postgres backend.',
      },
      {
        title: 'Rewards',
        size: 'full',
        path: '#',
        snippet:
          'Glorified Todo list, where you are rewarded with coins on task completion. You get to spend those on rewarding yourself. React Hooks and Context.',
      },
    ],
  },
  {
    icon: 'typescript',
    label: 'TypeScript',
    description:
      'Superset of JavaScript, making it typesafe, and way more scalable.Since I switched from vanilla, It is definitely my preferred way to write JavaScript code.',
    projects: [
      {
        title: 'VTM - Diceroll Generator',
        size: 'mini',
        path: '#',
        snippet:
          'Complex diceroll generator for the popular gothic role playing game, Vampire the Masquerade. ',
      },
    ],
  },
  {
    icon: 'html',
    label: 'HTML',
    description:
      'Like everyone else on the web, I am using HTML in almost every projects, in some shape and form. I write a lot of JSX or Vue template, but I have also briefly used server side templating engines as well, like Handlebars, EJS or Pug.',
  },
  {
    icon: 'css',
    label: 'CSS',
    description:
      'The markup language that makes the web look great, integral part of almost all websites. Although I prefer writing CSS from scratch for educational purposes, I briefly touched on some frameworks as well: Materialize, Material UI and Bootstrap. Quite a fan of flexbox and grid.',
  },
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
