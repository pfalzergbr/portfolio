import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import MenuDrawer from './MenuDrawer';
import NavLink from './NavLink';
import styles from './styles/Navigation.module.scss';

//Todo - add hamburger menu

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <div className=""></div> */}
      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <Menu isMenuOpen={isMenuOpen} toggleOpen={toggleOpen} />
          {isMenuOpen && (
            <div
              className={styles.overlay}
              onClick={toggleOpen}
              key='menu'
            ></div>
          )}

          <AnimatePresence>
            {isMenuOpen && <MenuDrawer toggleOpen={toggleOpen} />}
          </AnimatePresence>
        </div>
        <div className={styles.navlinkContainer}>
          <NavLink href='/' text='Home' />
          <NavLink href='/projects' text='Projects' />
          <NavLink href='/skills' text='Skills' />
          <NavLink href='/contact' text='Contact' />
          <NavLink href='/about' text='About' />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
