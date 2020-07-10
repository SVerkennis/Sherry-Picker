import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <MainContent/>
      </Router>



    </div>
  );
}

export default App;
