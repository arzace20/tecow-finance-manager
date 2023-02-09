import React from 'react'
import Header from './Header';
import PrimaryPage from './PrimaryPage';
import './App.css';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="appBody">
      <Header />
      <PrimaryPage />
    </div>
  );
}

export default App;