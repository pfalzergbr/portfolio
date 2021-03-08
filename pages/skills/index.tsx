import Head from 'next/head';
import { GetStaticProps } from 'next';
import gql from "graphql-tag";
// import { fetchGraphql } from '../../utils/fetchGrapql';
import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
import OtherSkillsBlock from '../../components/skills/OtherSkillsBlock';
import { client } from '../../client/client';

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
  try {
    const data = await client.query({
      query: gql`query{
        allTechs {
          edges {
            node {
              label
              icon
              column
              description
              projects {
                project {
                  ... on Projectsnippet {
                    title
                    size
                    path
                    snippet
                  }
                }
              }
            }
          }
        }
      }`
    })
    console.log(data.data.allTechs.edges);
    
  } catch (error) {
    console.log(error);
  }



  // const data = await fetchGraphql(url, query);
  // console.log(data.allTechData.find(tech => tech.icon === 'html').description[0].children);


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
