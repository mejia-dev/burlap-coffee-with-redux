import React from "react";
import PropTypes from "prop-types";

export default function NavButtons(props) {
  const styleCenterText = {
    textAlign: "center",
  }
  return (
    <React.Fragment>
      <div style={styleCenterText}>
        <button onClick={props.buttonActionDisplayInventory}>Show Inventory</button>
        <button onClick={props.buttonActionAddBag}>Add Coffee Bag</button>
      </div>
    </React.Fragment>
  );
}

NavButtons.propTypes = {
  buttonActionDisplayInventory: PropTypes.func,
  buttonActionAddBag: PropTypes.func
}