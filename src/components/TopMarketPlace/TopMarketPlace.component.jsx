import React from "react";
import MarketPlaceTable from "../MarketPlaceTable/MarketPlaceTable.component";
import "./TopMarketPlace.styles.css";

const TopMarketPlace = () => {
  return (
    <div className="topmarket-place-container">
      <p className="table-heading">Top 3 Markets</p>
      <MarketPlaceTable />
    </div>
  );
};

export default TopMarketPlace;
