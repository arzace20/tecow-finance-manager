import React, {useEffect, useState} from "react";
import "./Deposit.css"
import {Container, Row, Col, Image} from "react-bootstrap"
import Table from 'react-bootstrap/Table';


function Deposit() {
  
  return (
      <Container className="depositContainer">
        <Row>
          <Col>
            <button className="loginButton12">New Entry</button>
            <button className="loginButton12">New Member</button>
            <button className="loginButton12">Report</button>
          </Col>
          <Col>
          <Table striped bordered hover className="depositTable">
      <thead className="tableHead">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Sample</th>
          <th>Sample</th>
          <th>Sample</th>
          <th>Sample</th>
          <th>Sample</th>
          <th>Sample</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableRow1">
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="tableRow1">
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="tableRow1">
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
          </Col>
        </Row>
      </Container>
  )
}


export default Deposit;
