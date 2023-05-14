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
      </table>
    </div>
  );
}

export default ReportPage;
