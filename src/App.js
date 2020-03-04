import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './TheDate'
import Counter from './Counter'
import Bomb from './state-drills/Bomb'



function App() {
  return new Bomb()
}

export default App