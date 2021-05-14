import React, { useEffect, useState } from "react";
import MyToken from "../../../contracts/MyToken.json";
import getWeb3 from "../../../getWeb3";
import Escrow from "../../../contracts/Escrow.json";
import MyWallet from "../../../contracts/MyWallet.json";

function Invest() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [transfers, setTransfers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [myToken, setMyToken] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const wallet = await web3.eth.accounts.wallet;
      console.log(wallet);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MyToken.networks[networkId];
      const invest = new web3.eth.Contract(
        MyWallet.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(invest);
      const token = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);
      console.log(token);

      // console.log(`mmmmmmmm: ${await contract.methods.data().call()}`);
      // console.log(`Transaction hash: ${receipt.transactionHash}`);
      // const quorum = await contract.methods.quorum().call();

      // console.log(MyToken.networks[this.networkId].address);

      setWeb3(web3);
      setAccounts(accounts);
      // setQuorum(quorum);
      setWallet(wallet);
      setTransfers(transfers);
      setContract(contract);
    };
    init();
    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
      setMyToken(token);
      listenToTokenTransfer();
    });
  }, []);

  useEffect(() => {
    if (typeof contract !== "undefined" && typeof web3 !== "undefined") {
      updateBalance();
      // updateCurrentTransfer();
    }
  }, [accounts, contract, web3]);

  async function updateBalance() {
    const balance = await web3.eth.getBalance(contract.options.address);
    console.log(balance);
    setBalance(balance);
  }

  const updateUserTokens = async () => {
    let userTokens = await contract.methods.balanceOf(accounts[0]).call();
    setState({ userTokens: userTokens });
  };

  const listenToTokenTransfer = async () => {
    myToken.events.Transfer({ to: accounts[0] }).on("data", updateUserTokens);
  };

  const handleSubmit = async () => {
    let result = await invest.methods.createItem(invest, cost).send({ from: accounts[0] });
    console.log(result);
    alert("Send " + cost + " Wei to " + result.events.state.returnValues._address);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  const listenToPaymentEvent = () => {
    invest.events.state().on("data", async function (e) {
      if (e.returnValues._step == 1) {
        let newE = await invest.methods.items(e.returnValues._index).call();
        console.log(newE);
      }
      console.log(e);
    });
  };

  if (!web3) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row" style={{ padding: "150px" }}>
      <div className="col-sm-12">
        <h1>Escrow</h1>
        <h2>Create Project</h2>
        Tokens: <input type="text" name="cost" value={"000"} onChange={handleInputChange} />
        <p>
          Item Name:{"000000 "}
          <input type="text" name="itemName" value={"0000"} onChange={handleInputChange} />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Create new Item
          </button>
        </p>
        <p>{}</p>
      </div>
    </div>
  );
}
export default Invest;
