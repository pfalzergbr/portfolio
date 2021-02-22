import { motion } from 'framer-motion';
import { drawerTransition } from '../../transitions/drawerTransition';
import styles from './styles/MenuDrawer.module.scss';
import DrawerLink from './DrawerLink';

interface MenuDrawerProps {
  toggleOpen: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ toggleOpen }) => {
  return (
    <>
      <motion.div
        initial='initial'
        animate='enter'
        exit='exit'
        variants={drawerTransition}
        className={styles.drawer}
      >
        <div className={styles.navlinkContainer}>
          <DrawerLink toggleOpen={toggleOpen} href='/' text='Home' />
          <DrawerLink
            toggleOpen={toggleOpen}
            href='/projects'
            text='Projects'
          />
          <DrawerLink toggleOpen={toggleOpen} href='/skills' text='Skills' />
          <DrawerLink toggleOpen={toggleOpen} href='/contact' text='Contact' />
          <DrawerLink toggleOpen={toggleOpen} href='/about' text='About' />
        </div>
      </motion.div>
    </>
  );
};

export default MenuDrawer;
