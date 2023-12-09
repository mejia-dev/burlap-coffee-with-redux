import React from "react";
import PropTypes from "prop-types";

export default function BagDetails(props) {
  const styleBagText = {
    textAlign: "left",
    borderStyle: "solid",
    borderRadius: "20px",
    padding: "20px",
    marginLeft: "30%",
    marginRight: "30%"
  }
  const styleCenterText = {
    textAlign: "center",
  }
  return (
    <React.Fragment>
      <div style={styleCenterText}>
      <h3>Coffee Bag Details</h3>
        <div style={styleBagText}>
          <h4>Bean: {props.currentBag.name}</h4>
          <p>
            Origin: {props.currentBag.origin}<br />
            Price Per Pound: ${props.currentBag.pricePerPound}<br />
            Roast: {props.currentBag.roast}<br />
            Current # of Pounds: {props.currentBag.currentPounds}lbs<br />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

BagDetails.propTypes = {
  currentBag: PropTypes.object
}