import style from '../styles/Main.module.css';
import Graph from './Graph';
import RelevantFacts from './RelevantFacts';
import Twitter from './Twitter';
import News from './News';

export default function Main() {
  return (
    <div className={style.Main}>
      <Graph />
      <RelevantFacts />
      <News />
      <Twitter />
    </div>
  );
}
