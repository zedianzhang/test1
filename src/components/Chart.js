import classes from "../style/Chart.module.css";
import React from "react";
import {
  Line,
  Area,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Scatter,
  ResponsiveContainer,
} from "recharts";
// dummy data
const data = [
  {
    name: "Year 1",
    uv: 2400,
    pv: 1200,
    amt: 2400,
  },
  {
    name: "Year 2",
    uv: 3200,
    pv: 1300,
    amt: 3000,
  },
  {
    name: "Year 3",
    uv: 3900,
    pv: 1400,
    amt: 5000,
  },
  {
    name: "Year 4",
    uv: 5400,
    pv: 1500,
    amt: 4700,
  },
  {
    name: "Year 5",
    uv: 7000,
    pv: 1600,
    amt: 5000,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {

    return (
      <div className={classes.customTooltip}>
        <p className="label">{`${label }: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
/**
 * render the simulation chart with customized axis and lines.
 */
export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    return (
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3 " horizontal={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            interval={"0"}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            isAnimationActive={false}
            dataKey="amt"
            type="monotone"
            stroke="#d9ab57"
            fillOpacity={1}
            strokeWidth="4"
            fill="url(#colorUv)"
          />
          <Line
            strokeWidth={this.data().Total ? 0 : 4} // hide the line by setting width 0
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={false}
            isAnimationActive={false}
            strokeDasharray="4 4"
            dot={false}
          />
          <Scatter dataKey="amt" fill="#d9ab57" isAnimationActive={false} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0.8">
              <stop offset="5%" stopColor="#d9ab57" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#d9ab57" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Line
            strokeWidth={this.data().Loss ? 0 : 4}
            isAnimationActive={false}
            dataKey="pv"
            stroke="#4F95F4"
            dot={false}
            activeDot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
