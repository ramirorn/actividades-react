import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <nav className="bg-blue-200 p-2 text-dark w-full flex justify-between">
      <Link to="/home" className="mr-4 hover:text-blue-800">
        Home
      </Link>
      <button
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
