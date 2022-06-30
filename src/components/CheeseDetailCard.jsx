import { useHistory } from 'react-router-dom';
import { deleteCheese } from '../services/cheeses';

export default function CheeseDetailCard({
  id,
  name,
  description,
  url,
  pairs,
  smells,
}) {
  const history = useHistory();

  const handleDeleteCheese = async () => {
    await deleteCheese(id);
    history.push('/');
  };
  return (
    <>
      <h2>{name}</h2>
      <img alt={name} src={url} />
      <p>{description}</p>
      <p>{pairs}</p>
      {smells ? <p>It Smells {smells}</p> : <p>It do not smell</p>}
      <button onClick={handleDeleteCheese}>Delete</button>
    </>
  );
}
