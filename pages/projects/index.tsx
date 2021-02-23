import ProjectGrid from '../../components/projects/ProjectGrid';
import AnimatedRoute from '../../layout/AnimatedRoute';
// import UnderConstruction from '../../layout/layoutElements/UnderConstruction';
import { projects } from '../../data/projects';
import { Project } from '../../components/projects/ProjectItem';
import styles from './index.module.scss';

export interface Props {
  projects: Project[];
}

const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <AnimatedRoute className={styles.projects}>
      {/* <UnderConstruction /> */}
      <ProjectGrid
        projects={projects}
        header='Main Projects'
        description='Full Stack Applications and more complex, longer projects I tend to spend more time with.'
      />
      <ProjectGrid
        projects={[]}
        header='Learning & Practice'
        description='I really enjoy learning new technologies. These are short, fun projects I build specifically for picking up, or practice new technologies.'
      />
    </AnimatedRoute>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

export default Portfolio;
