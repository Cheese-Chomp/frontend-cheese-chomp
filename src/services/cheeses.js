export async function fetchCheeses() {
  const url = new URL('/api/v1/cheeses', process.env.BACKEND_URL);
  const data = await fetch(url);
  // const data = await fetch(`${process.env.BACKEND_URL}/api/v1/cheeses`);
  const resp = await data.json();
  return resp;
}

export async function fetchCheeseById(id) {
  const data = await fetch(`${process.env.BACKEND_URL}/api/v1/cheeses/${id}`);
  const resp = await data.json();
  return resp;
}

export async function sendCheese(cheese) {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ ...cheese }),
  };
  const data = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cheeses`,
    reqOptions
  );
  const resp = await data.json();
  return resp;
}

export async function deleteCheese(id) {
  const reqOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  };
  const data = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cheeses/${id}`,
    reqOptions
  );
  const resp = await data.json();
  return resp;
}
