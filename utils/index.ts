export async function fetchCars(modle?: string) {
  const headers = {
    "x-rapidapi-key": "e776efd0f2msh9ff1c64eebc33e3p1eaf34jsn48ac7021d2b6",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  ); // by default it's a get request
  const result = await response.json();

  return result;
}

export async function calculateCarRent(
  city_mpg: number,
  year: number,
  currentYear: number
) {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (currentYear - year) * ageFactor;
  const rentRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentRatePerDay.toFixed(0);
}
