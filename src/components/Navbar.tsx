import style from '../styles/Navbar.module.css';
import LinksNav from './LinksNav';

const Navbar: React.FC = () => {
  return (
    <nav className={style.Navbar}>
      CapiMoney
      <LinksNav />
    </nav>
  );
};

export default Navbar;
