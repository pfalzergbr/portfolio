import { motion } from 'framer-motion';

export interface AnimatedRouteProps {
  children: JSX.Element;
  className?: string;
}


const AnimatedRoute: React.FC<AnimatedRouteProps> = ({ children, className = "" }) => {
  return (
    <motion.div className={className} initial='initial' animate='enter' exit='exit' variants={{
      initial: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      // exit: {
      //   opacity: 0
      // }
    }}>
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
