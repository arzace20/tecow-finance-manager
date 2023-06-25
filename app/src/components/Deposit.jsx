import React, {useEffect, useState} from "react";
import "./Deposit.css";
import axios from 'axios';
import SimpleButton from "./SimpleButton";
import {Container, Row, Col, Image} from "react-bootstrap"
import Table from 'react-bootstrap/Table';

/*window.location.href = "./PrimaryPage.jsx"; */

const Deposit = () => {
  const [reportData, setReportData] = useState([]);

  const handleReportClick = async () => {
    try {
      const response = await axios.get('/report');
      console.log(response);
      setReportData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  function refreshPage(){
    window.location.reload();
  }

  
  return (
      <Container className="depositContainer">
        <Row>
          <Col>
            <SimpleButton className="loginButton12" buttonName="New Entry" path="/newEntry" />
            <button className="loginButton12">New Member</button>
            <SimpleButton className="loginButton12" buttonName="Report" path="/reports" />
          </Col>
          <Col>
          <button onClick={refreshPage} className="refreshPage">Refresh Page</button>
          <Table striped bordered hover className='depositTable'>
        <thead>
          <tr>
            <th className='TableTypes'>Member ID</th>
            <th className='TableTypes'>Weekly Offering</th>
            <th className='TableTypes'>Tithe</th>
            <th className='TableTypes'>Special</th>
            <th className='TableTypes'>Building</th>
            <th className='TableTypes'>Misc</th>
            <th className='TableTypes'>Total</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.weekly}</td>
              <td>{row.tithe}</td>
              <td>{row.special}</td>
              <td>{row.buldingFund}</td>
              <td>{row.misc}</td>
              <td>
                {[
                  row.weekly,
                  row.tithe,
                  row.special,
                  row.buildingFund,
                  row.misc,
                ].reduce((acc, cur) => acc + cur, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
          </Col>
        </Row>
      </Container>
  )
}


export default Deposit;
