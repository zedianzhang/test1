import classes from "../style/HeadInfo.module.css";
function HeadInfo(){
    return (
      <div className={classes.header}>
        <h1 style={{ marginBottom: "0", position: "relative" }}>
          Summary: Aegle vs. Stop-Loss
        </h1>
        <p style={{ marginTop: "1%", position: "relative" }}>
          Simulation designed by actuaries, approved by CFOs; average of 100,000
          trials
        </p>
      </div>
    );
}
export default HeadInfo;