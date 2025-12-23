import React from 'react';

const SearchBar = () => {
  return (
    <section>
      <h1>Believe in Finding it</h1>
      <h3>Search for the property you are looking for</h3>

      <form>
        <label htmlFor="term">Search location or postcode</label><br />
        <input type="text" id="term" name="term" /><br />

        <button type="button">For Sale</button>
        <button type="button">For Rent</button>
      </form>
    </section>
  );
};

export default SearchBar;
