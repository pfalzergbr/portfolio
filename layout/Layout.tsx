import Footer from "../components/layoutElements/Footer"
import Navigation from "../components/layoutElements/Navigation"
import styles from "./styles/layout.module.scss";

export interface LayoutProps {
  children
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