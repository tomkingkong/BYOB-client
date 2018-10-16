const env = process.env.REACT_APP_DATABASE_API_URL;

export const getAllVineyards = () => {
  const url = env + '/api/v1/vineyards';
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const getAllWines = () => {
  const url = env + '/api/v1/wines';
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

