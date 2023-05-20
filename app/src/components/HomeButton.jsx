import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./HomeButton.css"

function HomeButton(props) {
const [isMouseOver, setMouseOver] = useState(false);
function handleMouseOver() {
  setMouseOver(true);
}
function handleMouseOut() {
  setMouseOver(false);
}
return (
  <Link to={props.path}>
    <button
      className="homeButtons"
      style={{ backgroundColor: isMouseOver ? "#DADADA" : "#FFFFFF", color: isMouseOver ? "#FFFFFF" : "#DADADA"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.buttonName}
    </button>
  </Link>
);
}

export default HomeButton;
