import React, { useEffect, useState } from 'react';
import CheeseCard from '../components/CheeseCard';

export default function CheeseList() {
  const [loading, setLoading] = useState(true);
  const [cheeses, setCheeses] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchCheeses();
        setCheeses(data);
        setLoading(false);
      };
    } catch (e) {
      setError(e);
    }
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
