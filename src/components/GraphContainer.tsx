'use client';

import Graph from './Graph';
import style from '../styles/GraphContainer.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import dataHistorical from '../app/data/historicalData.json';
import dataRelevantFacts from '../app/data/relevantFacts.json';
import sentimentalData from '../app/data/sentimentalData.json';

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
  const dataRelevant = JSON.parse(JSON.stringify(dataRelevantFacts));
  const sentiData = JSON.parse(JSON.stringify(sentimentalData));
  for (let i = 0; i < sentiData.data.length; i++) {
    const numberMonthSent = Number(sentiData.data[i].date.substring(5, 7)) - 1;
    sentiData.data[i].date = `${sentiData.data[i].date.substring(8, 10)} ${
      month[numberMonthSent]
    } ${sentiData.data[i].date.substring(2, 4)}`;
  }
  for (let i = 0; i < modifiedData.length; i++) {
    const numberMonth = Number(modifiedData[i].date.substring(5, 7)) - 1;
    modifiedData[i].date = `${modifiedData[i].date.substring(8, 10)} ${
      month[numberMonth]
    } ${modifiedData[i].date.substring(2, 4)}`;
  }
  for (let i = 0; i < dataRelevant.length; i++) {
    for (let j = 0; j < modifiedData.length; j++) {
      if (modifiedData[j].date == dataRelevant[i].date) {
        const objaux = { relevantFact: modifiedData[j].close };
        Object.assign(modifiedData[j], dataRelevant[i], objaux);
        break;
      }
    }
  }
  for (let i = 0; i < sentiData.data.length; i++) {
    for (let j = 0; j < modifiedData.length; j++) {
      if (modifiedData[j].date == sentiData.data[i].date) {
        const objaux = { sentiment: sentiData.data[i].score };
        Object.assign(modifiedData[j], objaux);
        break;
      }
    }
  }
  return modifiedData;
}
function week() {
  const data = preProcessing().slice(-7); // Escolhe apenas os últimos 7 dados
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const checkTwitter = document.getElementById('CheckTwitter') as HTMLInputElement;
    const checkNews = document.getElementById('CheckNews') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitter !== null && checkNews !== null) {
      if (checkNews.checked && checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNews.checked) {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={true} />;
      }
    }
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
    const checkTwitter = document.getElementById('CheckTwitter') as HTMLInputElement;
    const checkNews = document.getElementById('CheckNews') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitter !== null && checkNews !== null) {
      if (checkNews.checked && checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNews.checked) {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={true} />;
      }
    }
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
    const checkTwitter = document.getElementById('CheckTwitter') as HTMLInputElement;
    const checkNews = document.getElementById('CheckNews') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitter !== null && checkNews !== null) {
      if (checkNews.checked && checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNews.checked) {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={true} />;
      }
    }
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
    const checkTwitter = document.getElementById('CheckTwitter') as HTMLInputElement;
    const checkNews = document.getElementById('CheckNews') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitter !== null && checkNews !== null) {
      if (checkNews.checked && checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNews.checked) {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitter.checked) {
        newGraph = <Graph data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <Graph data={data} hideTwitter={true} hideNews={true} />;
      }
    }
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('all')[0];
    button.setAttribute('id', style.Active);
  }
}

function checkboxFunction() {
  const active = document.getElementById(style.Active);
  if (active !== null) {
    if (active.classList[0] == 'week') {
      week();
    } else if (active.classList[0] == 'month') {
      month();
    } else if (active.classList[0] == 'year') {
      year();
    } else {
      all();
    }
  }
}
const GraphContainer: React.FC = () => {
  const data = preProcessing();
  return (
    <div className={style.Graph}>
      <div className={style.GraphContainer}>
        <span className={style.Title}>Sentimento Ibovepa</span>
        <div className={style.aux} id="aux">
          <Graph data={data} hideTwitter={false} hideNews={false} />
        </div>
        <div className={style.Forms}>
          <div className={style.Buttons}>
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
          <div className={style.CheckBoxes}>
            <div className={style.CheckBox}>
              <input
                type="checkbox"
                name="Twitter"
                id="CheckTwitter"
                onChange={checkboxFunction}
                defaultChecked={true}
              />
              <label htmlFor="Twitter">Twitter</label>
            </div>
            <div className={style.CheckBox}>
              <input
                type="checkbox"
                name="News"
                id="CheckNews"
                onChange={checkboxFunction}
                defaultChecked={true}
              />
              <label htmlFor="Twitter">Notícias</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;
