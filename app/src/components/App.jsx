import React from 'react'
import Header from './Header';
import PrimaryPage from './PrimaryPage';
import Deposit from './Deposit';
import Reports from './Reports';
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="appBody">
      <Header />
      <PrimaryPage />
      <Reports />
    <Routes>
      <Route path="/" component={Home} exact />
      <Route path="/deposit" component={Deposit} />
      <Route path="/expenses" component={Reports} />
      <Route path="/login" component={Login} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;