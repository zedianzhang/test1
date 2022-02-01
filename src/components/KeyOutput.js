import classes from "../style/KeyOutput.module.css";
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
        <p>
          Year 1 <br />
          Average Savings

        </p>
        <h2>32%</h2>
      </div>
      <div className={classes.averageSaving}>
        <p>
          Year 5 <br />
          Cumulative Savings
        </p>
        <h2>32%</h2>
      </div>
      <div className={classes.lossRatio}>
        <p>
          Cumulative Stop-loss <br />
          Loss Ratio
        </p>
        <h2>74%</h2>
        <button>Learn more about it &gt;</button>
      </div>
    </div>
  );
}
export default KeyOutput;
