import "./App.css";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {

  const [ mode, setMode ] = useState('light');
  const [ alert, setAlert ] = useState(null);

  // const [ myStyle, setMyStyle ] = useState ({
  //   padding: "10px",
  //   color: "white",
  //   backgroundColor: "black",
  //   margin: '20px'
  // });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
      if(mode ==='light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode has been enabled","success")
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled","success")
      }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert = {showAlert}  mode={mode} />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
        
        {/* <About /> */}
      </div>
    </Router>
    </>
  );
}

export default App;
