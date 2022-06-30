
export default function CheeseDetailCard({ name, description, url, pairs, smells }) {
  return (
    <>
    <h2>{name}</h2>
    <img alt={name} src={url} />
    <p>{description}</p>
    <p>{pairs}</p>
    {smells ? <p>Does it smell? {smells}</p> : <p>It do not smell</p>}
    </>
  )
}
