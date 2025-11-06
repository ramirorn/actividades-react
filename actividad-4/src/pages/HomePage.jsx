import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Navbar } from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";

export const Home = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(1);
  const { loading, data, error } = useFetch(`https://thesimpsonsapi.com/api/characters/${count}`);

  return (
    <>
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
    </>
  );
};
