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
  // const bagID = props.id;
  return (
    <React.Fragment>
      <div style={styleCenterText}>
      <h3>Coffee Bag Details</h3>
        <div style={styleBagText}>
          <h4>Bean: {props.name}</h4>
          <p>
            Origin: {props.origin}<br />
            Price Per Pound: ${props.pricePerPound}<br />
            Roast: {props.roast}<br />
            Current # of Pounds: {props.currentPounds}lbs<br />
          </p>
          {/* <button onClick={() => props.onEditClick(bagID)}>Edit</button> */}
        </div>
      </div>
    </React.Fragment>
  );
}

BagDetails.propTypes = {
  currentBag: PropTypes.object
}