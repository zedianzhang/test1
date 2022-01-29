import classes from "./Block.module.css";

function BackBlock() {
  return <p className={classes.block1}>&lt; Back to Aegle homepage</p>;
}

function SwitchBlock() {
  return (
    <div className={classes.block2}>
      <button className={classes.subtn}>
        <svg width="1rem" height="1rem" fill="currentColor">
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
        </svg>

        {" Summary "}
      </button>
      <button className={classes.sigtn}>
        <div
          style={{ display: "inline-block", width: "90%"}}
        >
          <svg width="1rem" height="1rem" fill="currentColor">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          {" Single Simulation "}
        </div>
        <div
          dir="rtl"
          style={{ display: "inline-block", width: "10%" }}
        >
          &#124;
        </div>
      </button>
    </div>
  );
}
function InfoBlock() {
  return (
    <div className={classes.block3}>
      <div className={classes.topBlock}>
        <button className={classes.editBtn}>Edit Simulation Parameters</button>
      </div>
      <div className={classes.botBlock}>
        <button>
          <svg width="1rem" height="1rem" fill="currentColor">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          {" Aegle vs. Stop-loss"}
        </button>
        <button>
          <svg width="1rem" height="1rem" fill="currentColor">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          {" Aegle Experts"}
        </button>
        <button>
          <svg
            width="1rem"
            height="1rem"
            fill="currentColor"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          {" How Simulation Works"}
        </button>
      </div>
    </div>
  );
}

function OptionBlock() {
  return (
    <div className={classes.block4}>
      <button className={classes.reqBtn}>Request Quote</button>
      <button className={classes.dowBtn}>
        <svg
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        {" Download Tearsheet"}
      </button>
    </div>
  );
}
export { BackBlock, SwitchBlock, InfoBlock, OptionBlock };
