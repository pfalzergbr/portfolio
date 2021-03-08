import Head from 'next/head';
import { GetStaticProps } from 'next';
import { fetchGraphql } from '../../utils/fetchGrapql';
import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import {
  Tech,
  languagesBlock,
  frontendBlock,
  backendBlock,
  databaseBlock,
  // otherBlock,
} from '../../data/techData';
import styles from './index.module.scss';
import OtherSkillsBlock from '../../components/skills/OtherSkillsBlock';

export interface SkillsProps {
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
        <meta charSet="utf-8" className="next-head"></meta>
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
  // const url = 'https://mltlvaji.api.sanity.io/v1/graphql/production/default';
  // const query = `{
  //   allTechData(sort: {priority: ASC}){
  //     icon
  //     label
  //     column
  //     priority
  //     description:descriptionRaw
  //     projects {
  //      title
  //       size
  //       path
  //       snippet:snippetRaw
  //     }
  //   }
  // }`;

  // const data = await

  // const data = await fetchGraphql(url, query);
  // // console.log(data.allTechData.find(tech => tech.icon === 'html').description[0].children);


  return {
    props: {
      techStack: {
        languagesBlock: [],
        frontendBlock: [],
        backendBlock: [],
        databaseBlock: [],
        otherBlock: [],
      },
    },
  };
};

export default Skills;
