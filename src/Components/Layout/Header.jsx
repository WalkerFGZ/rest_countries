export default function Header() {
  return (
    <header className="w-full h-16 bg-white flex justify-between place-items-center px-24 shadow-sm">
      <div>
        <p className="text-2xl font-bold">Where in the world?</p>
      </div>
      <div className="flex cursor-pointer gap-1">
        <img src="src\Assets\theme_icon.png" width={20} />
        <p className="text-base">Dark Mode</p>
      </div>
    </header>
  );
}
