const getAlerts = id => {
  const url = `https://api-v3.mbta.com/alerts?filter[route]=${id}`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json.data);
};

export default getAlerts;
