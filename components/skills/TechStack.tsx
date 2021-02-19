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

export interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className={styles.techStack_container}>
      <SkillHeader title="Skills & Stack" subtitle="technologies I have experience with"/>
      <div className={styles.techStack_grid}>
        <TechStackBlock techList={languagesBlock} />
        <TechStackBlock techList={frontendBlock} />
      </div>
    </div>
  );
};

export default TechStack;
