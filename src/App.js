import React from 'react';
import './App.css';
import Navbar from './components/content/navbar';
import Main from './components/content/main';
import ProjectSection from './components/project-section/projectsSection';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ProjectSection />
    </div>
  );
}

export default App;