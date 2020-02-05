import React, { useState } from 'react';

export default function SearchForm(props) {
  const [searchChar, setSearchChar] = useState('');

  const addFormMember = event => {
    setSearchChar(event.target.value);
    //console.log({ searchChar });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.func(searchChar);
    //console.log(searchChar);
  };

  const handleReset = event => {
    event.preventDefault();
    props.reset();
    //document.getElementById('theSearchBar').val(' ');
    //TODO clear the form inputs after a reset
    setSearchChar('');
  };

  return (
    <section className="search-form">
      <form id="myForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchbar"
          value={searchChar}
          onChange={addFormMember}
          id="theSearchBar"
        />
        <button type="submit">Search</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </section>
  );
}
