import Tokennav from "../../../../components/token/tokennav";
import Buy from "../../../../components/token/buy";
import { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
// import Chart from "../../../../components/Meta/Chart";
import Token from "../../../../components/Meta/Token";

export default function Example() {
  const [projects, setProjects] = useState([]);

  return (
    <>
      <Tokennav href={"/user/SdyB5lXR6VSIiZGgTIQhCpvi07r1"} />
      {/* <Chart /> */}
      <Buy />
    </>
  );
}
