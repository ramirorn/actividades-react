import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Navbar } from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";

export const Home = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(1);
  const { loading, data, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <>
      <main className="container mx-auto p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">
          Personajes de los Simpsons
        </h1>

        {loading && <Loading />}
        {error && (
          <p className="text-red-500 bg-red-100 p-4 rounded-lg">
            {error.message}
          </p>
        )}
        {data && !loading && <CharacterInfo character={data} />}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-all disabled:opacity-50"
            onClick={handleDecrement}
          >
            Anterior
          </button>
          <button
            className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-600 transition-all"
            onClick={handleReset}
          >
            Inicio
          </button>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-all"
            onClick={handleIncrement}
          >
            Siguiente
          </button>
        </div>
      </main>
    </>
  );
};