import style from '../styles/NewsPetro.module.css';
import imgDown from '../media/Down.png';
import imgUp from '../media/Up.png';
import Image from 'next/image';

const News: React.FC = () => {
  return (
    <div className={style.News}>
      <div className={style.NewsInside}>
        <div className={style.Classifications}>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Positive}>
              <Image src={imgUp} alt="up-img" className={style.Img} />
              1.03%
            </span>
          </div>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Neutral}>~ 1.03%</span>
          </div>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Negative}>
              <Image src={imgDown} alt="down-img" className={style.Img} />
              1.03%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
