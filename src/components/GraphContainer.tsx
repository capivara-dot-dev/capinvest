'use client';

import Graph from './Graph';
import style from '../styles/GraphContainer.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

let data = [
  {
    name: '1 Jan',
    sentiment: 0.9,
    Ibovespa: 2400,
    amt: 2400,
  },
  {
    name: '1 Fev',
    sentiment: 0.1,
    Ibovespa: 1398,
    amt: 2210,
  },
  {
    name: '1 Mar',
    sentiment: 0.5,
    Ibovespa: 9800,
    amt: 2290,
  },
  {
    name: '1 Abr',
    sentiment: 0.4,
    Ibovespa: 3908,
    amt: 2000,
  },
  {
    name: '1 Mai',
    sentiment: 0.8,
    Ibovespa: 4800,
    amt: 2181,
  },
  {
    name: '1 Jun',
    sentiment: 0.1,
    Ibovespa: 3800,
    amt: 2500,
  },
  {
    name: '1 Jul',
    sentiment: 0.4,
    Ibovespa: 4300,
    amt: 2100,
  },
];

function day() {
  data = [
    {
      name: '1 Jan',
      sentiment: 0.9,
      Ibovespa: 2400,
      amt: 2400,
    },
    {
      name: '1 Fev',
      sentiment: 0.1,
      Ibovespa: 1398,
      amt: 2210,
    },
    {
      name: '1 Mar',
      sentiment: 0.5,
      Ibovespa: 9800,
      amt: 2290,
    },
  ];
  const graph = document.getElementsByClassName('recharts-responsive-container')[0];
  if (graph !== null) {
    const aux = document.getElementById('aux');
    const newGraph = <Graph data={data} />;
    ReactDOM.render(newGraph, aux);
    const active = document.getElementById(style.Active);
    active?.setAttribute('id', '');
    const button = document.getElementsByClassName('day')[0];
    button.setAttribute('id', style.Active);
  }
}

function month() {
  data = [
    {
      name: '1 Jan',
      sentiment: 0.9,
      Ibovespa: 2400,
      amt: 2400,
    },
    {
      name: '1 Fev',
      sentiment: 0.1,
      Ibovespa: 1398,
      amt: 2210,
    },
    {
      name: '1 Mar',
      sentiment: 0.5,
      Ibovespa: 9800,
      amt: 2290,
    },
    {
      name: '1 Abr',
      sentiment: 0.4,
      Ibovespa: 3908,
      amt: 2000,
    },
  ];
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
  data = [
    {
      name: '1 Jan',
      sentiment: 0.9,
      Ibovespa: 2400,
      amt: 2400,
    },
    {
      name: '1 Fev',
      sentiment: 0.1,
      Ibovespa: 1398,
      amt: 2210,
    },
    {
      name: '1 Mar',
      sentiment: 0.5,
      Ibovespa: 9800,
      amt: 2290,
    },
    {
      name: '1 Abr',
      sentiment: 0.4,
      Ibovespa: 3908,
      amt: 2000,
    },
    {
      name: '1 Mai',
      sentiment: 0.8,
      Ibovespa: 4800,
      amt: 2181,
    },
  ];
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
  data = [
    {
      name: '1 Jan',
      sentiment: 0.9,
      Ibovespa: 2400,
      amt: 2400,
    },
    {
      name: '1 Fev',
      sentiment: 0.1,
      Ibovespa: 1398,
      amt: 2210,
    },
    {
      name: '1 Mar',
      sentiment: 0.5,
      Ibovespa: 9800,
      amt: 2290,
    },
    {
      name: '1 Abr',
      sentiment: 0.4,
      Ibovespa: 3908,
      amt: 2000,
    },
    {
      name: '1 Mai',
      sentiment: 0.8,
      Ibovespa: 4800,
      amt: 2181,
    },
    {
      name: '1 Jun',
      sentiment: 0.1,
      Ibovespa: 3800,
      amt: 2500,
    },
    {
      name: '1 Jul',
      sentiment: 0.4,
      Ibovespa: 4300,
      amt: 2100,
    },
  ];
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
  return (
    <div className={style.GraphContainer}>
      <span className={style.Title}>Gráfico em Tempo Real</span>
      <div className={style.aux} id="aux">
        <Graph data={data} />
      </div>
      <div className={style.Forms}>
        <button onClick={day} id={style.Active} className="day">
          1D
        </button>
        <button onClick={month} className="month">
          1M
        </button>
        <button onClick={year} className="year">
          1A
        </button>
        <button onClick={all} className="all">
          Todos
        </button>
      </div>
    </div>
  );
};

export default GraphContainer;
