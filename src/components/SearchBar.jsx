import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <section>
      <h1>Believe in Finding it</h1>
      <h3>Search for the property you are looking for</h3>

      <form>
        <label htmlFor="term">Search location or postcode</label><br />
        <input type="text" id="term" name="term" placeholder="Enter location or postcode"
            onChange={(e) => setSearchTerm(e.target.value)}
        /><br />

        <button type="button">For Sale</button>
        <button type="button">For Rent</button>
      </form>
    </section>
  );
};

export default SearchBar;
