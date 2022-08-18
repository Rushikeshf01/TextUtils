import './App.css';
import Alert from './components/Alert'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

  
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Enabled Dark Mode', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#F8F9FA'
      showAlert('Enabled Light Mode', 'success')
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutTitle="About our App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
          <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </div>
            {/* }> */}
          {/* </Route> */}
            {/* <Route path="/about" element={ */}
            {/* <About /> */}
            {/* }> */}
            {/* </Route> */}
        {/* </Routes> */}
      {/* </Router> */}

    </>
  );
}

export default App;
