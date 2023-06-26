import React, {useEffect, useState} from "react";
import "./Deposit.css";
import axios from 'axios';
import SimpleButton from "./SimpleButton";
import {Container, Row, Col, Image} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import Modal from 'react-modal';
import "./PrimaryPage.css"
import Button from 'react-bootstrap/Button';

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


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [memberName, setMemberName] = useState("");
    const [weeklyOffering, setWeeklyOffering] = useState("");
    const [tithe, setTithe] = useState("");
    const [specialOffering, setSpecialOffering] = useState("");
    const [buildingFund, setBuildingFund] = useState("");
    const [misc, setMisc] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            memberId: memberName,
            date: new Date(),
            weekly: weeklyOffering,
            tithe: tithe,
            special: specialOffering,
            buildingFund: buildingFund,
            misc: misc,
          })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  










  return (
      <Container className="depositContainer">
        <Row>
          <Col>
          <div className="depositButtonGroup">     
          <Button className='newEntryButton' onClick={() => setIsModalOpen(true)}>New Entry</Button>{' '}
          <Button className='newEntryButton' >New Member</Button>{' '}
          <Button className='newEntryButton' >Report</Button>{' '}
          </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            content: {
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              width: '1200px',
              height: '850px',
              padding: '20px'
            }
          }}
        >
        {isModalOpen && (
          <div className='entryDiv'>
            <div>
              <input
                className='entryPlaceholder'
                type="text"
                placeholder="Congregation Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
              <button className='openMoreButton' onClick={() => setIsModalOpen(true) }>▷</button>
              <p className='infoIcon'>ⓘ</p>
            </div>
            <div>
              <h3 className='entryTitle'>Weekly Offering</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={weeklyOffering}
                onChange={(e) => setWeeklyOffering(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Tithe</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={tithe}
                onChange={(e) => setTithe(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Special Offering</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={specialOffering}
                onChange={(e) => setSpecialOffering(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Building Fund</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={buildingFund}
                onChange={(e) => setBuildingFund(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Miscellaneous</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={misc}
                onChange={(e) => setMisc(e.target.value)}
              />
            </div>
  
            <button className='newEntryButton' onClick={handleSubmit}>Submit</button>
          </div>
        )}
        </Modal>
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
