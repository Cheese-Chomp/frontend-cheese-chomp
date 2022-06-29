export async function fetchCheeses() {
  console.log(process.env.BACKEND_URL);
  const data = await fetch(`${process.env.BACKEND_URL}/api/v1/cheeses`);
  const resp = await data.json();
  return resp;
}
fetchCheeses();
