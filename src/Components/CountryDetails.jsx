import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

function BorderCountry({ borderName, key }) {
  return (
    <p className="border py-1 px-9 shadow-sm " key={key}>
      {borderName.toLowerCase()}
    </p>
  );
}
export default function CountryDetails({ countriesList, loadingStatus, id }) {
  const navigate = useNavigate();
  const { darkTheme } = useContext(ThemeContext);
  const data = useMemo(
    () =>
      countriesList?.filter(
        (country) => country?.name.toLowerCase() === id?.toLowerCase()
      )[0],
    [countriesList, id]
  );
  if (loadingStatus === "loading" && countriesList.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button
        className={`${
          darkTheme
            ? "bg-dark-blue hover:bg-slate-700 text-white border-none shadow-lg"
            : "bg-white hover:bg-gray-100 text-gray-800 border-gray-400"
        } ml-24 mt-24 md:mt-10   font-semibold py-2 px-4 border  rounded shadow-md`}
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="max-h-96 2xl:grid xl:grid lg:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:flex md:flex-col md:gap-0 sm:gap-0 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1  md:mt-4 justify-items-center center items-start mt-16	px-24 h-100 gap-36">
        <div className="w-full h-full pr-14 md:w-auto md:h-auto">
          <img src={data?.flag} className="w-full h-full object-cover" />
        </div>
        <div
          className={`${
            darkTheme ? "text-white" : "text-black"
          } w-full md:mt-5 sm:mt-5`}
        >
          <h2 className="text-3xl font-bold">{data?.name}</h2>
          <div className="mt-8 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 leading-9">
            <div>
              <ul className="">
                <li>
                  <strong>Native Name: </strong> {data?.nativeName}
                </li>
                <li>
                  <strong>Population: </strong> {data?.population}
                </li>
                <li>
                  <strong>Region: </strong> {data?.region}
                </li>
                <li>
                  <strong>Sub Region: </strong> {data?.subregion}
                </li>
                <li>
                  <strong>Capital: </strong> {data?.capital}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <strong>Top Level Domain: {data?.topLevelDomain[0]}</strong>
                </li>
                <li>
                  <strong>Currencies: </strong>
                  {data?.currencies.map((c) => c.name).join(", ")}
                </li>
                <li>
                  <strong>Languages: </strong>{" "}
                  {data?.languages.map((c) => c.name).join(", ")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-16">
            <strong className="mr-1">Border Countries:</strong>
            <div className="flex gap-3">
              {data?.borders.map((border, index) => (
                <BorderCountry borderName={border} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
