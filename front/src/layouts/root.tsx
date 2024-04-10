import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="dark flex flex-col min-h-dvh bg-background text-foreground">
      <header className=" h-12 flex items-center border-b">
        <div className="container">
          <Link to="/">
            <h1 className="text-foreground font-bold">Gasazon</h1>
          </Link>
        </div>
      </header>
      <div className="flex-1 flex flex-col container">
        <Outlet />
      </div>
    </div>
  );
}
