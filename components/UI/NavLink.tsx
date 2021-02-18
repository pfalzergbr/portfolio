import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles/NavLink.module.scss';


export interface NavLinkProps { href: string; text: string}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const router = useRouter();

  const className = `${styles.navlink} ${router.pathname === href ? styles.active: ''}`

  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default NavLink;
