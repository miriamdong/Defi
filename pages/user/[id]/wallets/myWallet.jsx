import React, { useEffect, useState } from "react";
// import MyToken from "../../../../contracts/MyWallet.json";
// import { getWallet } from "../../../../components/Meta/utils.js";
// import getWeb3 from "../../../../hooks/useWeb3";
// import MyWallet from "../../../../contracts/MyWallet.json";
// import NewTransfer from "../../../../components/Meta/NewTransfer";
import Wallet from "../../../../components/Layout";

import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  { name: "History", href: "#", icon: CalendarIcon, current: false },
  { name: "My Wallet", href: "myWallet", icon: CreditCardIcon, current: true },
  { name: "Inbox", href: "inbox", icon: InboxIcon, count: 3, current: false },
  { name: "Community", href: "/blog", icon: UserGroupIcon, count: 12, current: false },
  { name: "Reports", href: "report", icon: ChartBarIcon, current: false },
];

function MetaWallet() {
  return (
    <>
      <Wallet />
    </>
  );
}
export default MetaWallet;
