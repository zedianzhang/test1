import classes from "../style/MainNavigation.module.css";
import {
  BackBlock,
  SwitchBlock,
  InfoBlock,
  OptionBlock,
} from "./Block.js";
function MainNavigation(){
    return (
      <div className={classes.sideGrid}>
        <BackBlock />
        <SwitchBlock />
        <hr />
        <InfoBlock />
        <OptionBlock />
      </div>
    );
};
export default MainNavigation;