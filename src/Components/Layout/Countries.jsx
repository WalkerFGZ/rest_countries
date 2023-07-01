import { ListCountriesDataProvider } from "../../Contexts/ListCountriesDataContext";
import FilterCountries from "../FilterCountries";
import ListCountries from "./ListCountries";

export default function Countries() {
  return (
    <section className="w-full bg-slate-100 px-24 flex flex-col justify-center items-center	">
      <ListCountriesDataProvider>
        <FilterCountries />
        <ListCountries />
      </ListCountriesDataProvider>
    </section>
  );
}
