import React from "react";

const Favourites = ({ favourites, removeFromFavourites, clearFavourites, addToFavourites }) => {

    const handleDrop = (e) => {
        e.preventDefault();
        const property = JSON.parse(
            e.dataTransfer.getData("property")
        );
        addToFavourites(property);
    };

    return (
        <aside className="favourites"
            onDragOver={(e) => e.preventDefault()}
            onDrop = {handleDrop}
        >
            <h3>Favourites</h3>

            {favourites.length === 0 && <p>Drag Properties Here.</p>}

            {favourites.map((property) => (
                <div 
                key={property.id}
                draggable
                onDragStart={(e) =>
                    e.dataTransfer.setData("propertyId", property.id)
                }
                >
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