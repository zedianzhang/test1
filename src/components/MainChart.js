import BotLegend from "./BotLegend";
import Chart from "./Chart";
import HeadInfo from "./HeadInfo";
import classes from "../style/MainChart.module.css";
import SecInfo from "./SecInfo";
import {TiArrowShuffle} from "react-icons/ti";
function MainChart(){
    return (
      <div className={classes.chartGrid}>
        <HeadInfo/>
        <SecInfo/>
        <div className={classes.chartinfor}>
          <div className={classes.topLegend}>
            <div style={{ display: "flex", flexBasis: "25%" }}>
              <button className={classes.yearBtn}>Yearly</button>
              <button className={classes.CumBtn}>Cumulative</button>
            </div>
            <div style={{ flexBasis: "50%", alignSelf: "center" }}>
              <button className={classes.nextBtn}>
                <TiArrowShuffle/>
                {" Next Simulation"}
              </button>
            </div>
            <div className={classes.yearSelector}>
              <button className={classes.threeBtn}>3 years</button>
              <button className={classes.fiveBtn}>5 years</button>
              <button className={classes.tenBtn}>10 years</button>
            </div>
          </div>
          <Chart className={classes.midChart} />
         <BotLegend/>
        </div>
      </div>
    );
}
export default MainChart;