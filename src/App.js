import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
