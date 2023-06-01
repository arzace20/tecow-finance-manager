import React from "react";
import "./Footer.css"
import { Container, Row, Col, Image } from "react-bootstrap"

function Footer() {
  return (
  <Container className="footerContainer">
    <Row>
      <Col className="footerCards">
        <h1 className="footerTitle">ADDRESS</h1>
        <p className="footerText">153 Broadview Avenue, Toronto, Ontario M4M 2E9</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">HOURS</h1>
        <p className="footerText">Mon - Fri: 6am - 7pm<br />​​Sat - Sun: 8am - 8pm</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">CONTACT</h1>
        <p className="footerText">416-850-7413<br />info@stjohnsbakery.com</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">FOLLOW</h1>
        <Container className="footerIconContainer">
        </Container>
      </Col>
    </Row>
  </Container>
)
}

export default Footer;