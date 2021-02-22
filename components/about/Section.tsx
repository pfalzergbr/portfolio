import styles from './styles/Section.module.scss';

export interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <h4 className={styles.sectionSubtitle}>{subtitle}</h4>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

export default Section;
