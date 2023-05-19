'use client';
// import style from '../styles/Graph.module.css';
import style from '../styles/RelevantFacts.module.css';

import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from 'recharts';

interface Graph {
  data: any;
  hideTwitter: boolean;
  hideNews: boolean;
}

function changeRelevantFact(title: string, date: string, description: string) {
  console.log(title);
  const factTitle = document.getElementsByClassName(style.FactTitle)[0];
  const factDate = document.getElementsByClassName(style.FactDate)[0];
  const factDescription = document.getElementsByClassName(style.FactDescription)[0];
  if (factTitle && factDate && factDescription) {
    factTitle.textContent = title;
    factDate.textContent = date;
    factDescription.textContent = description;
  }
}

const Graph: React.FC<Graph> = ({ data, hideTwitter, hideNews }) => {
  // Customização do ToolTip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (payload[payload.length - 1].dataKey == 'relevantFact') {
        console.log(payload[payload.length - 1].payload);
        changeRelevantFact(
          payload[payload.length - 1].payload.relevantTitle,
          payload[payload.length - 1].payload.relevantDate,
          payload[payload.length - 1].payload.relevantDescription
        );
        if (payload.length > 3) {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: '#121212',
                padding: '10%',
                width: '100%',
                borderRadius: '10px',
                fontFamily: 'sans-serif',
                fontSize: '18px',
              }}
            >
              <p className="label">{`Data: ${label}`}</p>
              <p className="desc">
                {`Maior Alta: `}
                <span style={{ color: '#109EF5' }}>{`${payload[2].value}`}</span>
              </p>
              <p className="desc">
                {`Volume negociado: `}
                <span style={{ color: '#1FCB4F' }}>{`${payload[0].value}`}</span>
              </p>
              <p className="desc">
                {`Valor de fechamento: `}
                <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
              </p>
            </div>
          );
        } else if (payload.length > 2) {
          if (payload[1].dataKey == 'close') {
            return (
              <div
                className="custom-tooltip"
                style={{
                  backgroundColor: '#121212',
                  padding: '10%',
                  width: '100%',
                  borderRadius: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '18px',
                }}
              >
                <p className="label">{`Data: ${label}`}</p>
                <p className="desc">
                  {`Valor de fechamento: `}
                  <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
                </p>
                <p className="desc">
                  {`Volume negociado: `}
                  <span style={{ color: '#1FCB4F' }}>{`${payload[0].value}`}</span>
                </p>
              </div>
            );
          } else {
            return (
              <div
                className="custom-tooltip"
                style={{
                  backgroundColor: '#121212',
                  padding: '10%',
                  width: '100%',
                  borderRadius: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '18px',
                }}
              >
                <p className="label">{`Data: ${label}`}</p>
                <p className="desc">
                  {`Valor de fechamento: `}
                  <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
                </p>
                <p className="desc">
                  {`Maior Alta: `}
                  <span style={{ color: '#109EF5' }}>{`${payload[1].value}`}</span>
                </p>
              </div>
            );
          }
        } else {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: '#121212',
                padding: '10%',
                width: '100%',
                borderRadius: '10px',
                fontFamily: 'sans-serif',
                fontSize: '18px',
              }}
            >
              <p className="label">{`Data: ${label}`}</p>
              <p className="desc">
                {`Valor de fechamento: `}
                <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
              </p>
            </div>
          );
        }
      } else if (payload.length > 2) {
        return (
          <div
            className="custom-tooltip"
            style={{
              backgroundColor: '#121212',
              padding: '10%',
              width: '100%',
              borderRadius: '10px',
              fontFamily: 'sans-serif',
              fontSize: '18px',
            }}
          >
            <p className="label">{`Data: ${label}`}</p>
            <p className="desc">
              {`Valor de fechamento: `}
              <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
            </p>
            <p className="desc">
              {`Volume negociado: `}
              <span style={{ color: '#1FCB4F' }}>{`${payload[0].value}`}</span>
            </p>
            <p className="desc">
              {`Maior Alta: `}
              <span style={{ color: '#109EF5' }}>{`${payload[2].value}`}</span>
            </p>
          </div>
        );
      } else if (payload.length > 1) {
        if (payload[1].dataKey == 'volume') {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: '#121212',
                padding: '10%',
                width: '100%',
                borderRadius: '10px',
                fontFamily: 'sans-serif',
                fontSize: '18px',
              }}
            >
              <p className="label">{`Data: ${label}`}</p>
              <p className="desc">
                {`Valor de fechamento: `}
                <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
              </p>
              <p className="desc">
                {`Volume negociado: `}
                <span style={{ color: '#1FCB4F' }}>{`${payload[0].value}`}</span>
              </p>
            </div>
          );
        } else {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: '#121212',
                padding: '10%',
                width: '100%',
                borderRadius: '10px',
                fontFamily: 'sans-serif',
                fontSize: '18px',
              }}
            >
              <p className="label">{`Data: ${label}`}</p>
              <p className="desc">
                {`Valor de fechamento: `}
                <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
              </p>
              <p className="desc">
                {`Volume negociado: `}
                <span style={{ color: '#1FCB4F' }}>{`${payload[0].value}`}</span>
              </p>
              <p className="desc">
                {`Maior Alta: `}
                <span style={{ color: '#109EF5' }}>{`${payload[1].value}`}</span>
              </p>
            </div>
          );
        }
      } else {
        return (
          <div
            className="custom-tooltip"
            style={{
              backgroundColor: '#121212',
              padding: '10%',
              width: '100%',
              borderRadius: '10px',
              fontFamily: 'sans-serif',
              fontSize: '18px',
            }}
          >
            <p className="label">{`Data: ${label}`}</p>
            <p className="desc">
              {`Valor de fechamento: `}
              <span style={{ color: '#FF2923' }}>{`${payload[1].value}`}</span>
            </p>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid stroke="#141414" />
        <XAxis
          dataKey="date"
          stroke="#DEDCDE"
          tickLine={false}
          fontWeight={'bold'}
          minTickGap={60}
        />
        <YAxis yAxisId="left" stroke="#DEDCDE" hide={true} />
        <YAxis yAxisId="right" orientation="right" stroke="#DEDCDE" hide={true} />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="close"
          stroke="#FF2923"
          dot={false}
          name="Fechamento"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="volume"
          stroke="#1FCB4F"
          dot={false}
          hide={hideTwitter}
          name="Volume"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="high"
          stroke="#109EF5"
          dot={false}
          hide={hideNews}
          name="Maior Alta"
        />
        <Scatter yAxisId="left" fill="#F0DD13" dataKey="relevantFact" name="Fato Relevante" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Graph;
