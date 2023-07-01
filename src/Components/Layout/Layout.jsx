import Header from "./Header.jsx";
import Countries from "./Countries.jsx";
import { ThemeContext, ThemeProvider } from "../../Contexts/ThemeContext.jsx";
import { useContext } from "react";

function Inner() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkTheme ? "bg-very-dark-blue" : "bg-white"
      } h-screen min-h-screen`}
    >
      <Header />
      <Countries />
    </div>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <Inner />;
    </ThemeProvider>
  );
}
