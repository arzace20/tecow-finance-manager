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
              <div className="headerButtondiv">
              <a href="deposit">
                <img src="./images/deposit.png" alt="deposit" className="iconHeaderImg1"/>
              </a>
              <HomeButton className="headerWebsiteName" buttonName="Deposits" path="/deposit"/>
              <a href="reports">
                <img src="./images/expense.png" alt="expense" className="iconHeaderImg"/>
              </a>
              <HomeButton className="headerWebsiteName" buttonName="Expenses" path="/reports"/>
              <a href="login">
              <img src="./images/login.png" alt="log in" className="iconHeaderImg"/>
              </a>
              <HomeButton className="headerWebsiteName" buttonName="Log in" path="/login"/>
              </div>
            </Col>
            </Navbar>
      
    </div>
  );

}
  
export default Header;
