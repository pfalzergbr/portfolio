import Footer from "./layoutElements/Footer"
import Navigation from "./layoutElements/Navigation"
import styles from "./styles/layout.module.scss";

export interface LayoutProps {
  children: JSX.Element
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
  return ( 
  <div className={styles.App}>
    <Navigation/>
    {children}
    <Footer />
  </div> );
}
 
export default Layout;