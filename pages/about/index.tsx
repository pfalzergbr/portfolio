import { GetStaticProps } from 'next';
import MyImage from '../../components/UI/MyImage';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedRoute from '../../layout/AnimatedRoute';
import indexStyles from './index.module.scss';
import styles from '../../components/about/styles/Section.module.scss';
import Section from '../../components/about/Section';
import Subsection from '../../components/about/Subsection';

interface Props {
  imageUrl: string;
}

const About: React.FC<Props> = ({ imageUrl }) => {
  return (
    <AnimatedRoute className={indexStyles.about}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Gabor Pfalzer - Portfolio</title>
        <meta
          name='title'
          property='og:title'
          content='Gabor Pfalzer - Portfolio'
        />
        <meta name='type' property='type' content='Website' />
        <meta
          name='image'
          property='og:image'
          content='https://res.cloudinary.com/pfalzer-dev/image/upload/v1618154691/portfolio-min_v4oztd.png'
        />
        <meta
          name='description'
          property='og:description'
          content='Full Stack Web Development Portfolio, London'
        />
        <meta name='author' content='Gabor Pfalzer' />
      </Head>
      <div className={indexStyles.imageContainer}>
        <MyImage
          className={styles.image}
          src={imageUrl}
          alt='Photo of Gabor'
          width={945}
          height={945}
          objectFit='contain'
        />
      </div>
      <Section title='About me'>
        <Subsection>
          <p className={styles.sectionParagraph}>
            My name is Gabor, whichever you prefer. I am a{' '}
            <span className={styles.sectionHighlight}>
              full stack web developer
            </span>
            , based in London. I am originally from Budapest, studied for a year
            in Japan, living in the UK since 2012. So far in my life, I have
            also been a Japanese teacher, briefly worked as a self employed
            daytrader, did my fair share of hospitality, and a lot of bar
            mangement. As you can see, I enjoy learning new things.
          </p>
          <p className={styles.sectionParagraph}>
            Actively programming pretty much full time since early 2020. I am a {' '}
            <span className={styles.sectionHighlight}>Software Engineer</span>
            {' '}at{' '}
            <span className={styles.sectionHighlight}>Venn Apps</span> in London. {' '}
            Being in charge of our frontend codebase, I spend most of my time building and maintaining our web applications, mainly written in {' '}
            <span className={styles.sectionHighlight}>TypeScript</span>,{' '}
            <span className={styles.sectionHighlight}>React</span>,{' '} and {' '}
            <span className={styles.sectionHighlight}>Next.js</span>. I also do regular work on the backend, contributing to extending and maintaining our serverless <span className={styles.sectionHighlight}>Node/TypeScript</span>{' '}API. 
            As a company, we are building bespoke, native e-commerce mobile applications with rich integrations, which I support from the frontend web. 
          </p>

          <p className={styles.sectionParagraph}>
            I am very passionate about creating performant, highly interactive, complex Web Applications, writing highly reusable, well tested, robust code. I enjoy creating new features just as much as refactoring, leaving the codebase a little bit better than I found. Very comfortable with both{' '}
            <span className={styles.sectionHighlight}>Functional</span>, and <span className={styles.sectionHighlight}>Object Oriented</span> code.
          </p>
          <p className={styles.sectionParagraph}>
            Coding outside work, I enjoy learning about Design Patterns, Algorithms, Data Structure, and working in becoming a more effective, well rounded engineer, being competent at solving problems. I happily work on my own projects in my free time.{' '}
          </p>
          <p className={styles.sectionParagraph}>
            Apart from my main stack, I spent time with {' '}
            <span className={styles.sectionHighlight}>Python</span>, built a good understanding and basic proficiency with <span className={styles.sectionHighlight}>Java</span> and OOP, and very much looking forward to work on some more complex side projects with <span className={styles.sectionHighlight}>Go</span>.
            Recently getting into <span className={styles.sectionHighlight}>Microservices</span>, and planning to work on my skills around <span className={styles.sectionHighlight}>Cloud Native</span>, most likely GCP.
          </p>
          <p className={styles.sectionParagraph}>
            In my free time, I like learning new things like tech or languages
            (my Chinese needs work), working on side projects. I love spending
            time with my lovely wife, I enjoy an occasional video game, or being
            outside chasing wildlife. I would love to get back into martial arts
            (wing-chun for me), once the state of the world allows.
          </p>
        </Subsection>
      </Section>
    </AnimatedRoute>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      imageUrl: '/v1614969014/profile-min_frtsp6.png',
    },
  };
};
