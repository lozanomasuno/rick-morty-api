import { useEffect, useState } from "react";

function App(){
  const [characters, setCharacters] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return <div>
   <h1>Rick and Morty</h1>
    {
      characters.map(character => {
        return(
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        )
      })
    }
  </div>
}

export default App;