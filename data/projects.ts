export const projects = [
  {
    id: '1',
    slug: 'tradelog',
    priority: '1',
    imageUrl: 'none',
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
      // 'Heroku'
    ],
    summary:
      'Application for stock market traders for tracking profits, losses and strategy success rates. My very first full stack application, inspired by my trader days. Built with React hooks and Redux on the frontend, connected to a Node.js REST API made from scracth. Using JWT for authentication, PostgreSQL as a database.',
  },
  {
    id: '2',
    slug: 'portfolio',
    priority: '2',
    imageUrl: 'none',
    name: 'Portfolio',
    status: 'Ongoing',
    techBreadcrumbs: [
      'TypeScript',
      'Next.js',
      'Sass',
      'CSS Modules',
      'GraphQL',
      'Strapi',
    ],
    summary:
      'My portfolio site, that you are looking at right now. Built with TypeScript and Next.JS. Fetching GraphQL data from a Strapi headless CMS, and generates the page as a static site.',
  },
];
