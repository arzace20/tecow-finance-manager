import React from "react";
import "./Footer.css"
import { Container, Row, Col, Image, Table } from "react-bootstrap"

function Footer() {
  return (
  <Table className="footerContainer">
    <thead>
      <tr>
        <th className="tabelC1">
          <h1 className="footerTitle">ADDRESS</h1>
        </th>
        <th className="tabelC1">
          <h1 className="footerTitle">MISSAL</h1>
        </th>
        <th className="tabelC1">
          <h1 className="footerTitle">CONTACT</h1>
        </th>
      </tr>
      

    </thead>
        <tbody className="footerTbody">
          <tr>
            <td>
              <p className="footerText">2501 Warden Ave., Scarborough, ON M1W 2L6</p>
            </td>
            <td>
              <p className="footerText">Sun 1:30pm</p> 
            </td>
            <td>
              <p className="footerText">(416) 888-0965</p>
            </td>
          </tr>
        </tbody>

  </Table>
)
}

export default Footer;