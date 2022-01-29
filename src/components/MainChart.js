import Chart from "./Chart";
import classes from "./MainChart.module.css"
function MainChart(){
    return (
      <div className={classes.chartGrid}>
        <div className={classes.header}>
          <h1 style={{ marginBottom: "0", position: "relative" }}>
            Summary: Aegle vs. Stop-Loss
          </h1>
          <p style={{ marginTop: "1%", position: "relative" }}>
            Simulation designed by actuaries, approved by CFOs; average of
            100,000 trials
          </p>
        </div>
        <div className={classes.inforP}>
          Compared to stop-loss priced at a 75% loss ratio, Aegle would have
          saved this group 80% in the first year, and X% over 5 years, and with
          no lasers or exclusions of any sort!
        </div>
        <div className={classes.chartinfor}>
          <div className={classes.topLegend}>
            <div style={{ display: "flex", flexBasis: "25%" }}>
              <button className={classes.yearBtn}>Yearly</button>
              <button className={classes.CumBtn}>Cumulative</button>
            </div>
            <div style={{ flexBasis: "50%", alignSelf: "center" }}>
              <button className={classes.nextBtn}>
                <svg width="1rem" height="1rem" fill="currentColor">
                  <path d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
                {" Next Simulation"}
              </button>
            </div>
            <div className={classes.yearSelector}>
              <button className={classes.threeBtn}>3 years</button>
              <button className={classes.fiveBtn}>5 years</button>
              <button className={classes.tenBtn}>10 years</button>
            </div>
          </div>
          <Chart className={classes.midChart} />
          <div className={classes.botLegend}>
            <button>
              <svg
                width="1rem"
                height="1.1rem"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
                
                className={classes.switchIcon}
              >
                <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
              </svg>
              {" High-cost Claims"}
            </button>
            <button>
              <svg width="1rem" height="1rem" fill="currentColor">
                <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
              </svg>
              {" Total Spend, Stop-Loss"}
            </button>
            <button>
              <svg width="1rem" height="1rem" fill="currentColor">
                <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
              </svg>
              {" Total Spend, Aegle"}
            </button>
            <button>
              <svg width="1rem" height="1rem" fill="currentColor">
                <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
              </svg>
              {" Expected Hight-cost Claims"}
            </button>
          </div>
        </div>
      </div>
    );
}
export default MainChart;