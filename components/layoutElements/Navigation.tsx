import NavLink from '../UI/NavLink';
import styles from './styles/Navigation.module.scss';

//Todo - add hamburger

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className={styles.navlinkContainer}>
        <NavLink href="/" text="Home" />
        <NavLink href="/portfolio" text="Portfolio" />
        <NavLink href="/skills" text="Skills" />
        <NavLink href="/contact" text="Contact" />
        <NavLink href="/about" text="About" />
      </div>
    </nav>
  );
};

export default Navigation;
