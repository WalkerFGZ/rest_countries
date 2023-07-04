import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import CountryDetail from "./Components/Routes/CountryDetail";
import { ListCountriesDataProvider } from "./Contexts/ListCountriesDataContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route
        path="/country/:id"
        element={
          <ListCountriesDataProvider>
            <CountryDetail />
          </ListCountriesDataProvider>
        }
      />
    </Routes>
  );
}

export default App;
