import Image from 'next/image';
import Link from 'next/link';
import AnimatedRoute from '../../layout/AnimatedRoute';
import indexStyles from './index.module.scss';
import styles from '../../components/about/styles/Section.module.scss';
import Section from '../../components/about/Section';
import Subsection from '../../components/about/Subsection';

export interface Props {}

const About: React.FC<Props> = () => {
  return (
    <AnimatedRoute className={indexStyles.about}>
      <div className={indexStyles.imageContainer}>
        <Image
          className={styles.image}
          // layout='responsive'
          src='/images/profile.png'
          alt='Photo of Gabor'
          width={945}
          height={945}
          objectFit='contain'
        />
      </div>
      <Section title='About me'>
        <Subsection>
          <p className={styles.sectionParagraph}>
            My name is Peter, or Gabor, whichewer you prefer. I am a{' '}
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
            Actively programming pretty much full time since early 2020, I am
            currently looking for my first tech position as a{' '}
            <span className={styles.sectionHighlight}>web developer.</span> My
            current stack is mainly{' '}
            <span className={styles.sectionHighlight}>JavaScript</span> based, I
            am also spending a plenty of time with{' '}
            <span className={styles.sectionHighlight}>TypeScript</span>{' '}
            recently. I am familiar with frontend frameworks -{' '}
            <span className={styles.sectionHighlight}>React</span> and{' '}
            <span className={styles.sectionHighlight}>Vue</span>,{' '}
            <span className={styles.sectionHighlight}>HTML</span> and{' '}
            <span className={styles.sectionHighlight}>CSS</span>, styling with{' '}
            <span className={styles.sectionHighlight}>Sass</span>. I build{' '}
            <span className={styles.sectionHighlight}>REST</span>ful APIs with{' '}
            <span className={styles.sectionHighlight}>Node.js</span>, relational
            and non-relational databases. I enjoy figuring out best practices,
            designing architecture, reusable code. As an ex-daytrader, I find
            flashing red testcases turning green extremely rewarding. I am
            cofident using <span className={styles.sectionHighlight}>Git</span>{' '}
            for version control, currently integrating{' '}
            <span className={styles.sectionHighlight}>Docker</span> and{' '}
            <span className={styles.sectionHighlight}>CI/CD</span> to my
            everyday workflow,{' '}
          </p>
          <p className={styles.sectionParagraph}>
            I am focusing on deepening my foundational skills at the moment. In
            the future, I am planning to expand my toolkit with PHP - Laravel. I
            also enjoy messing about with{' '}
            <span className={styles.sectionHighlight}>Python</span>. I can pick
            it up relatively quickly if needed.
          </p>
          <p className={styles.sectionParagraph}>
            In my free time, I like learning new things like tech or languages
            (my Chinese needs work, Swedish also on the list), working on side
            projects. I love spending time with my lovely wife, I enjoy an
            occasional video game, or being outside chasing wildlife. I would
            love to get back into martial arts (wing-chun for me), once I have a
            more regular schedule.
          </p>
          <p className={styles.sectionParagraph}>
            Although I don`t have aspirations in bartending or hospitality
            anymore, I do maintain a professional curiosity, and always try to
            apply the lessons I have learnt.
          </p>
          <p>I am currently building up my full-stack portfolio. If you are interested in my work, please {' '}
            <Link href='/projects'>
              <a className={styles.sectionLink}>Check out my projects here</a>
            </Link>
          </p>
        </Subsection>
      </Section>
    </AnimatedRoute>
  );
};

export default About;
