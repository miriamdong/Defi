import Link from "next/link";
import MetaWallet from "./myWallet";
import MyInbox from "./inbox";

export default function wallets() {
  return (
    <div>
      <Link href="">
        <MetaWallet />
      </Link>
      <Link href="">
        <MyInbox />
      </Link>
    </div>
  );
}
