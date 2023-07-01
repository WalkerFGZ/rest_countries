import Country from "../Country";
import { useContext } from "react";
import { ListCountriesDataContext } from "../../Contexts/ListCountriesDataContext.jsx";

export default function ListCountries() {
  const { countriesList, loadingStatus } = useContext(ListCountriesDataContext);

  if (loadingStatus === "loading")
    return <div className="w-full text-center">Loading...</div>;
  return (
    <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-20 xl:gap-16 lg:gap-10 md:gap-16 sm:gap-4 justify-center align-middle max-w-screen-xl mt-10">
      {countriesList.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
}
