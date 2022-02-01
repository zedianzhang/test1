import Switch from "./Switch";
import classes from "../style/BotLegend.module.css";
function BotLegend() {
  return (
    <div className={classes.botLegend}>
      <button>
        <Switch background="orange" />
        {" High-cost Claims"}
      </button>
      <button>
        <Switch background="darkBlue" />
        {" Total Spend, Stop-Loss"}
      </button>
      <button>
        <Switch background="blue" />
        {" Total Spend, Aegle"}
      </button>
      <button>
        <Switch background="grey" />
        {" Expected Hight-cost Claims"}
      </button>
    </div>
  );
}
export default BotLegend;
