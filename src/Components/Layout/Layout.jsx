import Header from "./Header.jsx";
import Countries from "./Countries.jsx";

export default function Layout() {
  return (
    <div className="h-screen bg-slate-100">
      <Header />
      <Countries />
    </div>
  );
}
