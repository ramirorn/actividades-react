
export const CharacterInfo = ({ character }) => {
  return (
    <div className="character-card">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
        alt={character.name}
      />
      <h2>{character.name}</h2>
      <p>
        <strong>Estado: </strong> {character.status}
      </p>
      <p>
        <strong>Ocupacion: </strong> {character.occupation}
      </p>
      <p>
        <strong>Genero: </strong> {character.gender}
      </p>
    </div>
  );
};
