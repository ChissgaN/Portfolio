import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Components/NavBar/navBar';
import PersonalInfo from './Components/Personal/PersonalInfo';
import TechStack from './Components/Tecnologies/TechStack';

function App() {

  return (
    <>
      <NavBar/>
      <PersonalInfo/>
      <TechStack/>
    </>
  )
}

export default App
