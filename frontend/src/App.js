import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [message, setMessage] = useState('');
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/api/hello`)
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  const fetchRandomPhrase = () => {
    axios.get(`${API_URL}/api/random-phrase`)
      .then(response => setPhrase(response.data.phrase))
      .catch(error => console.error('Error fetching phrase:', error));
  };

  return (
    <div className="App">
      <h1>My New App</h1>
      <p>{message || 'Loading...'}</p>
      <button onClick={fetchRandomPhrase}>Get Random Phrase</button>
      {phrase && <p>{phrase}</p>}
    </div>
  );
}

export default App;