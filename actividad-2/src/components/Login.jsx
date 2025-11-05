import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const localUser = JSON.parse(localStorage.getItem("userData"));

    if (!localUser) {
      alert("No se encontro el usuario");
      return;
    }
    if (
      localUser.email === values.email &&
      localUser.password === values.password
    ) {
      onLogin(localUser.username);
      alert("Inicio de sesion correcto");
    } else {
      alert("Error al iniciar sesion");
    }
  };

  return (
    <div className="form-main">
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electronico"
          value={values.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>
          Iniciar sesion
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};
