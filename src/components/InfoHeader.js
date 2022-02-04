import classes from "../style/InfoHeader.module.css";
/**
 * two header massage on the top of the chart
 */
export default function InfoHeader() {
  return (
    <>
      <div className={classes.header}>
        <h1 style={{ marginBottom: "0", position: "relative" }}>
          Summary: Aegle vs. Stop-Loss
        </h1>
        <p style={{ marginTop: "1%", position: "relative" }}>
          Simulation designed by actuaries, approved by CFOs; average of 100,000
          trials
        </p>
      </div>
      <div className={classes.inforP}>
        Compared to stop-loss priced at a 75% loss ratio, Aegle would have saved
        this group 80% in the first year, and X% over 5 years, and with no
        lasers or exclusions of any sort!
      </div>
    </>
  );
}
