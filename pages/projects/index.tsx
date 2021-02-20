import AnimatedRoute from '../../layout/AnimatedRoute';
import UnderConstruction from '../../layout/layoutElements/UnderConstruction';

export interface Props {}

const Portfolio: React.FC<Props> = () => {
  return (
    <AnimatedRoute>
      <UnderConstruction />
    </AnimatedRoute>
  );
};

export default Portfolio;
