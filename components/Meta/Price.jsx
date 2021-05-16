import React from "react";

export default function ({ ws, pair }) {
  const [price, setprice] = React.useState("0.00");

  React.useEffect(() => {
    //need to update event listener for the websocket object so that it is listening for the newly updated currency pair
    if (ws.current) {
      ws.current.onmessage = (e) => {
        e.preventDefault();
        let data = JSON.parse(e.data);
        console.log("data!!!!!!!", data);
        if (data.type !== "ticker") {
          console.log("no ticker event", e);
          return;
        }
        //every time we receive an even from the websocket for our currency pair, update the price in state
        if (data.product_id === pair) {
          setprice(data.price);
        }
      };
    }
  }, [ws, pair]);
  return <h2>{`$${price}`}</h2>;
}
