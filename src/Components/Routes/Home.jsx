import Countries from "../Layout/Countries";
import Header from "../Layout/Header";

export default function Home({ darkTheme }) {
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
