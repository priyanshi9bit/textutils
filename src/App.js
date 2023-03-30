import './App.css';
import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type    //bootstrap has alert, success, danger types
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls);
  //   document.body.classList.add('bg-'+cls)
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#040527';
  //     showAlert("Dark mode has been enabled", "success");
  //     document.title = "Text-tutils Dark mode";
  //   }
   const toggleMode = () => {
     if (mode === 'light') {
       setMode('dark');
       document.body.style.backgroundColor = '#040527';
       showAlert("Dark mode has been enabled", "success");
       document.title = "Text-tutils Dark mode";
      //      setInterval(()=>{
      //        document.title = "Amazing site";
      //      },1000);
      //      setInterval(()=>{
      //        document.title = "Amazing site";
      //      },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Text-tutils Light mode";
    }
  }
  return (
    <>
    { <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>          
          <Route exact path="/">
        <FormInput showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
}
    </>     

 );
 }
  
export default App;
