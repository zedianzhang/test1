import classes from "../style/Chart.module.css";
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
  CartesianAxis,
} from "recharts";
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
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
function Chart() {
  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3 "
          // verticalPoints={[400, 800, 1200, 1600]}
          horizontal={false}
        />
        <XAxis
          // ticks={[1,322,555]}
          // minTickGap={1000}
          dataKey="name"
          axisLine={false}
          // padding={{ left: 20, right: 20 }}
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
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={false}
          isAnimationActive={false}
          strokeDasharray="4 4"
          strokeWidth={3}
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
          strokeWidth={3}
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
export default Chart;
