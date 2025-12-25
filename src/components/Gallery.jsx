import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Gallery = ({searchTerm}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => { setProperties(data.properties)})
      .catch((error) => {
        console.error("Error loading properties:", error);
      });
  }, []);

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
        (!searchTerm.year || property.year >= Number(searchTerm.year))
    );
  });

  return (
    <section className="gallery">
      {filteredProperties.length === 0 ? (
        <p>No properties match your search criteria.</p>
      ) : (

        filteredProperties.map((property) => (
            <ImageCard key={property.id} property={property} />
        ))
    )}
    </section>
  );
};

export default Gallery;

