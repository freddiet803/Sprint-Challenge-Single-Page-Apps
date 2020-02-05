import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import SearchForm from './SearchForm.js';
import styled from 'styled-components';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [clickyState, setClickyState] = useState(false);

  const setSearchArray = someString => {
    const items = characters.filter(term =>
      term.name.toLowerCase().includes(someString.toLowerCase())
    );
    //console.log(items);
    setCharacters(items);
  };

  const resetHit = () => {
    setClickyState(!clickyState);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function getEm() {
      try {
        const theChars = await axios.get(
          'https://rickandmortyapi.com/api/character/'
        );
        //console.log(theChars.data.results);
        setCharacters(theChars.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getEm();
  }, [clickyState]);

  const FormatList = styled.section`
    display: flex;
    flex-flow: row wrap;
  `;

  return (
    <FormatList className="character-list">
      <SearchForm
        func={setSearchArray}
        reset={resetHit}
        style="margin-bottom: 1.5rem"
      />
      {characters.map(character => {
        return <CharacterCard key={character.id} charac={character} />;
      })}
    </FormatList>
  );
}
