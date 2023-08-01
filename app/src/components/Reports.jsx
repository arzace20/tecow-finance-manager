
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Reports.css"
import React, { useEffect, useState } from 'react';

/*
function ReportPage() {
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

  return (
    <div className='reportDiv'>
      <Button className='ReportButton'>Monthly Report</Button>
      <Button className='ReportButton' onClick={handleReportClick}>Generate Report</Button>
      <Table striped bordered hover className='reportTable'>
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
    </div>
  );
}

export default ReportPage;
*/

const ReportPage = () => {

  
  const [reportData, setReportData] = useState([]);
    
  useEffect(() => {
    // Fetch data from the server
    fetch('/report')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the received data to the console
        setReportData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    
      return (
        <div>
          <h2>Report Table</h2>
          <table>
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Weekly</th>
                <th>Tithe</th>
                <th>Special</th>
                <th>Building Fund</th>
                <th>Misc</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>${item.weekly}</td>
                  <td>${item.tithe}</td>
                  <td>${item.special}</td>
                  <td>${item.buildingFund}</td>
                  <td>${item.misc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ReportPage;