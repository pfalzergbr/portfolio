import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import { drawerTransition } from '../../transitions/drawerTransition';
import styles from './styles/MenuDrawer.module.scss';

interface MenuDrawerProps {
  toggleOpen: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ toggleOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial='initial'
        animate='enter'
        exit='initial'
        variants={drawerTransition}
        className={styles.overlay}
        onClick={toggleOpen}
        key="menu"
      >
        <div className={styles.drawer}>
          <div className={styles.navlinkContainer}>
            <NavLink href='/' text='Home' />
            <NavLink href='/projects' text='Projects' />
            <NavLink href='/skills' text='Skills' />
            <NavLink href='/contact' text='Contact' />
            <NavLink href='/about' text='About' />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuDrawer;
