import React, { useEffect, useState } from "react";
import MyWallet from "../../contracts/MyWallet.json";
import MyToken from "../../contracts/MyToken.json";
import { getWeb3, getWallet } from "../../components/Meta/utils.js";
// import getWeb3 from "../../getWeb3";
import Wallet from "../../contracts/Wallet.json";
import NewTransfer from "../../components/Meta/NewTransfer";
import TransferList from "../../components/Meta/TransferList";

function MetaWallet() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [quorum, setQuorum] = useState(undefined);
  const [contract, setContract] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();

      // const getWallet = async (web3) => {
      //   const networkId = await web3.eth.net.getId();
      //   console.log(networkId);
      //   const deployedNetwork = MyToken.networks[networkId];
      //   console.log(MyWallet.networks, deployedNetwork);
      //   return new web3.eth.Contract(MyWallet.abi, deployedNetwork && deployedNetwork.address);
      // };

      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await contract.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();

      // const contract = new web3.eth.Contract(
      //   MyWallet.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
    });
  }, []);

  useEffect(() => {}, []);

  // async function createTransfer(e) {
  //   e.preventDefault();
  //   const amount = e.target.elements[0].value;
  //   const to = e.target.elements[1].value;
  //   await contract.methods.createTransfer(amount, to).send({ from: accounts[0] });
  //   await updateCurrentTransfer();
  // }

  const createTransfer = (transfer) => {
    wallet.methods.createTransfer(transfer.amount, transfer.to).send({ from: accounts[0] });
  };

  const approveTransfer = (transferId) => {
    wallet.methods.approveTransfer(transferId).send({ from: accounts[0] });
  };

  if (
    typeof web3 === "undefined" ||
    typeof accounts === "undefined" ||
    typeof wallet === "undefined" ||
    approvers.length === 0 ||
    typeof quorum === "undefined"
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Meta pt-40">
      <ul>
        <li>Approvers:{approvers.join(",")}</li>
        <li>Quorum: {quorum}</li>
      </ul>
      <div className="container pt-40">
        <h1 className="text-center">Multisig</h1>
        <div className="row">
          <div className="col-sm-12">
            <p>
              Balance: <b>{balance}</b> wei{" "}
            </p>
          </div>
        </div>
      </div>
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer} />
    </div>
  );
}
export default MetaWallet;
