import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');    //Whether dark mode is enabled or not... 

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/">
      <TextForm heading="Enter The Text To Analyze : " mode={mode} />
      </Route>
    </Switch>
  </div>
  </Router>
    </>
  );
}

export default App;
