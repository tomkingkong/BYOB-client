const env = process.env.REACT_APP_DATABASE_API_URL + '/api/v1';

export const getAllVineyards = () => {
  const url = env + '/vineyards';
  return fetch(url)
    .then(res => res.json())
    .then(vineyards => vineyards)
    .catch(err => console.log(err));
}

export const getAllWines = () => {
  const url = env + '/wines';
  return fetch(url)
    .then(res => res.json())
    .then(wines => wines)
    .catch(err => console.log(err));
}

export const getAVineyard = (id) => {
  const url = env + `/vineyards/${id}`;
  return fetch(url)
    .then(response => response.json())
    .then(vineyard => vineyard)
    .catch(err => console.log(err));
}
    .then(data => data)
    .catch(err => console.log(err));
}

