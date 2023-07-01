export default function FilterCountries() {
  return (
    <div className="w-full max-w-screen-xl flex flex-nowrap justify-between pt-10 font-nunito text-sm">
      <input
        className="w-96 h-14 px-4 py-2 rounded-md shadow shadow-slate-400 border-none outline-none"
        type="text"
        placeholder="Search for a country..."
      />

      <select
        name="Filter"
        className="w-52 h-14 px-4 py-2 rounded-md shadow shadow-slate-400 border-none outline-none font-medium"
        id="filter-by-region"
      >
        <option>Filter By Region </option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}
