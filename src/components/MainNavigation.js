import classes from "../style/MainNavigation.module.css";
import {
  BackBlock,
  SwitchBlock,
  InfoBlock,
  OptionBlock,
} from "./Block.js";
/**
 * break the left side navigation bear into 4 block
 */
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