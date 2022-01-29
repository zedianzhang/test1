import classes from "./KeyOutput.module.css";
function KeyOutput() {
  return (
    <div className={classes.keyOutputGrid}>
      <div className={classes.keyText}>
        <h2>Key Outputs</h2>
      </div>
      <div className={classes.winnerText}>
        <p>Simulation winner</p>
        <h2>Aegle</h2>
      </div>
      <div className={classes.averageSaving}>
        <p>Year 1 Average Savings</p>
        <h2>32%</h2>
      </div>
      <div className={classes.averageSaving}>
        <p>Year 5 Cumulative Savings</p>
        <h2>32%</h2>
      </div>
      <div className={classes.lossRatio}>
        <p>Cumulative Stop-loss Loss Ratio</p>
        <h2>74%</h2>
        <button>
          Learn more about it    &gt;
        </button>
      </div>
    </div>
  );
}
export default KeyOutput;