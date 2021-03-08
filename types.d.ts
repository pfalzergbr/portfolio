
interface SocialIcon {
  logo: string;
  url: string;
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