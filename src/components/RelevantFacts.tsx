import style from '../styles/RelevantFacts.module.css';

const RelevantFacts: React.FC = () => {
  return (
    <div className={style.RelevantFacts}>
      <div className={style.RelevantFactsInside}>
        <span className={style.Title}>Fatos Relevantes</span>
        <div className={style.RelevantFact}>
          <div>Título</div>
          <div>Data</div>
          <div>Descrição</div>
        </div>
        <div className={style.RelevantFact}>
          <div>Título</div>
          <div>Data</div>
          <div>Descrição</div>
        </div>
      </div>
    </div>
  );
};

export default RelevantFacts;
