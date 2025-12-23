'use client';

import {useState, useEffect } from "react";

const Joke = () => {

  const [joke, setJoke] = useState({});
  
  const fetchRandomJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    console.log(data);
    setJoke(data);
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#0b1220'}}>
      <h2>Joke Generator</h2>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>

      <button onClick={fetchRandomJoke} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Get Another Joke
      </button>

    </div>
  );
};

export default Joke;