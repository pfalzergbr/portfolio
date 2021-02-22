import styles from './styles/Section.module.scss';


export interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}
 
const SubSection: React.FC<SubSectionProps> = ({title, children}) => {
  return ( 
  <>
    <h3 className={styles.sectionSubheader}>{title}</h3>
    <p className={styles.sectionParagraph}>{children}</p>
  </>);
}
 
export default SubSection;