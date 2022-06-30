import { Link } from 'react-router-dom';

export default function Cheese({ id, name, smells }) {
  return (
    <>
      <Link to={`/${id}`}>
        <h2>{name}</h2>
      </Link>
      {smells ? <h3>It is really stinky!</h3> : <h3>It's not stinky.</h3>}
    </>
  );
}
