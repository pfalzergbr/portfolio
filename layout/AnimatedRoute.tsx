import { motion } from 'framer-motion';
import { routeTransition } from '../transitions/routeTransition';

export interface AnimatedRouteProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedRoute: React.FC<AnimatedRouteProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial='initial'
      animate='enter'
      exit='exit'
      variants={routeTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
