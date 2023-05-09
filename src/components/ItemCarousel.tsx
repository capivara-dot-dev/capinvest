import style from '../styles/ItemCarousel.module.css';

interface ItemCarousel {
  name: string;
  points: string;
  vari: string;
}

const LinksNav: React.FC<ItemCarousel> = ({ name, points, vari }) => {
  let classVar: string | undefined;
  if (vari[0] == '+') {
    classVar = `${style.StockVar} ${style.StockUp}`;
  } else {
    classVar = `${style.StockVar} ${style.StockDown}`;
  }
  return (
    <div className={style.ItemCarousel}>
      <span className={style.StockName}>{name}</span>
      <span className={style.StockPoints}>{points} pts </span>
      <span className={classVar}>{vari}</span>
    </div>
  );
};

export default LinksNav;
