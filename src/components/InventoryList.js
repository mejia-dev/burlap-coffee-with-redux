import React from "react";
import PropTypes from "prop-types";
import BagItem from "./BagItem";

export default function InventoryList(props) {
  const styleCenterText = {
    textAlign: "center",
  }
  let inventoryListStatus = "Inventory is empty";
  if (props.coffeeBagInventory) {
    props.coffeeBagInventory.map((bag) =>
          <BagItem
            name={bag.name}
            origin={bag.origin}
            pricePerPound={parseInt(bag.pricePerPound)}
            roast={bag.roast}
            currentPounds={parseInt(bag.currentPounds)}
            id={bag.id}
            key={bag.id}
            onItemClick={props.clickActionViewDetails}
            onEditClick={props.buttonActionBagCallEdit}
            onSellClick={props.buttonActionBagSellPound}
          />
        )
  }
  return (
    <React.Fragment>
      <div style={styleCenterText}>
        <h3>Inventory</h3>
        {inventoryListStatus}
      </div>
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  coffeeBagInventory: PropTypes.array,
  buttonActionBagCallEdit: PropTypes.func,
  buttonActionBagSellPound: PropTypes.func,
  clickActionViewDetails: PropTypes.func
}