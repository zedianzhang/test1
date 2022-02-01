import classes from "../style/SecInfo.module.css";
function SecInfo(){
    return (
      <div className={classes.inforP}>
        Compared to stop-loss priced at a 75% loss ratio, Aegle would have saved
        this group 80% in the first year, and X% over 5 years, and with no
        lasers or exclusions of any sort!
      </div>
    );
}
export default SecInfo;