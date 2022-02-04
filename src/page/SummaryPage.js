import MainNavigation from "../components/MainNavigation";

import classes from "./SummaryPage.module.css"
import KeyOutput from "../components/KeyOutput";
import MainChart from "../components/MainChart";
/**
 * 
 * @returns three components in each page left side navigation and center chart and right key points  
 */
function SummaryPage(){
    return (
        <div className={classes.mainGrid}>
            <MainNavigation />
            <MainChart />
            <KeyOutput />
        </div>

    );
}
export default SummaryPage;