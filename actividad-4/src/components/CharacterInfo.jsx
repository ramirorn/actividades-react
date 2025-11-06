export const CharacterInfo = ({ character }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm mx-auto my-4 w-full">
      <img
        className="w-full h-80 object-cover object-top"
        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
        alt={character.name}
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          {character.name}
        </h2>
        <p className="text-gray-700 text-lg mb-2">
nbsp;         <strong className="font-semibold text-gray-900">Estado: </strong>{" "}
          {character.status}
        </p>
        <p className="text-gray-700 text-lg mb-2">
          <strong className="font-semibold text-gray-900">
            Ocupacion:{" "}
          </strong>{" "}
          {character.occupation}
        </p>
        <p className="text-gray-700 text-lg">
          <strong className="font-semibold text-gray-900">Genero: </strong>{" "}
          {character.gender}
        </p>
      </div>
    </div>
  );
};