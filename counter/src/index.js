import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  Year  from "./Caroline/Year";
// import Counter from "./components/Counter";
// import PlusMinus from "./components/PlusMinus";
// import Hello from "./components/Hello";
// import Chat from "./components/Chat";
// import ToDoList from "./components/TodoList";
// import Categories from "./components/Categories";
// import Hole from "./components/AcchiappaLaTalpa/Hole";
// import Score from "./components/AcchiappaLaTalpa/Score";
// import Acchiappalatalpa from "./components/AcchiappaLaTalpa/Acchiappalatalpa";
// import Celle from "./components/Celle";
// import Prenotazione from "./components/Prenotazione";
// import SmartFridge from "./components/SmartFridge";
//import Classifica from "./components/Classifica";
//import Carrello from "./components/Carrello";
//import Alarm from "./components/Alarm";
//import Somma from "./components/CalcoliMatematici/Somma";
//import Divisione from "./components/CalcoliMatematici/Divisione";
//import Triangolo from "./components/CalcoliMatematici/Triangolo";
//import Giornata from "./components/calendario/Giornata";
//import Orario from "./components/calendario/Orario";
//import Store from "./components/Store";
//import Settimana from './components/calendario/Settimana'
//import  Mese  from "./components/calendario/Mese";
//import  Anno  from "./components/calendario/Anno";
import Week from "./Caroline/Week";
import { Month } from "./Caroline/Month";
import { Hour } from "./Caroline/Hour";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
       <header className="App-header">
        {/*
        <Counter />
        <PlusMinus min={0} max={10} />
        <Hello />
        <Chat />
        <Categories />
        <Acchiappalatalpa />
        <ToDoList />
        <Celle /> 
        <Prenotazione />
        <SmartFridge />
        <Classifica />
        <Store />
        <Carrello />
        <Alarm />
        <Somma/>
        <Divisione/>
        <Triangolo/>
          <Orario/>
          <Giornata/>
          <Settimana/>
          <Mese/>
         
        */}
         {/* <Anno/> */}
        <Year />
        {/* <Week/> */}
        {/* <Month/> */}
        
        
      
       
        
       
        
       
       
      </header>
    </div>
  </React.StrictMode>
);
