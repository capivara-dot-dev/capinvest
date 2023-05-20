'user client';

import style from '../styles/Main.module.css';
import RelevantFacts from './RelevantFacts';
import Twitter from './Twitter';
import News from './News';
import NewsPetro from './NewsPetro';
import GraphContainer from './GraphContainer';
import GraphContainerPetro from './GraphContainerPetro';
import RelevantFactsPetro from './RelevantFactsPetro';

export default function Main() {
  return (
    <div className={style.Main}>
      <GraphContainer />
      <RelevantFacts />
      <News />
      <Twitter />
      <GraphContainerPetro />
      <RelevantFactsPetro />
      <NewsPetro />
    </div>
  );
}
