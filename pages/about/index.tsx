import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
import Section from '../../components/about/Section'
import Subsection from '../../components/about/Subsection'

export interface Props {}

const About: React.FC<Props> = () => {
  return (
    <AnimatedRoute className={styles.about}>
      <Section title="About me" subtitle="Hey, nice to meet you!">
        Hello
      </Section>

    </AnimatedRoute>
  );
};

export default About;
