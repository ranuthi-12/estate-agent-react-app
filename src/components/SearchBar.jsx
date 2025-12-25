import React from 'react';

const SearchBar = ({ searchTerm,setSearchTerm }) => {
  return (
    <section>
      <h1>Believe in Finding it</h1>
      <h3>Search for the property you are looking for</h3>

      <form>
        {/* Location */}
        <label> Location / Postcode</label><br />
        <input type="search" value={searchTerm.location} placeholder="e.g. BR5, Orpington"
            onChange={(e) => 
                setSearchTerm({...searchTerm, location: e.target.value})
            }
        /><br /><br />

        {/* Property Type */}
        <label>Property Type</label><br />
        <select value={searchTerm.type}
            onChange={(e) =>
                setSearchTerm({...searchTerm, type: e.target.value})
            }
        >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
        </select><br /><br />

        {/* Bedrooms */}
        <label>Minimum Bedrooms</label><br />
        <select value={searchTerm.bedrooms}
            onChange={(e) =>
                setSearchTerm({...searchTerm, bedrooms: e.target.value})
            }
        >
            <option value="">Any</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
        </select><br /><br />

        {/* Price */}
        <label>Price Range (£)</label><br />
        <input type="number" value={searchTerm.minPrice} placeholder="Min"
            onChange={(e) => 
                setSearchTerm({...searchTerm, minPrice: e.target.value})
            }
        />
        <input type="number" value={searchTerm.maxPrice} placeholder="Max"
            onChange={(e) => 
                setSearchTerm({...searchTerm, maxPrice: e.target.value})
            }
        /><br /><br />

        {/* Date */}
        <label>Added After (Year)</label><br />
        <select value={searchTerm.year}
            onChange={(e) =>
                setSearchTerm({...searchTerm, year: e.target.value})
            }
        >
            <option value="">Any</option>
            <option value="2021">2021+</option>
            <option value="2022">2022+</option>
        </select><br /><br />


        <button type="button">Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
