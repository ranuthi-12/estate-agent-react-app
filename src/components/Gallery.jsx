import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Favourites from "./Favourites";

const Gallery = ({searchTerm, favourites, setFavourites}) => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => { setProperties(data.properties)})
      .catch((error) => {
        console.error("Error loading properties:", error);
      });
  }, []);


  // Add to Favourites
  const addToFavourites = (property) => {
    if(!favourites.find((fav) => fav.id === property.id))
      setFavourites([...favourites, property]);
  }

  //Remove From Favourites
  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
  }

  const filteredProperties = properties.filter((property) => {
    return (
        //Location filter 
        (!searchTerm.location || property.location.toLowerCase().includes(searchTerm.location.toLowerCase())) &&

        //Property Type filter
        (!searchTerm.type || property.type === searchTerm.type) &&

        //Bedrooms filter
        (!searchTerm.bedrooms || property.bedrooms >= Number(searchTerm.bedrooms)) &&

        //Price filter
        (!searchTerm.minPrice || property.price >= Number(searchTerm.minPrice)) &&
        (!searchTerm.maxPrice || property.price <= Number(searchTerm.maxPrice)) &&

        //Date Added filter
        (!searchTerm.year || property.added.year >= Number(searchTerm.year))
    );
  });

  const handleRemoveDrop = (e) => {
    e.preventDefault();
    const propertyId =
      e.dataTransfer.getData("propertyId");
    if (propertyId) {
      removeFromFavourites(propertyId);
    }
  };


  return (
    <section className="gallery">

      {/* Search Results */}
      <div 
        className="results"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleRemoveDrop}
      >
        {filteredProperties.length === 0 ? (
          <p>No properties match your search criteria.</p>
        ) : (

          filteredProperties.map((property) => (
              <ImageCard key={property.id} property={property} addToFavourites={addToFavourites} />
          ))
        )}
      </div>

      {/* Favourites Sidebar */}
      <Favourites
        favourites={favourites}
        removeFromFavourites={removeFromFavourites}
        clearFavourites={() => setFavourites([])}
        addToFavourites={addToFavourites}
      />
    </section>
  );
};

export default Gallery;

