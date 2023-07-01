import { useContext } from "react";
import { ListCountriesDataProvider } from "../../Contexts/ListCountriesDataContext";
import { ListCountriesMenuProvider } from "../../Contexts/ListCountriesMenuContext";
import FilterCountries from "../FilterCountries";
import ListCountries from "./ListCountries";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Countries() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <section
      className={`${
        darkTheme ? "bg-very-dark-blue " : "bg-slate-100"
      } w-full px-24 flex flex-col justify-center items-center`}
    >
      <ListCountriesDataProvider>
        <ListCountriesMenuProvider>
          <FilterCountries />
          <ListCountries />
        </ListCountriesMenuProvider>
      </ListCountriesDataProvider>
    </section>
  );
}
