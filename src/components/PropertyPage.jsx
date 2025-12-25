import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProperty = data.properties.find((p) => p.id === id);
        setProperty(foundProperty);
        setMainImage(foundProperty.images[0]);
      });
  }, [id]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <section className="property-page">
      {/* SHORT DESCRIPTION */}
      <h2>{property.type}</h2>
      <p>
        <strong>Price:</strong> £{property.price}
      </p>
      <p>
        <strong>Location:</strong> {property.location}
      </p>

      {/* IMAGE GALLERY */}
      <div className="image-gallery">
        <img src={`/${mainImage}`} alt="Main property" width="500" />

        <div className="thumbnails">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt={`Thumbnail ${index}`}
              width="100"
              onClick={() => setMainImage(img)}
              style={{ cursor: "pointer", margin: "5px" }}
            />
          ))}
        </div>
      </div>

      {/* REACT TABS */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
          <img src={`/${property.floorplan}`} alt="Floor Plan" width="500" />
        </TabPanel>

        <TabPanel>
          <iframe
            src={property.map}
            width="600"
            height="450"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default PropertyPage;
