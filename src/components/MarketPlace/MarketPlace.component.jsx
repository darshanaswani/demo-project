import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketPlaceAsyncData } from "../../store/marketplace/marketplace.actions";
import TopMarketPlace from "../TopMarketPlace/TopMarketPlace.component";
import MarketPlaceCounts from "../MarketPlaceCounts/MarketPlaceCounts.component";
import "./MarketPlace.styles.css";

const MarketPlace = () => {
  const dispatch = useDispatch();
  const [countsData, setCountsData] = useState({});
  const marketPlaceCountsData = useSelector(
    (state) => state.marketPlace.marketPlaceCounts
  );

  useEffect(() => {
    dispatch(fetchMarketPlaceAsyncData());
  }, []);

  useEffect(() => {
    setCountsData(marketPlaceCountsData);
  }, [marketPlaceCountsData]);

  return (
    <div className="market-place">
      <div className="market-place-container">
        <h2 className="market-place-heading">MARKET PLACE</h2>

        <MarketPlaceCounts data={countsData} />

        <TopMarketPlace />
      </div>
    </div>
  );
};

export default MarketPlace;
