import React from "react";
import Moment from "react-moment";

export default class Clock extends React.Component {
  render() {
    return <Moment date="2022-11-1T12:59-0500" durationFromNow />;
  }
}
