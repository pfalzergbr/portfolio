import styles from './styles/Menu.module.scss';

export interface MenuProps {
  isMenuOpen: boolean;
  toggleOpen: () => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleOpen }) => {
  return (
    <div
      onClick={toggleOpen}
      className={`${styles.menuBtn} ${isMenuOpen ? styles.open : ''}`}
    >
      <div className={styles.burger}></div>
    </div>
  );
};

export default Menu;
