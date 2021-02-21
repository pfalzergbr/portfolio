import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import { drawerTransition } from '../../transitions/drawerTransition';
import styles from './styles/MenuDrawer.module.scss';

interface MenuDrawerProps {
  toggleOpen: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ toggleOpen }) => {
  return (
    <>
      <div className={styles.overlay} onClick={toggleOpen} key='menu'></div>
      <AnimatePresence>
        <motion.div
          initial='initial'
          animate='enter'
          exit='exit'
          variants={drawerTransition}
          className={styles.drawer}
        >
          <div className={styles.navlinkContainer}>
            <NavLink href='/' text='Home' />
            <NavLink href='/projects' text='Projects' />
            <NavLink href='/skills' text='Skills' />
            <NavLink href='/contact' text='Contact' />
            <NavLink href='/about' text='About' />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MenuDrawer;
