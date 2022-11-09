import React, { useEffect, useState } from "react";
import LineChart from "../Chart/Chart.component";
import { fetchAuctionsAsyncData } from "../../store/auctions/auctions.actions";
import { useDispatch, useSelector } from "react-redux";

const Auctions = () => {
  const dispatch = useDispatch();
  const auctionsDataSelector = useSelector(
    (state) => state.auctions.auctionsData.data
  );
  console.log(auctionsDataSelector);

  const AuctionsData = {
    labels: auctionsDataSelector?.map((data) => data.title),
    datasets: [
      {
        label: "Sell Price",
        data: auctionsDataSelector?.map((data) => data.currencyPrice.realUsd),
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchAuctionsAsyncData());
  }, [dispatch]);

  return (
    <div className="auctions-container">
      <h2 className="auctions-title">Auctions</h2>

      <LineChart chartData={AuctionsData} />
    </div>
  );
};

export default Auctions;
