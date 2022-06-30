import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendCheese } from '../../services/cheeses';
import { updateCheese } from '../services/cheeses';

export default function CheeseForm({ name, description, url, pairs, smells }) {
  const [name2, setName] = useState(name);
  const [description2, setDescription] = useState(description);
  const [link2, setLink] = useState(url);
  const [pairs2, setPairs] = useState(pairs);
  const [smells2, setSmells] = useState(smells);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const newCheese = {
        name: name2,
        description: description2,
        url: link2,
        pairs: pairs2,
        smells: smells2,
      };
      const submitCheese = await updateCheese(newCheese);
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
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Link to Image:
          <input value={link} onChange={(e) => setLink(e.target.value)} />
        </label>
        <label>
          Pairings:
          <input value={pairs} onChange={(e) => setPairs(e.target.value)} />
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
