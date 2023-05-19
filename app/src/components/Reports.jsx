import React, { useState } from 'react';
import axios from 'axios';

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
      <h1>Monthly Report</h1>
      <button onClick={handleReportClick}>Generate Report</button>
      <table>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Weekly Offering</th>
            <th>Tithe</th>
            <th>Special</th>
            <th>Building</th>
            <th>Misc</th>
            <th>Total</th>
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
      </table>
    </div>
  );
}

export default ReportPage;
