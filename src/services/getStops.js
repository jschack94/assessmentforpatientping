const getStops = id => {
  const url = `https://api-v3.mbta.com/stops?filter[route]=${id}`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json.data);
};

export default getStops;
