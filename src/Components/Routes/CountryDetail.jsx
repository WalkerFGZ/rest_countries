import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "../../Contexts/ThemeContext";
import Header from "../Layout/Header";
import CountryDetails from "../CountryDetails";
import { ListCountriesDataContext } from "../../Contexts/ListCountriesDataContext";

function InnerDetails() {
  const { darkTheme } = useContext(ThemeContext);
  const { countriesList, loadingStatus } = useContext(ListCountriesDataContext);
  const { id } = useParams();
  return (
    <div
      className={`${
        darkTheme ? "bg-very-dark-blue" : "bg-white"
      } h-screen min-h-screen`}
    >
      <Header />
      <CountryDetails
        countriesList={countriesList}
        loadingStatus={loadingStatus}
        id={id}
      />
    </div>
  );
}

export default function CountryDetail() {
  return (
    <ThemeProvider>
      <InnerDetails />
    </ThemeProvider>
  );
}
