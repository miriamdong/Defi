import React, { useEffect, useState } from "react";
import MyToken from "../../contracts/MyToken.json";
import MyTokenSale from "../../contracts/MyTokenSale.json";
// import KycContract from "../../contracts/KycContract.json";
import getWeb3 from "../../hooks/useWeb3";

function Token() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [myToken, setMyToken] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  const [tokenSaleAddress, setTokenSaleAddress] = useState(0);
  const [value, setValue] = useState(1);
  const [myTokenSale, setMyTokenSale] = useState(undefined);

  useEffect(() => {
    console.log("here");
    init().then(() => {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccounts(accounts);
        setMyToken(myToken);
        listenToTokenTransfer();
      });
    });
  }, []);

  const init = async () => {
    console.log("init");
    const web3 = await getWeb3();
    console.log({ web3 });
    const accounts = await web3.eth.getAccounts();
    const wallet = await web3.eth.accounts.wallet;
    console.log({ wallet });
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MyToken.networks[networkId];
    const myToken = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);
    const myTokenSale = new web3.eth.Contract(
      MyTokenSale.abi,
      MyTokenSale.networks[networkId] && MyTokenSale.networks[networkId].address,
    );
    let myBalance = await myToken.methods.balanceOf(accounts[0]).call();
    console.log("balance:", balance);

    // console.log(`mmmmmmmm: ${await contract.methods.data().call()}`);
    // console.log(`Transaction hash: ${receipt.transactionHash}`);
    setWeb3(web3);
    setAccounts(accounts);
    setMyToken(myToken);
    setBalance(myBalance);
    setMyTokenSale(myTokenSale);
    console.log("ddddd", myToken);
    console.log("fffffff", myToken.events);
    console.log("sale", myTokenSale);

    listenToTokenTransfer(myToken);
    setLoaded(true);
    updateUserTokens();
    // console.log({ updateUserTokens });
    if (myTokenSale && Object.keys(myTokenSale).length) {
      setTokenSaleAddress(myTokenSale._address);
    }
  };

  useEffect(() => {
    if (typeof contract !== "undefined" && typeof web3 !== "undefined") {
      updateBalance();
      // updateCurrentTransfer();
    }
  }, [accounts, myToken, web3, myTokenSale]);

  // useEffect(() => {
  //   listenToTokenTransfer();
  //   setLoaded(true);
  //   // setBalance({ updateUserTokens });
  //   if (myTokenSale && Object.keys(myTokenSale).length) {
  //     setTokenSaleAddress(myTokenSale._address);
  //   }
  // }, []);

  async function updateBalance() {
    console.log("called?????");
    const balance = await web3.eth.getBalance(contract.options.address);
    console.log("balance", balance);
    setBalance(balance);
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "textarea" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    setValue({ [name]: value });
    console.log("pppp:", event.target.value);
  };

  const handleBuyToken = async () => {
    console.log("value:", value);
    await myTokenSale.methods
      .buyTokens(accounts[0])
      .send({ from: accounts[0], value: value.Tokens });
  };

  const updateUserTokens = async () => {
    console.log("working?");
    let userTokens = await myToken.methods.balanceOf(accounts[0]).call();
    setBalance(userTokens);
  };

  const listenToTokenTransfer = async (myToken) => {
    console.log({ myToken });
    myToken.events.Transfer({ to: accounts[0] }).on("data", updateUserTokens);
  };

  return (
    <>
      {web3 !== null && (
        <div>
          <form>
            <label>
              How Many?
              <input
                name="Tokens"
                type="textarea"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                onChange={handleInputChange}
              />
            </label>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleBuyToken}>
              Buy MEOW-Tokens
            </button>
          </form>
          <p>You have: {balance}</p>
        </div>
      )}
    </>
  );
}
export default Token;
