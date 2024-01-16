import logo from './logo.svg';
import React from 'react';
import './App.css';
import Jatekter from './Jatekter';
import Model from './Model';

function App() {
  const model = new Model(9);
  return (
    <div className='App'>
    <h1>Light On</h1>
    <Jatekter lampak={model.getSzinek()} />
    </div>
  );
}

export default App;
