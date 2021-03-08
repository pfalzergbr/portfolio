import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getSkillProps } from './getSkillProps';
import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
import OtherSkillsBlock from '../../components/skills/OtherSkillsBlock';

interface SkillsProps {
  techStack: {
    languagesBlock: Tech[];
    frontendBlock: Tech[];
    backendBlock: Tech[];
    databaseBlock: Tech[];
    otherBlock: Tech[];
  };
}

const Skills: React.FC<SkillsProps> = ({ techStack }) => {
  return (
    <AnimatedRoute className={styles.skills}>
      <Head>
        <title>Gabor Pfalzer - Skills</title>
        <meta
          name='description'
          content='Full Stack Web Developer portfolio site of Gabor Pfalzer'
        ></meta>
        <meta charSet='UTF-8' className='next-head'></meta>
      </Head>
      <>
        <TechStack techStack={techStack} />
        <LanguageBlock />
        <OtherSkillsBlock />
      </>
    </AnimatedRoute>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const techStack = await getSkillProps();
  // const data = await fetchGraphql(url, query);
  // console.log(techStack.find(tech => tech.icon === 'typescript').projects
  // );

  return {
    props: {
      techStack: {
        languagesBlock: techStack,
        frontendBlock: [],
        backendBlock: [],
        databaseBlock: [],
        otherBlock: [],
      },
    },
  };
};

export default Skills;
