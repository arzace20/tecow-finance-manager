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
<<<<<<< HEAD
      style={{ backgroundColor: isMouseOver ? "#000000" : "#FFFFFF", color: isMouseOver ? "#FFFFFF" : "#000000"}}
=======
      style={{ backgroundColor: isMouseOver ? "#DADADA" : "#FFFFFF", color: isMouseOver ? "#FFFFFF" : "#DADADA"}}
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.buttonName}
    </button>
  </Link>
);
}

export default HomeButton;
