<<<<<<< HEAD
=======
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Reports.css"
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c

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
<<<<<<< HEAD
    <div className='reportDiv'>
      <Button className='ReportButton'>Monthly Report</Button>
      <Button className='ReportButton' onClick={handleReportClick}>Generate Report</Button>
      <Table striped bordered hover className='reportTable'>
=======
    <div>
      <Button className='ReportButton'>Monthly Report</Button>
      <Button className='ReportButton' onClick={handleReportClick}>Generate Report</Button>
      <Table striped bordered hover>
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c
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
<<<<<<< HEAD
    </div>
  );
}

export default ReportPage;
*/

const ReportPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/deposits'); // Replace '/api/deposits' with the appropriate API endpoint for fetching deposit data
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  return (
    <div>
      <h1>Deposit Table</h1>
      <table>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Member Name</th>
            <th>Offerings Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((deposit) => (
            <tr key={deposit._id}>
              <td>{deposit.memberId}</td>
              <td>{deposit.memberName}</td>
              <td>{deposit.offerings.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
=======
>>>>>>> 71f1d90b5e151bd047261716c74f3b83238bb89c
    </div>
  );
};

export default ReportPage;