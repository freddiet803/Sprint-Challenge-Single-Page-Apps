import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function getEm() {
      try {
        const theChars = await axios.get(
          'https://rickandmortyapi.com/api/character/'
        );
        console.log(theChars.data.results);
        setCharacters(theChars.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getEm();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return <CharacterCard charac={character} />;
      })}
    </section>
  );
}
