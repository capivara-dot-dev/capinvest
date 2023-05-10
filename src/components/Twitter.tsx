import style from '../styles/Twitter.module.css';

const Twitter: React.FC = () => {
  return (
    <div className={style.Twitter}>
      <div className={style.TwitterInside}>
        <span className={style.Title}>Twitter</span>
        <div className={style.Classifications}>
          <span className={style.Positive}>+1.03%</span>
          <span className={style.Neutral}>~1.03%</span>
          <span className={style.Negative}>-1.03%</span>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
