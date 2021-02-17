import Footer from "../components/layoutElements/Footer"
import Navigation from "../components/layoutElements/Navigation"

export interface LayoutProps {
  children
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
  return ( 
  <div className="App">
    <Navigation/>
    {children}
    <Footer />
  </div> );
}
 
export default Layout;