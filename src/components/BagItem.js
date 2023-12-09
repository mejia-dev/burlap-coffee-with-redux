import React from "react";
import PropTypes from "prop-types";


export default function BagItem(props) {
  const styleText = {
    textAlign: "left",
    borderStyle: "solid",
    borderRadius: "20px",
    padding: "20px",
    marginLeft: "30%",
    marginRight: "30%"
  }
  const bagID = props.id;
  let sellAmount = 1;
  let statusMessage = "";
  let statusMessageStyle = {};
  if (props.currentPounds <= 0) {
    sellAmount = 0;
    statusMessage = "Out of Stock"
    statusMessageStyle = { color: "#FF2500" };
  } else if (props.currentPounds < 10) {
    statusMessage = "Almost Empty"
    statusMessageStyle = { color: "#FFB400" };
  }
  return (
    <React.Fragment>
      <br />
      <div style={styleText}>
        <div onClick={() => props.onItemClick(props.id)}><h4>Bean: {props.name}</h4>
          <p>
            Origin: {props.origin}<br />
            Price Per Pound: ${props.pricePerPound}<br />
            Roast: {props.roast}<br />
            Current # of Pounds: {props.currentPounds}lbs<br />
            <span style={statusMessageStyle}>{statusMessage}</span>
          </p>
        </div>
        <button onClick={() => props.onSellClick(bagID, sellAmount)}>Sell</button>
        <button onClick={() => props.onEditClick(bagID)}>Edit</button>
      </div>
    </React.Fragment>
  );
}

BagItem.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  pricePerPound: PropTypes.number,
  roast: PropTypes.string,
  currentPounds: PropTypes.number,
  id: PropTypes.string,
  onItemClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onSellClick: PropTypes.func,
}