import React, { useState } from 'react';
import ItemsList from './components/ItemsList';
import { Popup } from './components/popup/Popup';

import './App.css';

function App() {
  const [itemPopup, setItemPopup] = useState('');

  const items = [
    'pair',
    'two pairs',
    'three of a kind',
    'straight',
    'flush',
    'full house',
    'four of a kind',
    'straigh flush',
    'royal flush',
  ]

  return (
    <div className="App">
      {itemPopup && <Popup itemPopup={itemPopup} setItemPopup={setItemPopup}/>}
      <ItemsList items={items} setItemPopup={setItemPopup} />
    </div>
  );
}

export default App;
