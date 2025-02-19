import { useState, useEffect } from "react";
import Image from "next/image";

const SeriesComponent = ({ product }) => {
  const [selectedSeries, setSelectedSeries] = useState("Grant");
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track expanded card
  const [isClicked, setIsClicked] = useState(false);

  // Get the series data from the product
  const seriesData = product.series;
  const currentSeries = seriesData.find(
    (series) => series.seriesName === selectedSeries
  );

  if (!currentSeries) {
    return <div>Loading...</div>; // Show loading if the series is not found
  }

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // If clicked again, collapse the card
      setIsClicked(false);
    } else {
      setExpandedIndex(index); // Expand the clicked card
      setIsClicked(true);
    }
  };

  const handleCloseSlide = () => {
    setExpandedIndex(null); // Close the slide by resetting expandedIndex
    setIsClicked(false);
  };

  // Lock and unlock the scroll when the slide is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [expandedIndex]);

  return (
    <div>
      {/* Series Selection */}
      <div className="flex space-x-6 mb-6 rounded-sm justify-center">
        {["Grant", "ATIS", "WePlus"].map((seriesName) => (
          <button
            key={seriesName}
            className={`px-8 py-2  text-white ${
              selectedSeries === seriesName ? "bg-black" : "bg-gray-600"
            }`}
            onClick={() => setSelectedSeries(seriesName)}
          >
            {seriesName}
          </button>
        ))}
      </div>

      {/* Series Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-7 py-5 gap-8 relative">
        {/* Cards for Products */}
        {currentSeries.products && currentSeries.products.length > 0 ? (
          currentSeries.products.map((product, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden w-60  ${
                expandedIndex === index
                  ? "scale-100 z-10 shadow-2xl transform"
                  : "scale-75" // Scale the card to 0.75 times
              } ${
                isClicked && expandedIndex !== index ? "filter blur-sm" : ""
              }`}
              onClick={() => handleCardClick(index)}
              style={{
                position: expandedIndex === index ? "fixed" : "relative",
                top: expandedIndex === index ? "50%" : "auto",
                left: expandedIndex === index ? "50%" : "auto",
                transform:
                  expandedIndex === index ? "translate(-50%, -50%)" : "none",
                zIndex: expandedIndex === index ? 9999 : "auto",
                width: expandedIndex === index ? "80vw" : "auto", // Adjust width of the expanded card
                height: expandedIndex === index ? "70vh" : "auto", // Adjust height for expanded card
                maxWidth: expandedIndex === index ? "900px" : "auto", // Limit max width for the expanded card
                borderRadius: expandedIndex === index ? "15px" : "0px", // Rounded corners for the expanded card
              }}
            >
              {/* Cross Button to Close the Slide */}
              {expandedIndex === index && (
                <button
                  onClick={handleCloseSlide}
                  className="absolute top-6 right-4 text-white bg-black px-2 rounded-full shadow-lg flex justify-center items-center"
                  aria-label="Close"
                >
                  ×
                </button>
              )}

              {/* Regular Card Image */}
              {expandedIndex !== index && (
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.productName}
                    layout="fill"
                    objectFit="contain" // Ensures the full image is visible
                    className="rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-md font-semibold mb-2">
                  {product.productName}
                </h3>
                {/* Optional description for the regular card */}
                {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
              </div>

              {/* Expanded card content with flexbox */}
              {expandedIndex === index && (
                <div className="flex flex-row mt-4 p-6 space-x-8">
                  {/* Image on the Left */}
                  <div className="flex-shrink-0 w-1/2 h-64">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      layout="responsive"
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>

                  {/* Content on the Right */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      {product.productName}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h5 className="font-semibold">Dimensions:</h5>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {product.dimensions.map((dimension, idx) => (
                          <li key={idx}>
                            {dimension.name}: {dimension.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No products available for this series.</p>
        )}
      </div>
    </div>
  );
};

export default SeriesComponent;
