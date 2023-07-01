import { createContext } from "react";
import useListCountriesData from "../Hooks/useListCountriesData";

export const ListCountriesDataContext = createContext({
  countriesList: [],
  loadingStatus: "",
});

export const ListCountriesDataProvider = ({ children }) => {
  const { countriesList, loadingStatus } = useListCountriesData();
  const value = { countriesList, loadingStatus };

  return (
    <ListCountriesDataContext.Provider value={value}>
      {children}
    </ListCountriesDataContext.Provider>
  );
};
