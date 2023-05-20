import Link from 'next/link';
import style from '../styles/LinksNav.module.css';

const LinksNav: React.FC = () => {
  return (
    <div className={style.LinksNav}>
      <Link href="/sim" className={style.Link}>
        Quem Somos
      </Link>
      <Link href="#" className={style.Link}>
        Pantanal Dev
      </Link>
      <Link href="#" className={style.Link}>
        Minha conta
      </Link>
    </div>
  );
};

export default LinksNav;
