import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return(
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Gallery searchTerm={searchTerm} />
    </div>
  )
}

export default App
