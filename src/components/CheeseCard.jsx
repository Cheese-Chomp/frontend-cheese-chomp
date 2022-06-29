
export default function Cheese({ id, name, smells }) {
  return (
    <>
      <h2>{name}</h2>
      {smells ? <h3>It is really stinky!</h3> : <h3>It's not stinky.</h3>}
    </>
  );
}
