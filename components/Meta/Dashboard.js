import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import Price from "./Price";

function Dashboard({ price, data, ws, pair }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  if (price !== "0.00")
    return (
      <div className="dashboard text-sm font-medium text-gray-900">
        <Price ws={ws} pair={pair} />
        <div className="chart-container">
          <Line data={data} options={opts} />
        </div>
      </div>
    );
  return <h4>please select a currency pair</h4>;
}

export default Dashboard;
