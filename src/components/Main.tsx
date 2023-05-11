'user client';

import style from '../styles/Main.module.css';
import RelevantFacts from './RelevantFacts';
import Twitter from './Twitter';
import News from './News';
import GraphContainer from './GraphContainer';

export default function Main() {
  return (
    <div className={style.Main}>
      <GraphContainer />
      <RelevantFacts />
      <News />
      <Twitter />
    </div>
  );
}
