
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';



function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode( 'dark');
      showAlert("Dark Mode is enabled" , "success");
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled" , "success");
    }
  }
  
  return (
    <>
      <Navbar title ="Textutils" about = "About Textutlis" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert = {alert} />
      <div className="container">
        <Textform heading = "Enter the text to Analyze..." mode={mode} showAlert = {showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
