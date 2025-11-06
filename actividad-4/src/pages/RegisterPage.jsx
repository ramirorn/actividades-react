import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Register = ({ onLogin }) => {
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

    // localStorage.setItem("isLogged", "true");

    // navigate("/home");
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event, onLogin)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />

        <button onClick={()=>{
          navigate("/login")
        }}>Registrar</button>
      </form>
      <div>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </>
  );
};
