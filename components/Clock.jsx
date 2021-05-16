import React from "react";
import Moment from "react-moment";

// export default function Clock() {
//   return <Moment interval={0} date="2022-11-1" durationFromNow />;
// }

export default class Clock extends React.Component {
  render() {
    return (
      <div>
        {/* <Moment diff="2021-04-19">2021-04-19T12:59-0500</Moment> */}
        <Moment diff="2021-04-19" unit="days">
          2021-04-30T12:59-0500
        </Moment>{" "}
        days to go
      </div>
    );
  }
}
