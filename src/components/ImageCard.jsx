import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ property, addToFavourites }) => {
  const {
    id,
    type,
    bedrooms,
    price,
    tenure,
    description,
    location,
    picture,
    added
  } = property;

  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", 
      JSON.stringify(property)
    );
  }

  return (
    <article className="property-card"
        draggable
        onDragStart={handleDragStart}
    >
      <div className="property-image-wrapper">
        <img src={`${import.meta.env.BASE_URL}${picture}`} alt={type} className="property-image"/>
        <div className="property-badge">{tenure}</div>
      </div>

      <div className="property-content">

        <div className="property-price">£{price.toLocaleString()}</div>
        <h3 className="property-title">{type}</h3>
        <p>{bedrooms} bed</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>
          Added: {added.month} {added.day}, {added.year}
        </p>

        <div className="mt-auto">
          <Link to={`/property/${id}`} className="btn btn-outline-primary btn-sm me-2">
            View Property
          </Link>

          <button className="btn btn-primary btn-sm" onClick={() => addToFavourites(property)}>
            Add to Favourites
          </button>
        </div>
      </div>
    </article>
  );
};

export default ImageCard;
