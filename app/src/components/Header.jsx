import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Navbar} from "react-bootstrap"

<<<<<<< HEAD
/*          <Row className="headerRow"> 
            <Col className="headerButtons"><button className="homeButton" path="/deposit">testing</button></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="TECOW Finance Manager" path="/"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Deposits" path="/deposit"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Expenses" path="/expenses"/></Col>
            <Col className="headerButtons"><button className="homeButton" buttonName="Login" path="/login"/></Col>
          </Row> */

  const Header = ({ history }) => {
=======
/* <Row><img src="./images/background_church.jpg" alt="church" className="backgroundImg"/></Row> 
이거왜이래??? 11 and none
*/  

function Header() {
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c
  function refreshPage(){
    window.location.reload();
  }

  const redirectToHome = () => {
    window.location.href = '/';
  };


  return (
    <div className="headerDiv">
<<<<<<< HEAD
          <Navbar fixed="top" className="s1" >
            <Col className="navbarCol" >
              <h3 className="headerWebsiteName" onClick={redirectToHome}>TECOW Finance Manager</h3>
              <div className="headerButtondiv">
              <img src="./images/deposit.png" alt="deposit" className="iconHeaderImg1"/>
              <HomeButton className="headerWebsiteName" buttonName="Deposits" path="/deposit"/>
              <img src="./images/expense.png" alt="expense" className="iconHeaderImg"/>
              <HomeButton className="headerWebsiteName" buttonName="Expenses" path="/reports"/>
              <img src="./images/login.png" alt="log in" className="iconHeaderImg"/>
              <HomeButton className="headerWebsiteName" buttonName="Log in" path="/login"/>
              </div>
            </Col>
            </Navbar>
=======
      <Navbar fixed="top" expand="lg" className="homeNavBar">
        <Container className="Headers">
          <Row className="headerRow">
            <Col className="navbarCol" onClick={refreshPage}>
              <h3 className="headerWebsiteName" >TECOW Finance Manager</h3>
              <button className="homeButton" path="/">testing</button>
            </Col>
            <Col className="headerButtons"></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Home" path="/"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Deposit" path="/deposit"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Expense" path="/expense"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Report" path="/report"/></Col>
          </Row>
          
        </Container>
      </Navbar>
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c
      
    </div>
  );

}
  
export default Header;
