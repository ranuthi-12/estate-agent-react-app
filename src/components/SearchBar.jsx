import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section id="search-bar" className="search-section">
      <div className="search-overlay">
        <div className="search-container">
            <h3 className="site-tagline">
               Find your perfect property
            </h3>
          <form className="search-form">

            {/* Location */}
            <div className="search-row-1">
                <div className="form-group">
                <label>Location / Postcode</label>
                <input
                    type="search"
                    className="input-field"
                    value={searchTerm.location}
                    placeholder="e.g. BR5, Orpington"
                    onChange={(e) =>
                    setSearchTerm({ ...searchTerm, location: e.target.value })
                    }
                />
                </div>
            </div>

            <div className="search-row-2">

              {/* Property Type */}
              <div className="form-group">
                <label>Property Type</label>
                <select
                  className="select-field"
                  value={searchTerm.type}
                  onChange={(e) =>
                    setSearchTerm({ ...searchTerm, type: e.target.value })
                  }
                >
                  <option value="">Any</option>
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>

              {/* Min Price */}
              <div className="form-group">
                <label>Min Price (£)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Min"
                  value={searchTerm.minPrice}
                  onChange={(e) =>
                    setSearchTerm({ ...searchTerm, minPrice: e.target.value })
                  }
                />
              </div>

              {/* Max Price */}
              <div className="form-group">
                <label>Max Price (£)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Max"
                  value={searchTerm.maxPrice}
                  onChange={(e) =>
                    setSearchTerm({ ...searchTerm, maxPrice: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="search-row-3">
                {/* Bedrooms */}
                <div className="form-group">
                    <label>Minimum Bedrooms</label>
                    <select
                    className="select-field"
                    value={searchTerm.bedrooms}
                    onChange={(e) =>
                        setSearchTerm({ ...searchTerm, bedrooms: e.target.value })
                    }
                    >
                    <option value="">Any</option>
                    <option value="1">+1</option>
                    <option value="2">+2</option>
                    <option value="3">+3</option>
                    <option value="4">+4</option>
                    </select>
                </div>

                {/* Year */}
                <div className="form-group">
                    <label>Added After (Year)</label>
                    <select
                        className="select-field"
                        value={searchTerm.year}
                        onChange={(e) =>
                            setSearchTerm({ ...searchTerm, year: e.target.value })
                        }
                        >
                        <option value="">Any</option>
                        <option value="2021">2021+</option>
                        <option value="2022">2022+</option>
                    </select>
                </div>
            </div>

            {/* Button */}
            <div className="search-row-4">
                <button type="submit" className="search-btn">
                  Search
                </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
