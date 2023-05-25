import React, { useState } from 'react';
import Modal from 'react-modal';
import "./PrimaryPage.css"
import Button from 'react-bootstrap/Button';

const PrimaryPage = () => {
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
    <div>
      <Button className='newEntryButton' onClick={() => setIsModalOpen(true)}>New Entry</Button>{' '}
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
            width: '600px',
            height: '450px',
            padding: '20px'
          }
        }}
      >
      {isModalOpen && (
        <div>
          <div>
            <input
              type="text"
              placeholder="Congregation Member Name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>
          <div>
            <h3>Weekly Offering</h3>
            <input
              type="text"
              value={weeklyOffering}
              onChange={(e) => setWeeklyOffering(e.target.value)}
            />
          </div>
          <div>
            <h3>Tithe</h3>
            <input
              type="text"
              value={tithe}
              onChange={(e) => setTithe(e.target.value)}
            />
          </div>
          <div>
            <h3>Special Offering</h3>
            <input
              type="text"
              value={specialOffering}
              onChange={(e) => setSpecialOffering(e.target.value)}
            />
          </div>
          <div>
            <h3>Building Fund</h3>
            <input
              type="text"
              value={buildingFund}
              onChange={(e) => setBuildingFund(e.target.value)}
            />
          </div>
          <div>
            <h3>Miscellaneous</h3>
            <input
              type="text"
              value={misc}
              onChange={(e) => setMisc(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      </Modal>
    </div>
  );
};

export default PrimaryPage;