import React from 'react';
import './App.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart = ({data, screenWidth}) => {
  const topFive = [];
  const isMobile = screenWidth <= 420;
  data.forEach((item, index) => {
    if (index < 5) {
      topFive.push({
        name: isMobile ? item.info['iso-country-code'] : item.country,
        views: item.statistics.viewCount /1000000,
        amt: item.statistics.viewCount /1000000
      });
    }
  })
  return (
  <BarChart
    width={screenWidth-32}
    height={screenWidth/2}
    data={topFive}
    margin={{
      top: 5, right: 20, left: isMobile ? -20: 20, bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" stroke="black"/>
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="views" fill="#82ca9d" />
  </BarChart>
  );
};

export default Chart;
