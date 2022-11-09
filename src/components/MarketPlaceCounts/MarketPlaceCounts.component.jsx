import React from "react";

const MarketPlaceCounts = (data) => {
  //   console.log(data);
  return (
    <div className="market-place-counts">
      <span>{data?.data.listings} Listing</span>
      <span>{data?.data.sources} Source</span>
      <span>{data?.data.brands} Brands</span>
      <span>{data?.data.referenceNumer} Ref Numbers</span>
    </div>
  );
};

export default MarketPlaceCounts;
