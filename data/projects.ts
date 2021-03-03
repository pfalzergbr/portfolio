import { Project } from '../components/projects/ProjectItem';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'tradelog',
    category: 'main',
    priority: 1,
    imageUrl: '/images/projects/tradelog-details.png',
    liveUrl: 'https://tradelog-app.herokuapp.com/',
    githubUrl: 'https://github.com/pfalzergbr/tradelog-front',
    name: 'Tradelog',
    status: 'Finished',
    techBreadcrumbs: [
      'JavaScript',
      'React',
      'Redux',
      'Sass',
      'Node.js',
      'Express',
      'Postrgres',
    ],
    summary:
      'Application for stock market traders that helps tracking profits, losses and strategy success rates. My very first larger full stack application, inspired by the time when I was learning how to trade. A simple application that keeps track of account, trade and strategy statistics for authenticated users. ',
  },
  {
    id: '2',
    slug: 'rewards',
    category: 'main',
    priority: 2,
    liveUrl: 'https://gold-that-glitters.netlify.app/',
    imageUrl: '/images/projects/rewards.png',
    githubUrl: 'https://github.com/pfalzergbr/rewards',
    name: 'Rewards',
    status: 'Finished',
    techBreadcrumbs: [
      'JavaScript',
      'React',
      'React-Context',
      'Sass',
    ],
    summary:
      'Glorified todo app on a stick, that keeps you balanced for long term performance. Set up your own rewards for a fair price to keep you motivated. The application rewards you for completed tasks with coins, that you can spend on something fun. Also tries to motivate you with semi-fun toasted comments.',
  },
  // {
  //   id: '2',
  //   slug: 'portfolio',
  //   priority: '2',
  //   imageUrl: 'none',
  //   name: 'Portfolio',
  //   status: 'Ongoing',
  //   techBreadcrumbs: [
  //     'TypeScript',
  //     'Next.js',
  //     'Sass',
  //     'CSS Modules',
  //     'GraphQL',
  //     'Strapi',
  //   ],
  //   summary:
  //     'My portfolio site, that you are looking at right now. Built with TypeScript and Next.JS. Fetching GraphQL data from a Strapi headless CMS, and generates the page as a static site.',
  // },
];

export const practiceProjects:Project[] = [
  {
    id: '3',
    slug: 'vtm-diceroll',
    category: 'practice',
    priority: 3,
    liveUrl: 'https://vtm-diceroll.netlify.app',
    imageUrl: '/images/projects/vtm.png',
    githubUrl: 'https://github.com/pfalzergbr/vtm-dice-ts-react',
    name: 'VTM - Diceroll Generator',
    status: 'Finished',
    techBreadcrumbs: [
      'TypeScript',
      'React',
      'React-hooks',
      'CSS',
      'Jest',
    ],
    summary:
      'Diceroll generator for the popular gothic RPG, Vampire the Masquerade. Simple app with a complex enough system to practice TypeScript-React, and Jest testing for the internal logic. Also experimental app for React-Testing-Library',
  },
]