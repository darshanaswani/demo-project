import React, { useEffect, useState } from "react";
import LineChart from "../Chart/Chart.component";
import { fetchAuctionsAsyncData } from "../../store/auctions/auctions.actions";
import { useDispatch, useSelector } from "react-redux";
import "./Auctions.styles.css";

const Auctions = () => {
  const dispatch = useDispatch();
  const auctionsDataSelector = useSelector(
    (state) => state.auctions.auctionsData.data
  );

  const AuctionsData = {
    labels: auctionsDataSelector?.map((data) => data.title),
    datasets: [
      {
        label: "Sell Price",
        data: auctionsDataSelector?.map((data) => data.currencyPrice.realUsd),
        borderColor: "#cc8614",
        borderWidth: 3,
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchAuctionsAsyncData());
  }, [dispatch]);

  return (
    <div className="auctions-container">
      <div className="auctions-title-container">
        <h2 className="auctions-title">AUCTIONS</h2>
      </div>
      <div style={{ width: 1100 }}>
        <LineChart chartData={AuctionsData} />
      </div>
    </div>
  );
};

export default Auctions;
