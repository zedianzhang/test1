import classes from "../style/Switch.module.css";

import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
const orange = {
  background: "var(--orange)",
};
 const grey = {
   background: "var(--background-color)",
 };
 const white={
     background:"while",
 }
 const darkBlue = {
   background: "var(--drak-blue)",
 };
const blue = {
   background: "#4F95F4",
 };

const Switch = (props) => {
    const [id] = useState(_uniqueId("prefix-"));

  return (
    <div className={classes.topGrid}>
      <input className={classes.reactSwitchCheckbox} id={id} type="checkbox" />
      <label
        className={classes.reactSwitchLabel}
        htmlFor={id}
        style={props.background === "orange" ? orange : grey}
      >
        <span
          className={classes.reactSwitchButton}
          style={
            props.background === "white"
              ? white
              : props.background === "darkBlue"
              ? darkBlue
              : props.background === "blue"
              ? blue
              : white
          }
        />
      </label>
    </div>
  );
};

export default Switch;
