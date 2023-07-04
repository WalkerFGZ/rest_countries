import { ThemeContext, ThemeProvider } from "../../Contexts/ThemeContext.jsx";
import { useContext } from "react";
import Home from "../Routes/Home.jsx";

function Inner() {
  const { darkTheme } = useContext(ThemeContext);
  return <Home darkTheme={darkTheme} />;
}

export default function Layout() {
  return (
    <ThemeProvider>
      <Inner />;
    </ThemeProvider>
  );
}
