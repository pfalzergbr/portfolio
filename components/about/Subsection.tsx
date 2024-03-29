import styles from './styles/Section.module.scss';


export interface SubSectionProps {
  title?: string;
  children: React.ReactNode;
}
 
const SubSection: React.FC<SubSectionProps> = ({title, children}) => {
  return ( 
  <>
    {title && <h3 className={styles.sectionSubheader}>{title}</h3>}
    <div className={styles.sectionContent}>{children}</div>
  </>);
}
 
export default SubSection;