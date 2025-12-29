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
        <aside
            id="favourites" 
            className="fav-sidebar"
            onDragOver={(e) => e.preventDefault()}
            onDrop = {handleDrop}
        >
            <div className="fav-header">
               <h3>Favourites</h3>
            </div>

            {favourites.length === 0 && <p>Drag Properties Here.</p>}

            <div className="fav-list">
                {favourites.map((property) => (
                    <div 
                        key={property.id}
                        className="fav-item"
                        draggable
                        onDragStart={(e) =>
                            e.dataTransfer.setData("propertyId", property.id)
                        }
                    >
                        <div className="fav-item-info">
                            <p>{property.type} - £{property.price}</p>
                        </div>
                        <button className="btn-remove" onClick={() => removeFromFavourites(property.id)}>
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {favourites.length > 0 && (
                <button className="btn-clear" onClick={clearFavourites}>
                    Clear All Favourites
                </button>
            )}
        </aside>
    )
}

export default Favourites;