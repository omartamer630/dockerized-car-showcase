import { FilterProps } from "@/app/page";
import { CarProps, Props } from "@/components/CarCard";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "e776efd0f2msh9ff1c64eebc33e3p1eaf34jsn48ac7021d2b6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (
  car: Props,
  angle: string = "0"
): string => {
  if (!car.make || !car.model || !car.year) {
    console.log("somthing is missing");
  }

  const url = new URL(
    "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=toyota&modelFamily=corolla&modelYear=2022&zoomType=fullscreen&angle=23&fileType=png"
  );
  const { make, model, year } = car;

  // url.searchParams.append("customer", "hrjavascript-mastery");
  // url.searchParams.append("make", make);
  // url.searchParams.append("modelFamily", model.split(" ")[0]);
  // url.searchParams.append("zoomType", "fullscreen");
  // url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append("angle", angle);

  return url.toString();
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
  return newPathname;
};
