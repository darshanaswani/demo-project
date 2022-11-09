import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketPlaceAsyncData } from "../../store/marketplace/marketplace.actions";
import MarketPlaceTable from "../MarketPlaceTable/MarketPlaceTable.component";
import MarketPlaceCounts from "../MarketPlaceCounts/MarketPlaceCounts.component";

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
    <div className="market-place-container">
      <h2>MARKET PLACE</h2>

      <MarketPlaceCounts data={countsData} />

      <h3>TOP 3 MARKET PLACES</h3>
      <MarketPlaceTable />
    </div>
  );
};

export default MarketPlace;
