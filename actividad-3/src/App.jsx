import { CharacterInfo } from "./components/CharacterInfo";
import { Loading } from "./components/Loading";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(1);
  const { data, loading, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <main className="container">
      <h1>Personajes de los simpsons</h1>

      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data && !loading && <CharacterInfo character={data} />}
      <div>
        <button onClick={handleDecrement}>Anterior</button>
        <button onClick={handleReset}>Inicio</button>
        <button onClick={handleIncrement}>Siguiente</button>
      </div>
    </main>
  );
}
export default App;
