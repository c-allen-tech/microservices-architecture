import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

   return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
