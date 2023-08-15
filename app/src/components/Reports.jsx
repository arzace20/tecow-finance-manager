
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./Reports.css"
import React, { useEffect, useState } from 'react';


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
        <div className='reportDiv'>
          <h2  className='reportTableHeader'>Report Table</h2>
          <table>
            <thead>
              <tr>
                <th className='reportTableHeader'>Member ID</th>
                <th className='reportTableHeader'>Weekly</th>
                <th className='reportTableHeader'>Tithe</th>
                <th className='reportTableHeader'>Special</th>
                <th className='reportTableHeader'>Building Fund</th>
                <th className='reportTableHeader'>Misc</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map(item => (
                <tr key={item._id}>
                  <td className='reportTableData'>{item._id}</td>
                  <td className='reportTableData'>${item.weekly}</td>
                  <td className='reportTableData'>${item.tithe}</td>
                  <td className='reportTableData'>${item.special}</td>
                  <td className='reportTableData'>${item.buildingFund}</td>
                  <td className='reportTableData'>${item.misc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ReportPage;