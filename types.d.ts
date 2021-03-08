
interface SocialIcon {
  logo: string;
  url: string;
}


interface ProjectSnippet {
  title: string;
  size: string;
  path: string;
  snippet: [];
}

interface Tech {
  icon: string;
  label: string;
  // description?: string;
  // description?: [];
  description?: any;
  projects?: ProjectSnippet[];
}