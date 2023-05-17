'use client';
// import style from '../styles/Graph.module.css';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Graph {
  data: any;
}

const GraphStock: React.FC<Graph> = ({ data }) => {
  // Customização do ToolTip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
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
            {`Volume negociado: `}
            <span style={{ color: '#44F55C' }}>{`${payload[1].value}`}</span>
          </p>
          <p className="desc">
            {`Valor de fechamento: `}
            <span style={{ color: '#FF2923' }}>{`${payload[0].value}`}</span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
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
        <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#1FCB4F" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphStock;
