import style from '../styles/RelevantFacts.module.css';

const RelevantFacts: React.FC = () => {
  return (
    <div className={style.RelevantFacts}>
      <div className={style.RelevantFactsInside}>
        <span className={style.Title}>Fatos Relevantes</span>
        <div className={style.RelevantFact}>
          <div className={style.FactTitle}>Título</div>
          <div className={style.FactDate}>Data</div>
          <div className={style.FactDescription}>Descrição</div>
        </div>
      </div>
    </div>
  );
};

export default RelevantFacts;
