import Switch from "./Switch";
import React from "react";
import classes from "../style/BotLegend.module.css";
/**
 *
 * @param {changeState,state} props get copy of the state from parent
 * four line switcher toggle colored differently
 * for each line in the chart
 * */
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.changeState=props.setState;
  }

  render() {
    return (
      <div className={classes.botLegend}>
        <button>
          <Switch
            background="orange"
            isOn={this.state.Claims}
            handleToggle={() => ({})}
          />
          {" High-cost Claims"}
        </button>
        <button>
          <Switch
            background="darkBlue"
            isOn={this.state.Loss}
            //handle toggle for state in parent and child
            handleToggle={() => {
              this.changeState({ Loss: !this.state.Loss });
              this.setState({ Loss: !this.state.Loss});}}
          />
          {" Total Spend, Stop-Loss"}
        </button>
        <button>
          <Switch
            background="blue"
            isOn={this.state.Total}
            handleToggle={() => {this.changeState({ Total: !this.state.Total });
            this.setState({ Total: !this.state.Total });}}
          />
          {" Total Spend, Aegle"}
        </button>
        <button>
          <Switch
            background="grey"
            isOn={this.state.HighClaims}
            handleToggle={() =>
              {this.changeState({ HighClaims: !this.state.HighClaims });
            this.setState({ HighClaims: !this.state.HighClaims });}
            }
          />
          {" Expected Hight-cost Claims"}
        </button>
      </div>
    );
  }
}
