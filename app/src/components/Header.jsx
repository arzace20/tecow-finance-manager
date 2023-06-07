import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Navbar} from "react-bootstrap"

/*          <Row className="headerRow"> 
            <Col className="headerButtons"><button className="homeButton" path="/deposit">testing</button></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="TECOW Finance Manager" path="/"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Deposits" path="/deposit"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Expenses" path="/expenses"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Login" path="/login"/></Col>
          </Row> */

function Header() {
  function refreshPage(){
    window.location.reload();
  }


  return (
    <div className="headerDiv">
          <Row className="headerRow">
            <Col className="navbarCol" >
              <h3 className="headerWebsiteName" onClick={refreshPage}>TECOW Finance Manager</h3>
              <img src="./images/deposit.png" alt="deposit" className="iconHeaderImg"/>
              <HomeButton className="headerWebsiteName" buttonName="Deposits" path="/deposit"/>
              <h3 className="headerWebsiteName">Deposits</h3>
              <img src="./images/expense.png" alt="expense" className="iconHeaderImg"/>
              <h3 className="headerWebsiteName">Expenses</h3>
              <img src="./images/login.png" alt="log in" className="iconHeaderImg"/>
              <h3 className="headerWebsiteName">Log in</h3>
              <HomeButton className="headerWebsiteName" buttonName="Log in" path="/login"/>
            </Col>
          </Row>
      
    </div>
  );

}
export default Header;
