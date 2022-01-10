import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.scss"

const data = [
   {
        name: '18-24',
        uv: 17.47,
        pv: 1400,
        fill: '#1F1D2B',
   },
   {
    name: '18-24',
    uv: 7.47,
    pv: 1400,
    fill: '#FF7CA3',
  },
  {
    name: '25-29',
    uv: 10.69,
    pv: 4567,
    fill: '#FFB572',
  },
  {
    name: '30-34',
    uv: 8.69,
    pv: 1398,
    fill: '#65B0F6',
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
        
      <ResponsiveContainer  className='chart' width="100%" height="100%">
        <RadialBarChart className='aylana' cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideBottomLeft', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={20} layout="vertical" verticalAlign="middle"  />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
