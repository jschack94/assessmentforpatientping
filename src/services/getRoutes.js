const getRoutes = id => {
  const url = `https://api-v3.mbta.com/routes`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json.data);
};

export default getRoutes;
