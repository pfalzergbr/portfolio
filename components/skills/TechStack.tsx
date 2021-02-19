import TechStackBlock from './TechStackBlock';
import styles from './styles/TechStack.module.scss';
import SkillHeader from './SkillHeader';

export interface Tech {
  icon: string;
  label: string;
}

const languagesBlock: Tech[] = [
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'html', label: 'HTML' },
  { icon: 'css', label: 'CSS' },

];

const frontendBlock: Tech[] = [
  { icon: 'react', label: 'React' },
  { icon: 'nextjs', label: 'Next.js' },
  { icon: 'redux', label: 'Redux' },
  { icon: 'vue', label: 'Vue' },
  { icon: 'nuxt', label: 'Nuxt.js' },
  { icon: 'sass', label: 'Sass' },
];

const backendBlock: Tech[] = [
  { icon: 'nodejs', label: 'Node.js' },
  { icon: 'mysql', label: 'MySql' },
  { icon: 'postgres', label: 'PostgreSQL' },
  { icon: 'mongodb', label: 'MongoDb' },
  { icon: 'firebase', label: 'Firebase' },
];

const otherBlock: Tech[] = [
  { icon: 'git', label: 'Git' },
  { icon: 'github', label: 'Github' },
  { icon: 'docker', label: 'Docker' },
  { icon: 'jest', label: 'Jest' },
  { icon: 'figma', label: 'Figma' },
];

export interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className={styles.techStack_container}>
      <SkillHeader title="Skills & Stack" subtitle="technologies I have experience with"/>
      <div className={styles.techStack_grid}>
        <TechStackBlock techList={languagesBlock} />
        <TechStackBlock techList={frontendBlock} />
        <TechStackBlock techList={backendBlock} />
        <TechStackBlock techList={otherBlock} />
      </div>
    </div>
  );
};

export default TechStack;
