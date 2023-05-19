import style from '../styles/RelevantFacts.module.css';

const RelevantFacts: React.FC = () => {
  return (
    <div className={style.RelevantFacts}>
      <div className={style.RelevantFactsInside}>
        <span className={style.Title}>Fatos Relevantes</span>
        <div className={style.RelevantFact}>
          <div className={style.FactTitle}>1° Turno das Eleições</div>
          <div className={style.FactDate}>2 de Outubro de 2022</div>
          <div className={style.FactDescription}>
            Nesta data occorreu o primeiro turno das eleições presidenciais e dos governadores.
            Também aconteceu a eleição de senadores, deputados federais e estaduais.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelevantFacts;
