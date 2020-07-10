import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import {ThemeProvider, createMuiTheme} from "@material-ui/core";

function App() {


    // color palette for header
    const headerPalette = createMuiTheme ({

        palette: {
            primary: {
                main: '#FFFFFF',
            },
            secondary: {
                main: '#373C41',
            },
        },
    });




  return (
    <div className="App">

      <Router>

          <ThemeProvider theme={headerPalette}>
        <Header/>
          </ThemeProvider>

        <MainContent/>
      </Router>

    </div>
  );
}

export default App;
