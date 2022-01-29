import classes from "./Chart.module.css";
import switcher from "./switch-svgrepo-com.svg";
import {
  LineChart,
  Line,
  Area,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const uv = "High-cost Clains";
const data = [
  {
    name: "Year 1",
    uv: 4000,
    pv: 2400,
    amt: 5000,
    temperature: 2400,
  },
  {
    name: "Year 2",
    uv: 5000,
    pv: 2500,
    amt: 7000,
    temperature: 3000,
  },
  {
    name: "Year 3",
    uv: 6000,
    pv: 2500,
    amt: 7000,
    temperature: 2000 ,
  },
  {
    name: "Year 4",
    uv: 7000,
    pv: 2500,
    amt: 8000,
    temperature: 2000,
  },
  {
    name: "Year 5",
    uv: 8000,
    pv: 2500,
    amt: 9000,
    temperature: 1890,
  },
];
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <div className={classes.switchIcon}>
      {payload.map((entry, index) => (
        <button className={classes.btn} key={`item-${index}`}>
          <img src={switcher} alt="switcher"></img>
          <div style={{ padding: "1px" }}>
            {
              //    entry.value
              index === 0
                ? "High-cost Claims"
                : index === 1
                ? "Total Spend, Stop-Loss"
                : index === 2
                ? "Total Spend, Aegle"
                : null
            }
          </div>
        </button>
      ))}
    </div>
  );
};
function Chart() {
  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray=""
          verticalPoints={[400, 800, 1200, 1600]}
          horizontal={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          padding={{ left: 20, right: 20 }}
          interval="preserveStartEnd"
        />
        <YAxis axisLine={false} />
        <Tooltip active={true} />
        {/* <Legend content={renderLegend} align={"center"} /> */}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Area
          dataKey="temperature"

          isAnimationActive={true}
          type="basis"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
export default Chart;
