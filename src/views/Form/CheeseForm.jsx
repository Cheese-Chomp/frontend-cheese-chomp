import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendCheese } from '../../services/cheeses';

export default function CheeseForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [pairs, setPairs] = useState('');
  const [smells, setSmells] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const newCheese = {
        name,
        description,
        url: link,
        pairs,
        smells,
      };
      const submitCheese = await sendCheese(newCheese);
      setTimeout(() => history.push('/'), 3500);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleForm}>
        <label>
          Name:
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Link to Image:
          <input onChange={(e) => setLink(e.target.value)} />
        </label>
        <label>
          Pairings:
          <input onChange={(e) => setPairs(e.target.value)} />
        </label>
        <label>
          Is it stinky?
          <input
            type="radio"
            value="true"
            name="smells"
            onChange={(e) => setSmells(e.target.value)}
          />
          True
          <input
            type="radio"
            value="false"
            name="smells"
            onChange={(e) => setSmells(e.target.value)}
          />
          False
        </label>
        <button>Add Cheese!</button>
      </form>
    </div>
  );
}
