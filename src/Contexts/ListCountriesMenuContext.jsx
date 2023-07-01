import { createContext, useState } from "react";

export const ListCountriesMenuContext = createContext({
  searchText: "",
  setSearchText: () => {},
  region: "",
  setRegion: () => {},
});

export const ListCountriesMenuProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");

  const value = {
    searchText,
    setSearchText,
    region,
    setRegion,
  };

  return (
    <ListCountriesMenuContext.Provider value={value}>
      {children}
    </ListCountriesMenuContext.Provider>
  );
};
