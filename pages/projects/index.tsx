import ProjectGrid from '../../components/projects/ProjectGrid';
import AnimatedRoute from '../../layout/AnimatedRoute';
// import UnderConstruction from '../../layout/layoutElements/UnderConstruction';
import { projects } from '../../data/projects';
import { Project } from '../../components/projects/ProjectItem';

export interface Props {
  projects: Project[];
}

const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <AnimatedRoute className=''>
      {/* <UnderConstruction /> */}
      <ProjectGrid
        projects={projects}
        header='Main Projects'
        description='Full Stack Applications and mor complicated, longer projects'
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
