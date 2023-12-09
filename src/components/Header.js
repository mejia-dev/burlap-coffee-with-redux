import React from "react";

export default function Header() {
  const styleCenterText = {
    textAlign: "center",
  }
  return (
    <React.Fragment>
      <h1 style={styleCenterText}>Burlap Coffee Co. Inventory Tracker</h1>
    </React.Fragment>
  );
}