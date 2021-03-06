import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";
import { formatData } from "./utils";
// import "./styles.css";

export default function Chart() {
  const [currencies, setcurrencies] = useState([]);
  const [pair, setpair] = useState("");
  const [pastData, setpastData] = useState({});
  const ws = useRef(null);

  let first = useRef(false);
  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    //connect to websocket API
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    ws.current.onmessage = function (e) {
      console.log("e.data", e.data);
    };

    //inside useEffect we need to make API with async function
    let pairs = [];

    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));
      //coinbase returns over 120 currencies, this will filter to only USD based pairs
      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          console.log(pair);
          return pair;
        }
      });
      //sort filtered currency pairs alphabetically
      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1;
        }
        if (a.base_currency > b.base_currency) {
          return 1;
        }
        return 0;
      });

      setcurrencies(filtered);
      first.current = true;
    };

    apiCall();
  }, []);

  useEffect(() => {
    //prevents this hook from running on initial render
    if (!first.current) {
      return;
    }

    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    let jsonMsg = JSON.stringify(msg);
    console.log("jsonMsg", jsonMsg);
    ws.current.send(jsonMsg);

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
    const fetchHistoricalData = async () => {
      let dataArr = [];
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data));
      //helper function to format data that will be implemented later
      let formattedData = formatData(dataArr);
      setpastData(formattedData);
    };
    //run async function to get historical data
    fetchHistoricalData();

    //dependency array is passed pair state, will run on any pair state change
  }, [pair]);

  const handleSelect = (e) => {
    // console.log("ticker", e.target.value);
    // let unsubMsg = {
    //   type: "unsubscribe",
    //   product_ids: [pair],
    //   channels: ["ticker"],
    // };
    // let unsub = JSON.stringify(unsubMsg);
    // console.log("unsub", unsub);
    // ws.current.send(unsub);
    setpair(e.target.value);
  };

  return (
    <div className="w-10/12 h-3/4 text-sm font-medium text-gray-900">
      {
        <select name="currency" value={pair} onChange={handleSelect}>
          {currencies.map((cur, idx) => {
            return (
              <option key={idx} value={cur.id}>
                {cur.display_name}
              </option>
            );
          })}
        </select>
      }
      <Dashboard ws={ws} pair={pair} data={pastData} />
    </div>
  );
}
