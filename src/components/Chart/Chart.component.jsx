import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
  return <Line data={chartData} width={1000} height={350} />;
};

export default LineChart;
