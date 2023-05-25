import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Reports.css"

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
    <div>
      <Button className='ReportButton'>Monthly Report</Button>
      <Button className='ReportButton' onClick={handleReportClick}>Generate Report</Button>
      <Table striped bordered hover>
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
            <tr key={row.memberId}>
              <td>{row.memberId}</td>
              <td>{row.offerings.weekly}</td>
              <td>{row.offerings.tithe}</td>
              <td>{row.offerings.special}</td>
              <td>{row.offerings.buldingFund}</td>
              <td>{row.offerings.misc}</td>
              <td>
                {[
                  row.offerings.weekly,
                  row.offerings.tithe,
                  row.offerings.special,
                  row.offerings.buildingFund,
                  row.offerings.misc,
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
