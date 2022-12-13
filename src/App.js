import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import Alert from './components/Alert';


const App = () => {
  // 👉 Dark Mode State Handler
  const [mode , setMode] = useState(false);
  
  const togglerMode = () => {
    setMode(prevMode => !prevMode);
  }

  return(
    <>
      <Navbar darkMode={mode} togglerMode={togglerMode} />
      <TextArea darkMode={mode} />
    </>
  )
}

export default App;