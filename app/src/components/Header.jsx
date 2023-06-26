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

  const Header = ({ history }) => {
  function refreshPage(){
    window.location.reload();
  }

  const redirectToHome = () => {
    window.location.href = '/';
  };


  return (
    <div className="headerDiv">
          <Navbar fixed="top" className="s1" >
            <Col className="navbarCol" >
              <h3 className="headerWebsiteName" onClick={redirectToHome}>TECOW Finance Manager</h3>
              <img src="./images/deposit.png" alt="deposit" className="iconHeaderImg1"/>
              <HomeButton className="headerWebsiteName" buttonName="Deposits" path="/deposit"/>
              <img src="./images/expense.png" alt="expense" className="iconHeaderImg"/>
              <HomeButton className="headerWebsiteName" buttonName="Expenses" path="/reports"/>
              <img src="./images/login.png" alt="log in" className="iconHeaderImg"/>
              <HomeButton className="headerWebsiteName" buttonName="Log in" path="/login"/>
            </Col>
            </Navbar>
      
    </div>
  );

}
  
export default Header;
