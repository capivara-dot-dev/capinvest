import style from '../styles/News.module.css';

const News: React.FC = () => {
  return (
    <div className={style.News}>
      <div className={style.NewsInside}>
        <span className={style.Title}>Notícias - Ultimos 30 minutos</span>
        <div className={style.Classifications}>
          <span className={style.Positive}>+1.03%</span>
          <span className={style.Neutral}>~1.03%</span>
          <span className={style.Negative}>-1.03%</span>
        </div>
      </div>
    </div>
  );
};

export default News;
