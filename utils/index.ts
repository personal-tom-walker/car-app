const axios = require('axios');

export const fetchCars = async () => {
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    headers: {
      'X-RapidAPI-Key': '3a0f2f81ebmsh34245c2ddd62b98p14f324jsn6d37bf63c5bf',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };
  let result = null;
  try {
    const response = await axios.request(options);
    result = response.data;
  } catch (error) {
    console.error(error);
  }
  return result;
};
