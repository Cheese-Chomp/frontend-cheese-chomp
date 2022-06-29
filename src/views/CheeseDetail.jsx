import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


export default function CheeseDetail() {
    const [cheese, setCheese] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
      try {
        const fetchData = async () => {
          
        };
        fetchData();
      } catch (e) {
        setError(e.message);
      }
    }, []);

  return (
    <div>CheeseDetail</div>
  )
}
