import { useState } from 'react';
import Menu from './Menu';
import MenuDrawer from './MenuDrawer';
import NavLink from './NavLink';
import styles from './styles/Navigation.module.scss';

//Todo - add hamburger menu

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* <div className=""></div> */}
      <nav className={styles.navigation}>
        <div className={styles.menuContainer}>
          <Menu isMenuOpen={isMenuOpen} toggleOpen={toggleOpen} />
          {isMenuOpen && <MenuDrawer />}
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
