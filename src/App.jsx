import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'

function App() {
  const [searchTerm, setSearchTerm] = useState({
    location: "",
    type: "",
    bedrooms:"",
    minPrice: "",
    maxPrice: "",
    year: ""
  });
  
  return(
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Gallery searchTerm={searchTerm} />
    </div>
  )
}

export default App
