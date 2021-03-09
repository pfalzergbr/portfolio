interface Project {
  id: string;
  slug: string;
  priority: number;
  category: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  name: string;
  status: ProjectStatus;
  breadcrumbs: {
    breadcrumb: string
  }[];
  summary: [];
}


interface SocialIcon {
  logo: string;
  url: string;
}

interface TechStack {
  languages: Tech[];
  frontend: Tech[];
  backend: Tech[];
  database: Tech[];
  other: Tech[];
}


interface ProjectSnippet {
  project: {
    title: string;
    size: string;
    path: string;
    snippet: [];
    __typename?: string
  }
}

interface Tech {
  icon: string;
  label: string;
  column: string;
  // description?: string;
  // description?: [];
  description?: any;
  projects?: ProjectSnippet[];
  typename?: string
}