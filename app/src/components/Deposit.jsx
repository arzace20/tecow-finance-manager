import React, {useEffect, useState} from "react";
import "./Deposit.css";
import axios from 'axios';
import SimpleButton from "./SimpleButton";
import {Container, Row, Col, Image} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import Modal from 'react-modal';
import "./PrimaryPage.css"
import Button from 'react-bootstrap/Button';



const Deposit = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
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


    const [offerings, setOfferings] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [memberName, setMemberName] = useState("");
    const [weeklyOffering, setWeeklyOffering] = useState("");
    const [tithe, setTithe] = useState("");
    const [specialOffering, setSpecialOffering] = useState("");
    const [buildingFund, setBuildingFund] = useState("");
    const [easter, setEaster] = useState("");
    const [revival, setRevival] = useState("");
    const [thanksgiving, setThanksgiving] = useState("");
    const [christmas, setChristmas] = useState("");
    const [watchnight, setWatchnight] = useState("");
    const [anniversary, setAnniversary] = useState("");
    const [seminary, setSeminary] = useState("");
    const [theology, setTheology] = useState("");
    const [automobile, setAutomobile] = useState("");
    const [chairs, setChairs] = useState("");
    const [indigenousMission, setIndigenousMission] = useState("");
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
            easter: easter,
            revival: revival,
            thanksgiving: thanksgiving,
            christmas: christmas,
            watchnight: watchnight,
            anniversary: anniversary,
            seminary: seminary,
            theology: theology,
            automobile: automobile,
            chairs: chairs,
            indigenousMission: indigenousMission

          })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        setOfferings((prevOfferings) => ({
          ...prevOfferings,
          [memberName]: {
            date: new Date(),
            weekly: weeklyOffering,
            tithe: tithe,
            special: specialOffering,
            buildingFund: buildingFund,
            misc: misc,
            easter: easter,
            revival: revival,
            thanksgiving: thanksgiving,
            christmas: christmas,
            watchnight: watchnight,
            anniversary: anniversary,
            seminary: seminary,
            theology: theology,
            automobile: automobile,
            chairs: chairs,
            indigenousMission: indigenousMission,
          },
        }));
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
    
    const [reports, setReports] = useState([]);

    useEffect(() => {
      fetch("/report")
        .then((res) => res.json())
        .then((data) => setReports(data.report));
      }, []);

  return (
      <Container className="depositContainer">
        <Row>
          <Col>
          <div className="depositButtonGroup">     
          <Button className='newEntryButton' onClick={() => setIsModalOpen(true)}>New Entry</Button>{' '}
          <Button className='newEntryButton' >New Member</Button>{' '}
          <Button className='newEntryButton' onClick={handleReportClick} >Report</Button>{' '}
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
              width: '90%',
              height: '110%',
              padding: '20px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }
          }}
        >
        {isModalOpen && (
          <div className='entryDiv'>
            <div>
              <input
                className='entryPlaceholder1'
                type="text"
                placeholder="Congregation Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Weekly Offering</h3>
              <input
                className='entryPlaceholder'
                type="number"
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
      <button onClick={toggleCollapse} className="collapseContentButton">↓ Other Offering Items </button>
      {isCollapsed ? null : (
        <div className="collapseContent">
            <div>
              <h3 className='entryTitle'>Easter</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={easter}
                onChange={(e) => setEaster(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Revival</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={revival}
                onChange={(e) => setRevival(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Thanksgiving</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={thanksgiving}
                onChange={(e) => setThanksgiving(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Christmas</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={christmas}
                onChange={(e) => setChristmas(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Watchnight</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={watchnight}
                onChange={(e) => setWatchnight(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Anniversary</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={anniversary}
                onChange={(e) => setAnniversary(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Seminary</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={seminary}
                onChange={(e) => setSeminary(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Theology</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={theology}
                onChange={(e) => setTheology(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Automobile</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={automobile}
                onChange={(e) => setAutomobile(e.target.value)}
              />
            </div>
            <div>
              <h3 className='entryTitle'>Chairs</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={chairs}
                onChange={(e) => setChairs(e.target.value)}
              />
            </div>            
            <div>
              <h3 className='entryTitle'>Indigenous Mission</h3>
              <input
                className='entryPlaceholder'
                type="text"
                value={indigenousMission}
                onChange={(e) => setIndigenousMission(e.target.value)}
              />
            </div>
        </div>
      )}
      <div className="sumbitDeposit">
      <button className='sumbitDepositButton' onClick={handleSubmit}>Submit</button>
      </div>
            
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
  


</tbody>
      </Table>
          </Col>
        </Row>
      </Container>
  )
              }
export default Deposit;
