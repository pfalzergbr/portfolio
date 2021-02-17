export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <div>
        <a>Home</a>
        <a>Portfolio</a>
        <a>Skills</a>
        <a>Contact</a>
        <a>About</a>
      </div>
    </nav>
  );
};

export default Navigation;
