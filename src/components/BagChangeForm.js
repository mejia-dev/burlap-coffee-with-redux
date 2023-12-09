import React from "react";
import PropTypes from "prop-types";

function BagChangeForm(props) {

  function createObject(event) {
    event.preventDefault();
    props.onFormSubmit({
      name: event.target.name.value,
      origin: event.target.origin.value,
      pricePerPound: event.target.pricePerPound.value,
      roast: event.target.roast.value,
      currentPounds: event.target.currentPounds.value,
    },props.currentBag)
  }
  
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
        <form style={styleForm} onSubmit={createObject}>
        Name: <input
          type='text'
          name='name'
          defaultValue={props.currentBag.name}
          placeholder='Name/type of beans'
          required /><br />
        Origin: <input
          type='text'
          name='origin'
          defaultValue={props.currentBag.origin}
          placeholder='Origin location of beans'
          required /><br />
        Price Per Pound: $<input
          type='number'
          name='pricePerPound'
          defaultValue={props.currentBag.pricePerPound}
          placeholder='Price per pound'
          min='1'
          required /><br />
        Roast: <input
          type='text'
          name='roast'
          defaultValue={props.currentBag.roast}
          placeholder='Light, medium, dark, etc.'
          required /><br />
        Current # of Pounds: <input
          type='number'
          name='currentPounds'
          defaultValue={props.currentBag.currentPounds}
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
  currentBag: PropTypes.object,
  onFormSubmit: PropTypes.func
}

export default BagChangeForm