import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import { Routes, Route} from 'react-router-dom';
import PropertyPage from './components/PropertyPage';

function App() {
  const [searchTerm, setSearchTerm] = useState({
    location: "",
    type: "",
    bedrooms:"",
    minPrice: "",
    maxPrice: "",
    year: ""
  });

  const [favourites, setFavourites] = useState([]);
  
  return(
    <Routes>

      {/* Search Page */}
      <Route path='/' element={
        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Gallery 
            searchTerm={searchTerm} 
            favourites={favourites}
            setFavourites={setFavourites} 
          />
        </div>
      } />

      {/* Property Details Page */}
      <Route path='/property/:id' element={<PropertyPage />} />
    </Routes>
  )
}

export default App
