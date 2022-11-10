import React from "react";
import "./MarketPlaceCounts.styles.css";

const MarketPlaceCounts = (data) => {
  return (
    <div className="market-place-counts-container">
      <span className="market-place-counts-link">
        {data?.data.listings} Listing
      </span>
      <span className="market-place-counts-link">
        {data?.data.sources} Source
      </span>
      <span className="market-place-counts-link">
        {data?.data.brands} Brands
      </span>
      <span className="market-place-counts-link">
        {data?.data.referenceNumber} Ref Numbers
      </span>
    </div>
  );
};

export default MarketPlaceCounts;
