import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./SimpleButton.css"

function SimpleButton(props) {

return (
  <Link to={props.path}>
    <button
      className="simpleButtons"
    >
      {props.buttonName}
    </button>
  </Link>
);
}

export default SimpleButton;