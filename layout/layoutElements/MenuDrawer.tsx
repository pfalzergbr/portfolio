import styles from './styles/MenuDrawer.module.scss';
import NavLink from './NavLink';
export interface MenuDrawerProps {

}
 
const MenuDrawer: React.FC<MenuDrawerProps> = () => {
  return ( <div className={styles.overlay}>
    <div className={styles.drawer}>
      <div className={styles.navlinkContainer}>
        <NavLink href='/' text='Home' />
        <NavLink href='/projects' text='Projects' />
        <NavLink href='/skills' text='Skills' />
        <NavLink href='/contact' text='Contact' />
        <NavLink href='/about' text='About' />
      </div>
    </div>
  </div> );
}
 
export default MenuDrawer;