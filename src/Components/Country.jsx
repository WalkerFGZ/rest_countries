export default function Country({ key, country, darkTheme }) {
  const {
    name,
    population,
    region,
    capital,
    flags: { svg },
  } = country;
  return (
    <div
      key={key}
      className={`${
        darkTheme ? "bg-dark-blue text-white shadow-slate-900" : "bg-white"
      } w-full h-80  rounded-md shadow-lg`}
    >
      <div className="h-40 ">
        <img
          className="rounded-t-md w-full h-full object-cover"
          src={svg}
          alt={`${name} flag image`}
        />
      </div>
      <div className="pt-3 pl-5">
        <h3 className="font-bold text-lg pb-2">{name}</h3>
        <p>
          <span className="font-bold">Population:</span>{" "}
          {parseFloat(population).toLocaleString("en")}
        </p>
        <p>
          <span className="font-bold">Region:</span> {region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
