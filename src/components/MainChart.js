import BotLegend from "./BotLegend";
import Chart from "./Chart";
import classes from "../style/MainChart.module.css";
import React from "react";
import { TiArrowShuffle } from "react-icons/ti";
import InfoHeader from "./InfoHeader";
/**
 * four part in center chart
 * top information
 * second information bar
 * top switcher for control the range of the chart
 * simulation chart
 * bot switcher for control line in the chart
 */
export default class MainChart extends React.Component {
  constructor(props) {
    super(props);
    //control the state in parent and pass it to child 
    this.state = {
      Claims: false,
      Loss: false,
      Total: false,
      HighClaims: false,
    };
  }
  /**
   * let switch toggle to update state
   * @param {state} newValue new state from switch toggle
   */
  changeState(newValue) {
    // this.setState({[Object.keys(newValue)[0]]:newValue[0]}
    // );
    this.setState( newValue );
  }
  getState(){
    return this.state;
  }
  render() {
    return (
      <div className={classes.chartGrid}>
        <InfoHeader/>
        <div className={classes.chartinfor}>
          <div className={classes.topLegend}>
            <div style={{ display: "flex", flexBasis: "25%" }}>
              <button className={classes.yearBtn}>Yearly</button>
              <button className={classes.CumBtn}>Cumulative</button>
            </div>
            <div style={{ flexBasis: "50%", alignSelf: "center" }}>
              <button className={classes.nextBtn}>
                <TiArrowShuffle />
                {" Next Simulation"}
              </button>
            </div>
            <div className={classes.yearSelector}>
              <button className={classes.threeBtn}>3 years</button>
              <button className={classes.fiveBtn}>5 years</button>
              <button className={classes.tenBtn}>10 years</button>
            </div>
          </div>
          <Chart className={classes.midChart} data={this.getState.bind(this)} />
          <BotLegend
            state={this.state}
            setState={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}
