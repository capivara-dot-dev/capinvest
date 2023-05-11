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
const SimpleLineChart: React.FC<Graph> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 25,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" />
        <XAxis dataKey="name" stroke="#DEDCDE" />
        <YAxis yAxisId="left" stroke="#DEDCDE" />
        <YAxis yAxisId="right" orientation="right" stroke="#DEDCDE" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Ibovespa"
          stroke="#008FFF"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="sentiment"
          stroke="#44F55C"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
