export async function fetchCheeses() {
  const data = await fetch(`${process.env.BACKEND_URL}/api/v1/cheeses`);
  const resp = await data.json();
  return resp;
}

export async function fetchCheeseById(id) {
  const data = await fetch(`${process.env.BACKEND_URL}/api/v1/cheeses/${id}`);
  const resp = await data.json();
  return resp;
}