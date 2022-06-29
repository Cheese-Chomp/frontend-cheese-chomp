import React, { useEffect, useState } from 'react';
import CheeseCard from '../components/CheeseCard';
import { fetchCheeses } from '../services/cheeses';

export default function CheeseList() {
  const [loading, setLoading] = useState(true);
  const [cheeses, setCheeses] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCheeses();
        console.log('fetchcheese', data);
        setCheeses(data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Welcome to Cheese Chomp</h1>
      {error && <p>{error}</p>}
      {cheeses.map((cheese) => (
        <CheeseCard key={cheese.id} {...cheese} />
      ))}
    </>
  );
}
