import React from 'react'
import Header from './Header';
import PrimaryPage from './PrimaryPage';
import Reports from './Reports';
import './App.css';

function App() {
  return (
    <div className="appBody">
      <Header />
      <PrimaryPage />
      <Reports />
    </div>
  );
}

export default App;