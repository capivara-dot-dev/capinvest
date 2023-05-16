'use client';

import Graph from './Graph';
import style from '../styles/GraphContainer.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import dataHistorical from '../app/data/historicalData.json';

function preProcessing() {
  const month = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const modifiedData = JSON.parse(JSON.stringify(dataHistorical));
  for (let i = 0; i < modifiedData.length; i++) {
    const numberMonth = Number(modifiedData[i].date.substring(5, 7)) - 1;
    modifiedData[i].date = `${modifiedData[i].date.substring(8, 10)} ${
      month[numberMonth]
    } ${modifiedData[i].date.substring(2, 4)}`;
  }
  return modifiedData;
}
function week() {
  const data = preProcessing().slice(-7); // Escolhe apenas os últimos 7 dados
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const newGraph = <Graph data={data} />;
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('week')[0];
    button.setAttribute('id', style.Active);
  }
}

function month() {
  const dataNotProcessed = preProcessing().slice(-30);
  const lastDate = preProcessing().slice(-1);
  const data = dataNotProcessed.filter(
    (item: any) => item.date.substring(3, 6) == lastDate[0].date.substring(3, 6)
  ); // Escolhe apenas os dados que tem são do mesmo mês da última medição
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const newGraph = <Graph data={data} />;
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('month')[0];
    button.setAttribute('id', style.Active);
  }
}

function year() {
  const dataNotProcessed = preProcessing().slice(-365);
  const lastDate = preProcessing().slice(-1);
  const data = dataNotProcessed.filter(
    (item: any) => item.date.slice(-2) == lastDate[0].date.slice(-2)
  ); // Escolhe apenas os dados que tem são do mesmo ano da última medição
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const newGraph = <Graph data={data} />;
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('year')[0];
    button.setAttribute('id', style.Active);
  }
}

function all() {
  const data = preProcessing(); // Escolhe todos os dados
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const newGraph = <Graph data={data} />;
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('all')[0];
    button.setAttribute('id', style.Active);
  }
}
const GraphContainer: React.FC = () => {
  const data = preProcessing();
  return (
    <div className={style.Graph}>
      <div className={style.GraphContainer}>
        <span className={style.Title}>Gráfico em Tempo Real</span>
        <div className={style.aux} id="aux">
          <Graph data={data} />
        </div>
        <div className={style.Forms}>
          <button onClick={week} className="week">
            1S
          </button>
          <button onClick={month} className="month">
            1M
          </button>
          <button onClick={year} className="year">
            1A
          </button>
          <button onClick={all} id={style.Active} className="all">
            Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;
