import style from '../styles/Twitter.module.css';
import imgDown from '../media/Down.png';
import imgUp from '../media/Up.png';
import Image from 'next/image';

const Twitter: React.FC = () => {
  return (
    <div className={style.Twitter}>
      <div className={style.TwitterInside}>
        <div className={style.Classifications}>
          <div className={style.TwitterItem}>
            <span className={style.Title}>Twitter</span>
            <span className={style.Positive}>
              <Image src={imgUp} alt="up-img" className={style.Img} />
              45%
            </span>
          </div>
          <div className={style.TwitterItem}>
            <span className={style.Title}>Twitter</span>
            <span className={style.Neutral}>~ 34%</span>
          </div>
          <div className={style.TwitterItem}>
            <span className={style.Title}>Twitter</span>
            <span className={style.Negative}>
              <Image src={imgDown} alt="down-img" className={style.Img} />
              22%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
