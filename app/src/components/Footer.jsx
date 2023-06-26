import React from "react";
import "./Footer.css"
import { Container, Row, Col, Image, Table } from "react-bootstrap"

function Footer() {
  return (
  <Table className="footerContainer">
    <thead>
      <tr>
        <th>
          <h1 className="footerTitle">ADDRESS</h1>
        </th>
        <th>
          <h1 className="footerTitle">MISSAL</h1>
        </th>
        <th>
          <h1 className="footerTitle">CONTACT</h1>
        </th>
      </tr>
      

    </thead>
        <tbody>
          <tr>
            <td>
              <p className="footerText">153 Broadview Avenue, Toronto, Ontario M4M 2E9</p>
            </td>
            <td>
              <p className="footerText">Mon - Fri: 6am - 7pm<br />​​Sat - Sun: 8am - 8pm</p> 
            </td>
            <td>
              <p className="footerText">416-850-7413<br />info@stjohnsbakery.com</p>
            </td>
          </tr>
        </tbody>

  </Table>
)
}

export default Footer;