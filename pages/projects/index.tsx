import Head from 'next/head';
import ProjectGrid from '../../components/projects/ProjectGrid';
import AnimatedRoute from '../../layout/AnimatedRoute';
import {getProjectProps} from './getProjectProps'
import styles from './index.module.scss';
import { buildProjectBlocks } from '../../utils/normalizeTech';

export interface Props {
  projects: 
  {
    main: Project[];
    practice: Project[];
  } 
}

const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <AnimatedRoute className={styles.projects}>
      <Head>
        <title>Gabor Pfalzer - Projects</title>
        <meta
          name='description'
          content='Full Stack Web Developer portfolio site of Gabor Pfalzer'
        ></meta>
      </Head>
      <ProjectGrid
        projects={projects.main}
        header='Main Projects'
        description='Full Stack Applications and more complex, longer projects I tend to spend more time with.'
      />
      <ProjectGrid
        projects={projects.practice}
        header='Learning & Practice'
        description='I really enjoy learning new technologies. These are short, fun projects I build specifically for picking up, or practice new technologies.'
      />
    </AnimatedRoute>
  );
};

export const getStaticProps = async () => {

  const projectProps = await getProjectProps();
  const projects = buildProjectBlocks(projectProps);

  return {
    props: {
      projects: projects,
    },
  };
};

export default Portfolio;
