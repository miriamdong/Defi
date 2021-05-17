import React, { useState, useEffect, useRef } from "react";
import Dashboard from "../../components/Meta/Dashboard";
import { formatData } from "../../components/Meta/utils";
import Wallet from "../../components/Layout";

export default function App() {
  return (
    <div className="pt-40">
      <Wallet />
    </div>
  );
}
