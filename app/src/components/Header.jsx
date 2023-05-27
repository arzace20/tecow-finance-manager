import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Navbar} from "react-bootstrap"

/* <Row><img src="./images/background_church.jpg" alt="church" className="backgroundImg"/></Row> 
이거왜이래??? 11 and none
*/

function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <div className="headerDiv">
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
      
    </div>
  );

}
export default Header;
