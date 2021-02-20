import AnimatedRoute from '../../layout/AnimatedRoute';
import UnderConstruction from '../../layout/layoutElements/UnderConstruction';

export interface Props {}

const About: React.FC<Props> = () => {
  return (
    <AnimatedRoute>
      <UnderConstruction />
    </AnimatedRoute>
  );
};

export default About;
