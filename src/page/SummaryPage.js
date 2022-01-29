import MainNavigation from "../components/MainNavigation";

import MainGraph from "../components/MainGraph";
import classes from "./SummaryPage.module.css"
import KeyOutput from "../components/KeyOutput";
function SummaryPage(){
    return (
        <div className={classes.mainGrid}>
            <MainNavigation />
            <MainGraph />
            <KeyOutput />
        </div>

    );
}
export default SummaryPage;