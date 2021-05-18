import React, { useEffect, useState } from "react";
import MyToken from "../../../../contracts/MyWallet.json";
import { getWallet } from "../../../../components/Meta/utils.js";
import getWeb3 from "../../../../hooks/useWeb3";
import MyWallet from "../../../../contracts/MyWallet.json";
import NewTransfer from "../../../../components/Meta/NewTransfer";
import Wallet from "../../../../components/Layout";

function MetaWallet() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      let web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await web3.eth.accounts.wallet;
      const networkId = await web3.eth.getChainId();
      console.log(networkId);
      const deployedNetwork = MyWallet.networks[networkId];

      const contract = new web3.eth.Contract(
        MyWallet.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log({ contract });
      // const approvers = await contract.methods.getApprovers().call();
      // const quorum = await contract.methods.quorum().call();
      const transfers = await contract.methods.getTransfers().call();
      console.log("transfers", transfers);

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setTransfers(transfers);
    };

    init();
    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
    });
  }, []);

  async function watchEtherTransfers() {
    // Instantiate web3 with WebSocket provider
    let web3 = await getWeb3();

    // Instantiate subscription object
    const subscription = web3.eth.subscribe("pendingTransactions");

    // Subscribe to pending transactions
    subscription
      .subscribe((error, result) => {
        if (error) console.log(error);
      })
      .on("data", async (txHash) => {
        try {
          // Instantiate web3 with HttpProvider
          const web3Http = new Web3("https://rinkeby.infura.io/");

          // Get transaction details
          const trx = await web3Http.eth.getTransaction(txHash);

          const valid = validateTransaction(trx);
          // If transaction is not valid, simply return
          if (!valid) return;

          const receipt = web3.eth.getTransactionReceipt(trx).then(console.log);

          console.log(
            "Found incoming Ether transaction from " +
              process.env.WALLET_FROM +
              " to " +
              process.env.WALLET_TO,
          );
          console.log("Transaction value is: " + process.env.AMOUNT);
          console.log("Transaction hash is: " + txHash + "\n");

          // Initiate transaction confirmation
          confirmEtherTransaction(txHash);

          // Unsubscribe from pending transactions.
          subscription.unsubscribe();
        } catch (error) {
          console.log(error);
        }
      });
  }

  const createTransfer = (transfer) => {
    wallet.methods.createTransfer(transfer.amount, transfer.to).send({ from: accounts[0] });
  };
  console.log("transfers", { transfers });

  if (typeof web3 === "undefined" || typeof accounts === "undefined") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Wallet />
      {/* <div className="Meta pt-40">
        <div className="row">
          <div className="col-sm-12">
            <p>
              Balance: <b>{balance}</b> wei{" "}
            </p>
          </div>
        </div>
      </div> */}
      {/* <NewTransfer createTransfer={createTransfer} />
      <div>
        <h2>Transfers</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>to</th>
              <th>sent</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => (
              <tr key={transfer.id}>
                <td>{transfer.id}</td>
                <td>{transfer.amount}</td>
                <td>{transfer.to}</td>
                <td>{transfer.sent ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
export default MetaWallet;
