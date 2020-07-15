import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import FruitPage from "./components/FruitPage/FruitPage";


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
