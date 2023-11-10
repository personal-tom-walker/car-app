const axios = require('axios');

import { filterProps } from '@/types';

export const fetchCars = async (filters: filterProps) => {
  const { manufacturer, model, year, limit, fuel } = filters;
  const options = {
    method: 'GET',
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const baseRentalPricePerDaySterling = 50;
  const additionalPricePerMile = 0.1;
  const additionalPricePerVehicleYearAge = 0.05;

  const mileageRate = city_mpg * additionalPricePerMile;
  const ageRate =
    (new Date().getFullYear() - year) * additionalPricePerVehicleYearAge;

  const rentalRatePerDay =
    baseRentalPricePerDaySterling + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
