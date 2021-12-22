import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
import React from 'react';
import ItemsList from './components/ItemsList';

function App() {
  const items = [
    'pair',
    'two pairs',
    'three of kind',
    'straight',
    'flush',
    'full house',
    'four of kind',
    'street flush',
    'royal flush',
  ]

  return (
    <div className="App">
      <span>hehehe</span>
      <ItemsList items={items} />
    </div>
  );
}

export default App;

*/