import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import CarCard, { CarProps } from "@/components/CarCard"; // Import the component and types
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import "./globals.css";

interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

interface HomeProps {
  searchParams: FilterProps;
}
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !allCars || allCars.length === 0 || !Array.isArray(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Start Exploring</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title={"Year"} options={yearsOfProduction} />
            <CustomFilter title={"fuel"} options={fuels} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard
                  key={`${car.model} ${Date.now() * Math.random()}`}
                  car={car}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, try again later
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
export type { FilterProps };
