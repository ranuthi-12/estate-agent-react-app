import React from "react";

const ImageCard = ({ property }) => {
  const {
    type,
    bedrooms,
    price,
    tenure,
    description,
    location,
    picture,
    added
  } = property;

  return (
    <article className="property-card">
      <img src={`/${picture}`} alt={type} />

      <h3>{type}</h3>
      <p><strong>Price:</strong> £{price}</p>
      <p><strong>Bedrooms:</strong> {bedrooms}</p>
      <p><strong>Tenure:</strong> {tenure}</p>
      <p><strong>Location:</strong> {location}</p>

      <p>
        <strong>Added:</strong>{" "}
        {added.month} {added.day}, {added.year}
      </p>

      <p>{description}</p>

      <button>Add to Favourites</button>
    </article>
  );
};

export default ImageCard;
