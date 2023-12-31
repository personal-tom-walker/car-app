const axios = require('axios');

import { FilterProps } from '@/types';

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, model, year, limit, fuel } = filters;
  const options = {
    method: 'GET',
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
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

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
