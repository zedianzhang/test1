import classes from "../style/Block.module.css";
import { FiAlertCircle, FiCalendar } from "react-icons/fi";
import { BsFillBarChartFill } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { HiDownload }    from "react-icons/hi";
import { IoMdDesktop } from "react-icons/io";
function BackBlock() {
  return <p className={classes.block1}>&lt; Back to Aegle homepage</p>;
}

function SwitchBlock() {
  return (
    <div className={classes.block2}>
      <button className={classes.subtn}>
        <BsFillBarChartFill />
        {" Summary "}
      </button>
      <button className={classes.sigtn}>
        <div style={{ display: "inline-block", width: "90%" }}>
          <FiCalendar/>
          {" Single Simulation "}
        </div>
        <div dir="rtl" style={{ display: "inline-block", width: "10%" }}>
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
        <button className={classes.editBtn}>
          <GoSettings className={classes.setting} />
          {" Edit Simulation Parameters"}
        </button>
      </div>
      <div className={classes.botBlock}>
        <button>
          <FiCalendar />
          {" Aegle vs. Stop-loss"}
        </button>
        <button>
          <IoMdDesktop />
          {" Aegle Experts"}
        </button>
        <button>
          <FiAlertCircle />
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
        <HiDownload/>
        {" Download Tearsheet"}
      </button>
    </div>
  );
}
export { BackBlock, SwitchBlock, InfoBlock, OptionBlock };
