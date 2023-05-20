'use client';

import GraphPetro from './GraphPetro';
import style from '../styles/GraphContainerPetro.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import dataHistorical from '../app/data/historicalData.json';
import dataRelevantFacts from '../app/data/relevantFactsPetro.json';
import sentimentalData from '../app/data/sentimentalData.json';

function preProcessingPetro() {
  const monthPetro = [
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
      monthPetro[numberMonthSent]
    } ${sentiData.data[i].date.substring(2, 4)}`;
  }
  for (let i = 0; i < modifiedData.length; i++) {
    const numberMonthPetro = Number(modifiedData[i].date.substring(5, 7)) - 1;
    modifiedData[i].date = `${modifiedData[i].date.substring(8, 10)} ${
      monthPetro[numberMonthPetro]
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
function weekPetro() {
  const data = preProcessingPetro().slice(-7); // Escolhe apenas os últimos 7 dados
  const graph = document.getElementsByClassName('recharts-responsive-container')[1];
  if (graph !== null) {
    const auxPetro = document.getElementById('auxPetro');
    const checkTwitterPetro = document.getElementById('CheckTwitterPetro') as HTMLInputElement;
    const checkNewsPetro = document.getElementById('CheckNewsPetro') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitterPetro !== null && checkNewsPetro !== null) {
      if (checkNewsPetro.checked && checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNewsPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={true} />;
      }
    }
    ReactDOM.render(newGraph, auxPetro);
    const active = document.getElementById(style.ActivePetro);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('weekPetro')[0];
    button.setAttribute('id', style.ActivePetro);
  }
}

function monthPetro() {
  const dataNotProcessed = preProcessingPetro().slice(-30);
  const lastDate = preProcessingPetro().slice(-1);
  const data = dataNotProcessed.filter(
    (item: any) => item.date.substring(3, 6) == lastDate[0].date.substring(3, 6)
  ); // Escolhe apenas os dados que tem são do mesmo mês da última medição
  const graph = document.getElementsByClassName('recharts-responsive-container')[1];
  if (graph !== null) {
    const auxPetro = document.getElementById('auxPetro');
    const checkTwitterPetro = document.getElementById('CheckTwitterPetro') as HTMLInputElement;
    const checkNewsPetro = document.getElementById('CheckNewsPetro') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitterPetro !== null && checkNewsPetro !== null) {
      if (checkNewsPetro.checked && checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNewsPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={true} />;
      }
    }
    ReactDOM.render(newGraph, auxPetro);
    const active = document.getElementById(style.ActivePetro);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('monthPetro')[0];
    button.setAttribute('id', style.ActivePetro);
  }
}

function yearPetro() {
  const dataNotProcessed = preProcessingPetro().slice(-365);
  const lastDate = preProcessingPetro().slice(-1);
  const data = dataNotProcessed.filter(
    (item: any) => item.date.slice(-2) == lastDate[0].date.slice(-2)
  ); // Escolhe apenas os dados que tem são do mesmo ano da última medição
  const graph = document.getElementsByClassName('recharts-responsive-container')[1];
  if (graph !== null) {
    const auxPetro = document.getElementById('auxPetro');
    const checkTwitterPetro = document.getElementById('CheckTwitterPetro') as HTMLInputElement;
    const checkNewsPetro = document.getElementById('CheckNewsPetro') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitterPetro !== null && checkNewsPetro !== null) {
      if (checkNewsPetro.checked && checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNewsPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={true} />;
      }
    }
    ReactDOM.render(newGraph, auxPetro);
    const active = document.getElementById(style.ActivePetro);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('yearPetro')[0];
    button.setAttribute('id', style.ActivePetro);
  }
}

function allPetro() {
  const data = preProcessingPetro(); // Escolhe todos os dados
  const graph = document.getElementsByClassName('recharts-responsive-container')[1];
  if (graph !== null) {
    const auxPetro = document.getElementById('auxPetro');
    const checkTwitterPetro = document.getElementById('CheckTwitterPetro') as HTMLInputElement;
    const checkNewsPetro = document.getElementById('CheckNewsPetro') as HTMLInputElement;
    let newGraph = <></>;
    if (checkTwitterPetro !== null && checkNewsPetro !== null) {
      if (checkNewsPetro.checked && checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={false} />;
      } else if (checkNewsPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={false} />;
      } else if (checkTwitterPetro.checked) {
        newGraph = <GraphPetro data={data} hideTwitter={false} hideNews={true} />;
      } else {
        newGraph = <GraphPetro data={data} hideTwitter={true} hideNews={true} />;
      }
    }
    ReactDOM.render(newGraph, auxPetro);
    const active = document.getElementById(style.ActivePetro);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('allPetro')[0];
    button.setAttribute('id', style.ActivePetro);
  }
}

function checkboxFunction() {
  const active = document.getElementById(style.ActivePetro);
  if (active !== null) {
    if (active.classList[0] == 'weekPetro') {
      weekPetro();
    } else if (active.classList[0] == 'monthPetro') {
      monthPetro();
    } else if (active.classList[0] == 'yearPetro') {
      yearPetro();
    } else {
      allPetro();
    }
  }
}
const GraphContainerPetro: React.FC = () => {
  const data = preProcessingPetro();
  return (
    <div className={style.Graph}>
      <div className={style.GraphContainer}>
        <span className={style.Title}>Sentimento Petrobras</span>
        <div className={style.auxPetro} id="auxPetro">
          <GraphPetro data={data} hideTwitter={false} hideNews={false} />
        </div>
        <div className={style.Forms}>
          <div className={style.Buttons}>
            <button onClick={weekPetro} className="weekPetro">
              1S
            </button>
            <button onClick={monthPetro} className="monthPetro">
              1M
            </button>
            <button onClick={yearPetro} className="yearPetro">
              1A
            </button>
            <button onClick={allPetro} id={style.ActivePetro} className="allPetro">
              Todos
            </button>
          </div>
          <div className={style.CheckBoxes}>
            <div className={style.CheckBox}>
              <input
                type="checkbox"
                name="TwitterPetro"
                id="CheckTwitterPetro"
                onChange={checkboxFunction}
                defaultChecked={true}
              />
              <label htmlFor="TwitterPetro">Twitter</label>
            </div>
            <div className={style.CheckBox}>
              <input
                type="checkbox"
                name="NewsPetro"
                id="CheckNewsPetro"
                onChange={checkboxFunction}
                defaultChecked={true}
              />
              <label htmlFor="NewsPetro">Notícias</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContainerPetro;
