import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCheeseById } from '../../services/cheeses';
import CheeseDetailCard from '../../components/CheeseDetailCard';

export default function CheeseDetail() {
  const [cheese, setCheese] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const cheeseById = await fetchCheeseById(id);
        setCheese(cheeseById);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError(e.message);
    }
  }, [id]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {error && <p>{error}</p>}
      <h1>Cheese Detail Page</h1>
      <Link to="/">
        <button>Back to cheese list</button>
      </Link>
      <button onClick={setEditing(true)}>Edit</button>
      {editing ? <EditForm {...cheese} /> : <CheeseDetailCard {...cheese} />}
    </>
  );
}
