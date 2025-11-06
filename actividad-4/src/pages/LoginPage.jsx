import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const { values, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  useForm;
  const { username, password } = values;

  const handleSubmit = (event, onLogin) => {
    // prevenir que se reincie el formulario
    event.preventDefault();

    console.log(values);

    localStorage.setItem("isLogged", "true");

    navigate("/home");
  };

  return (
    <>
      <form
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm"
        onSubmit={(event) => handleSubmit(event, onLogin)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <input
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />

        <input
          className="w-full px-4 py-2 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password" // Cambiado a password por semántica
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />

        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
          Iniciar Sesion
        </button>
      </form>
      <div className="text-center mt-4 w-full max-w-sm">
        <button
          className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          onClick={handleReset}
        >
          Reiniciar Formulario
        </button>
      </div>
    </>
  );
};