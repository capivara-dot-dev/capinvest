'use client';
import style from '../styles/News.module.css';
import imgDown from '../media/Down.png';
import imgUp from '../media/Up.png';
import Image from 'next/image';
import sentimentalData from '../app/data/sentimentalData.json';

function classificationLastNews() {
  const sentiData = JSON.parse(JSON.stringify(sentimentalData));
  const data = sentiData.data.slice(-10);
  let positive = 0;
  let negative = 0;
  let neutral = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= 0.1) {
      positive += 1;
    } else if (data[i].score > -0.1) {
      neutral += 1;
    } else {
      negative += 1;
    }
  }
  return [`${positive * 10}%`, `${neutral * 10}%`, `${negative * 10}%`];
}

const News: React.FC = () => {
  const classification = classificationLastNews();
  return (
    <div className={style.News}>
      <div className={style.NewsInside}>
        <div className={style.Classifications}>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Positive}>
              <Image src={imgUp} alt="up-img" className={style.Img} />
              {classification[0]}
            </span>
          </div>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Neutral}>~ {classification[1]}</span>
          </div>
          <div className={style.NewsItem}>
            <span className={style.Title}>Últimas notícias</span>
            <span className={style.Negative}>
              <Image src={imgDown} alt="down-img" className={style.Img} />
              {classification[2]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
