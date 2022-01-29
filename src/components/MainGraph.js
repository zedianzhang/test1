import classes  from "./MainGraph.module.css";
import MainChart from "./MainChart.js";
function MainGraph(){
    return (
      <div className={classes.centerChartGrid}>
        <MainChart />
      </div>
    );
}
export default MainGraph;