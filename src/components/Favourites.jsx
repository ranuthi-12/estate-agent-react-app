import React from "react";

const Favourites = ({ favourites, removeFromFavourites, clearFavourites }) => {

    return (
        <aside className="favourites">
            <h3>Favourites</h3>

            {favourites.length === 0 && <p>No favourite properties yet.</p>}

            {favourites.map((property) => (
                <div key={property.id}>
                    <p>{property.type} - £{property.price}</p>
                    <button onClick={() => removeFromFavourites(property.id)}>
                        Remove
                    </button>
                </div>
            ))}

            {favourites.length > 0 && (
                <button onClick={clearFavourites}>
                    Clear All Favourites
                </button>
            )}
        </aside>
    )
}

export default Favourites;