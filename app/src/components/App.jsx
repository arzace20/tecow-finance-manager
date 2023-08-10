import React from 'react'
import Header from './Header';
import PrimaryPage from './PrimaryPage';
import Deposit from './Deposit';
import Reports from './Reports';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer";
import './App.css';
import {Route, Routes} from "react-router-dom";


/*      <PrimaryPage />
      <Reports /> 
      test11
      */
function App() {
  return (
    <div className="appBody">
      <Header />

            

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/newEntry" element={<PrimaryPage/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;