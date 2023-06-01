import React from "react";
import "./Home.css";
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container className="homeContainer">
      <img src="./images/background_church.jpg" alt="church" className="backgroundImg"/>
    </Container>
  );
}

export default Home;
