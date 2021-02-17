import Link from 'next/link';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/portfolio'>
          <a>Portfolio</a>
        </Link>
        <Link href='/skills'>
          <a>Skills</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
        <Link href='about'>
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
