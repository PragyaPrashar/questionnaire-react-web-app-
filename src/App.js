//import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Questionnaire from "./questionnaire/index.js";
import Navigation from "./questionnaire/navigation";
function App() {
  return (


      <>

    <BrowserRouter>
      <Navigation/>
      <div className="container">

        <Routes>
          <Route path="/*" element={<Questionnaire/>}/>
        </Routes>
      </div>
    </BrowserRouter>

      </>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
