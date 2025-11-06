import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <nav className="bg-blue-600 text-white p-4 w-full flex justify-between items-center shadow-md">
      <Link
        className="text-xl font-bold hover:text-blue-200 transition-colors"
        to="/home"
      >
        Home
      </Link>
      <button
        className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 transition-all text-sm"
        onClick={() => {
          localStorage.removeItem("isLogged");
          Navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
};