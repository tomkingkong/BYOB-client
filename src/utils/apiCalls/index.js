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

export const getAWine = (id) => {
  const url = env + `/wines/${id}`;
  return fetch(url)
    .then(response => response.json())
    .then(wine => wine)
    .catch(err => console.log(err));
}

export const getVineyardWines = (vineyardId) => {
  const url = env + `/wines?vineyard_id=${vineyardId}`;
  return fetch(url)
    .then(response => response.json())
    .then(wines => wines)
    .catch(err => console.log(err));
}

export const postVineyard = (vineyard) => {
  const url = env + '/vineyards';
  const payload = {
    method: 'POST',
    body: JSON.stringify(vineyard),
    headers: { 'Content-Type':'application/json' }
  };
  return fetch(url, payload)
    .then(response => response.json())
    .then(vinId => vinId)
    .catch(err => console.log(err));
}

export const postWine = (id, wine) => {
  const url = env + `/${id}/wines`;
  const payload = {
    method: 'POST',
    body: JSON.stringify(wine),
    headers: { 'Content-Type':'application/json' }
  }
  return fetch(url, payload)
    .then(response => response.json())
    .then(wineId => wineId)
    .catch(err => console.log(err));
}

export const updateVineyard = (id, vineyard) => {
  const url = env + `/vineyards/${id}`;
  const payload = {
    method: 'PUT',
    body: JSON.stringify(vineyard),
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(url, payload)
    .then(response => response.json())
    .then(vineId => vineId)
    .catch(err => console.log(err));
}

export const updateWine = (id, wine) => {
  const url = env + `/wines/${id}`;
  const payload = {
    method: 'PUT',
    body: JSON.stringify(wine),
    headers: { 'Content-Type':'application/json' }
  };
  return fetch(url, payload)
    .then(response => response.json())
    .then(wine => wine)
    .catch(err => console.log(err));
}

export const deleteVineyard = (id) => {
  const url = env + `/vineyards/${id}`;
  const payload = {
    method: 'DELETE'
  };
  return fetch(url, payload)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const deleteWine = (id) => {
  const url = env + `/wines/${id}`;
  const payload = {
    method: 'DELETE'
  };
  return fetch(url, payload)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}