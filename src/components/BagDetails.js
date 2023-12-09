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
  const styleDeleteButton = {
    backgroundColor: "#751F1F",
    borderRadius: "10px",
    borderColor: "#4F4A4A",
    color: "#FFFFFF"
  }
  const bagID = props.currentBag.id;
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
          <button style={styleDeleteButton} onClick={() => props.onDeleteClick(bagID)}>Delete Item</button>
        </div>
      </div>
    </React.Fragment>
  );
}

BagDetails.propTypes = {
  currentBag: PropTypes.object,
  onDeleteClick: PropTypes.func
}