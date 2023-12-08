import React from "react";
import PropTypes from "prop-types";

export default function BagChangeForm(props) {
  const styleCenterText = {
    textAlign: "center",
  }
  const styleForm = {
    textAlign: "left",
    borderStyle: "solid",
    borderRadius: "20px",
    padding: "20px",
    marginLeft: "30%",
    marginRight: "30%"
  }
  return (
    <React.Fragment>
      <div style={styleCenterText}>
        <h3>{props.changeMode} Coffee Bag</h3>
        <form style={styleForm} onSubmit={props.onFormSubmit}>
        Name: <input
          type='text'
          name='name'
          defaultValue={props.bag.name}
          placeholder='Name/type of beans'
          required /><br />
        Origin: <input
          type='text'
          name='origin'
          defaultValue={props.bag.origin}
          placeholder='Origin location of beans'
          required /><br />
        Price: $<input
          type='number'
          name='pricePerPound'
          defaultValue={props.bag.pricePerPound}
          placeholder='Price per pound'
          min='1'
          required /><br />
        Roast: <input
          type='text'
          name='roast'
          defaultValue={props.bag.roast}
          placeholder='Light, medium, dark, etc.'
          required /><br />
        Current Stock: <input
          type='number'
          name='currentPounds'
          defaultValue={props.bag.currentPounds}
          placeholder='Current pounds of beans in the bag'
          min='1'
          required /><br /><br />
        <div style={styleCenterText}><button type='submit'>{props.changeMode} This Bag</button></div>
      </form>


      </div>
    </React.Fragment>
  );
}

BagChangeForm.propTypes = {
  changeMode: PropTypes.string,
  bag: PropTypes.object,
  onFormSubmit: PropTypes.func
}