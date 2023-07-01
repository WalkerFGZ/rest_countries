import { useContext } from "react";
import { ListCountriesMenuContext } from "../Contexts/ListCountriesMenuContext";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function FilterCountries() {
  const { searchText, setSearchText, region, setRegion } = useContext(
    ListCountriesMenuContext
  );
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className="w-full max-w-screen-xl flex flex-nowrap justify-between pt-10 font-nunito text-sm">
      <input
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        className={`${
          darkTheme
            ? "bg-dark-blue text-white shadow-slate-700 shadow-md "
            : "bg-white"
        } w-96 h-14 px-4 py-2 rounded-md shadow shadow-slate-400 border-none outline-none`}
        type="text"
        placeholder="Search for a country..."
      />

      <select
        name="Filter"
        className={`${
          darkTheme
            ? "bg-dark-blue text-white shadow-slate-700 shadow-md"
            : "bg-white"
        } w-52 h-14 px-4 py-2 rounded-md shadow shadow-slate-400 border-none outline-none font-medium`}
        id="filter-by-region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter By Region </option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}
