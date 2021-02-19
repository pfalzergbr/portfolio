import NavLink from './NavLink';
import styles from './styles/Navigation.module.scss';

//Todo - add hamburger menu

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className={styles.navlinkContainer}>
        <NavLink href="/" text="Home" />
        <NavLink href="/projects" text="Projects" />
        <NavLink href="/skills" text="Skills" />
        <NavLink href="/contact" text="Contact" />
        <NavLink href="/about" text="About" />
      </div>
    </nav>
  );
};

export default Navigation;
