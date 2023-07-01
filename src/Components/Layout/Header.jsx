import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { darkTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${
        darkTheme ? "bg-dark-blue text-white" : "bg-white"
      } w-full h-16  flex justify-between place-items-center px-24 shadow-sm`}
    >
      <div>
        <p className="text-2xl font-bold">Where in the world?</p>
      </div>
      <div
        className="flex cursor-pointer gap-1"
        onClick={() => {
          toggleTheme();
        }}
      >
        <img src="src\Assets\theme_icon.svg" width={24} />
        <p className="text-base">Dark Mode</p>
      </div>
    </header>
  );
}
