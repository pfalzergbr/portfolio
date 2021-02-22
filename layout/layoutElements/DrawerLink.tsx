import { useRouter } from 'next/router';
import styles from './styles/Navigation.module.scss';
export interface DrawerLinkProps {
  href: string;
  text: string;
  toggleOpen: () => void;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({ href, text, toggleOpen }) => {
  const router = useRouter();
  const className = `${styles.navlink} ${
    router.pathname === href ? styles.active : ''
  }`;

  const handleClick = () => {
    router.push(href)
    toggleOpen()
  };

  return (
    <a className={className} onClick={handleClick}>
      {text}
    </a>
  );
};

export default DrawerLink;
