// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import CollapsibleNavBar from './Components/CollapsibleNavBar';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark') //whether dark mode is enabled or not
  const [alert, setalert] = useState(null)

  
  const showAlert = (message, type)=>
  {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }

  const toggleMode = ()=>
  {
    if (mode === 'light')
    {
        setMode('dark')
        document.body.style.backgroundColor = "#042743"
        document.title = "Text Utils : Dark Mode"
        showAlert("Dark mode enabled", "success")
    }
    else 
    {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.title = "Text Utils: Light Mode"
      showAlert("Light mode enabled", "success")
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App; 