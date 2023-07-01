/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import Country from "../Country";
import { useContext, useMemo } from "react";
import { ListCountriesDataContext } from "../../Contexts/ListCountriesDataContext.jsx";
import { ListCountriesMenuContext } from "../../Contexts/ListCountriesMenuContext";
import useContriesSortAndFilter from "../../Hooks/useCountriesSortAndFilter";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function ListCountries() {
  const { darkTheme } = useContext(ThemeContext);
  const { countriesList, loadingStatus } = useContext(ListCountriesDataContext);
  const { searchText, region } = useContext(ListCountriesMenuContext);
  const countriesListJson = JSON.stringify(countriesList);
  const listCountriesListFiltered = useMemo(
    () => useContriesSortAndFilter(countriesList, searchText, region),
    [countriesListJson, searchText, region, loadingStatus]
  );
  if (loadingStatus === "loading")
    return (
      <div
        className={`${
          darkTheme ? "text-white" : "text-black"
        } w-full text-center`}
      >
        Loading...
      </div>
    );

  if (listCountriesListFiltered.length === 0)
    return (
      <div
        className={`${
          darkTheme ? "text-white" : "text-black"
        } w-full text-center`}
      >
        No countries found
      </div>
    );
  return (
    <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-20 xl:gap-16 lg:gap-10 md:gap-16 sm:gap-4 justify-center align-middle max-w-screen-xl mt-10">
      {listCountriesListFiltered.map((country) => (
        <Country key={country.name} country={country} darkTheme={darkTheme} />
      ))}
    </div>
  );
}
