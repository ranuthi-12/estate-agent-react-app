import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.properties);
      })
      .catch((error) => {
        console.error("Error loading properties:", error);
      });
  }, []);

  return (
    <section className="gallery">
      {properties.map((property) => (
        <ImageCard key={property.id} property={property} />
      ))}
    </section>
  );
};

export default Gallery;

