import React from "react";
import { useSelector } from "react-redux";
import "./MarketPlaceTable.styles.scss";

const MarketPlaceTable = () => {
  const top3MarketPlace = useSelector(
    (state) => state.marketPlace.top3MarketPlace
  );
  return (
    <div className="marketplace-table">
      <table className="table-heading">
        <thead>
          <th>Country/Area</th>
          <th>Total Listing</th>
          <th>Less than $5K</th>
          <th>5k - 10k</th>
          <th>More than $50k</th>
          <th>Total Value</th>
        </thead>

        <tbody>
          {top3MarketPlace.map((data) => {
            return (
              <tr key={data.countryId}>
                <td>{data.countryName}</td>
                <td>{data.totalListings}</td>
                <td>{data.priceLessThan5}</td>
                <td>{data.price5toLessThen50}</td>
                <td>{data.priceEqualGreaterThan50}</td>
                <td>{data.totalValuePrice.totalValueUsd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketPlaceTable;
