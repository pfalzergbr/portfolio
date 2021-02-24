import styles from './styles/TechModal.module.scss';

export interface TechModalProps {
  
}
 
const TechModal: React.FC <TechModalProps> = () => {
  return ( <div className={styles.techModal}></div> );
}
 
export default TechModal;