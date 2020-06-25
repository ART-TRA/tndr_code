import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contacts from "./components/Contacts/Contacts";
import Feedback from "./components/Feedback/Feedback";


function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Services/>
        <About/>
        <Clients/>
        <Feedback/>
        <Contacts/>
    </div>
  );
}

export default App;
