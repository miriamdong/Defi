import React, { useEffect, useState } from "react";
import MyToken from "../../contracts/MyToken.json";
// import getWeb3 from "../../getWeb3";
import getWeb3 from "../../hooks/useWeb3";

function Transfer() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [currentTransfer, setCurrentTransfer] = useState(undefined);
  const [transfers, setTransfers] = useState([]);
  // const [quorum, setQuorum] = useState(undefined);
  const [myToken, setMyToken] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  const init = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const wallet = await web3.eth.accounts.wallet;
    console.log(wallet);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MyToken.networks[networkId];
    const contract = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);
    console.log(MyToken.abi);

    console.log("ddddd", contract, MyToken.abi);

    // console.log(`mmmmmmmm: ${await contract.methods.data().call()}`);
    // console.log(`Transaction hash: ${receipt.transactionHash}`);
    // const quorum = await contract.methods.quorum().call();

    // console.log(MyToken.networks[this.networkId].address);

    setWeb3(web3);
    setAccounts(accounts);
    setMyToken(myToken);
    setWallet(wallet);
    setTransfers(transfers);
    setContract(contract);
  };

  useEffect(() => {
    init().then(() => {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccounts(accounts);
        listenToTokenTransfer();
      });
    });
  }, []);

  // const init = () => {
  //   console.log("calling init");
  // let initWeb3;
  // return getWeb3()
  //   .then((result) => {
  //     initWeb3 = result;
  //     console.log("thenWeb3:", result);
  //     setWeb3(initWeb3);
  //     return initWeb3.eth.getAccounts();
  //   })
  //   .then((accounts) => {
  //     const account = accounts[0];
  //     // const wallet = web3.eth.accounts.wallet;
  //     return initWeb3.eth.net.getId();
  //   })
  //   .then((networkId) => {
  //     const deployedNetwork = MyToken.networks[networkId];
  //     const res = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);
  //     setContract(res);
  //   });
  // const accounts = await web3.eth.getAccounts();
  // const account = accounts[0];
  // const wallet = await web3.eth.accounts.wallet;
  // console.log(wallet);
  // const networkId = await web3.eth.net.getId();
  // const deployedNetwork = MyToken.networks[networkId];
  // const contract = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);

  // console.log(contract, MyToken.abi);

  // // console.log(`mmmmmmmm: ${await contract.methods.data().call()}`);
  // // console.log(`Transaction hash: ${receipt.transactionHash}`);
  // // const quorum = await contract.methods.quorum().call();

  // // console.log(MyToken.networks[this.networkId].address);

  // setWeb3(web3);
  // setAccounts(accounts);
  // // setQuorum(quorum);
  // setWallet(wallet);
  // setTransfers(transfers);
  // setContract(contract);
  // return web3;
  // };

  useEffect(() => {
    if (typeof contract !== "undefined" && typeof web3 !== "undefined") {
      updateBalance();
      // updateCurrentTransfer();
    }
  }, [accounts, contract, web3, currentTransfer]);

  async function updateBalance() {
    const balance = await web3.eth.getBalance(contract.options.address);
    console.log(balance);
    setBalance(balance);
  }

  async function createTransfer(e) {
    e.preventDefault();
    const amount = e.target.elements[0].value;
    const to = e.target.elements[1].value;
    console.log(amount, to);
    const myToken = contract.methods.name();
    console.log(myToken);
    await contract.methods.transfer(to, amount).send({ from: accounts[0] });
    // await updateCurrentTransfer();
  }

  async function sendTransfer() {
    await contract.methods.sendTransfer(currentTransfer.id).send({ from: accounts[0] });
    await updateBalance();
    // await updateCurrentTransfer();
  }

  // async function updateCurrentTransfer() {
  //   const currentTransferId = (await contract.methods.nextId().call()) - 1;
  //   if (currentTransferId >= 0) {
  //     const currentTransfer = await contract.methods.transfers(currentTransferId).call();
  //     const alreadyApproved = await contract.methods
  //       .approvals(accounts[0], currentTransferId)
  //       .call();
  //     setCurrentTransfer({ ...currentTransfer, alreadyApproved });
  //   }
  // }

  const updateUserTokens = async () => {
    let userTokens = await contract.methods.balanceOf(accounts[0]).call();
    setState({ userTokens: userTokens });
  };

  const listenToTokenTransfer = async () => {
    myToken.events.Transfer({ to: accounts[0] }).on("data", updateUserTokens);
  };
  console.log("web3:", web3);
  return (
    <>
      {!web3 && <div> Loading...</div>}
      {web3 !== null && (
        <div className="Transfer">
          {!currentTransfer ? (
            <div className="row">
              <div className="col-sm-12">
                <form onSubmit={(e) => createTransfer(e)}>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control" id="to" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                {/* <p>You have: {state.userTokens}</p> */}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-sm-12">
                <h2>Approve transfer</h2>
                <ul>
                  <li>TransferId: {currentTransfer.id}</li>
                  <li>Amount: {currentTransfer.amount}</li>
                  <li>Approvals: {currentTransfer.approvals}</li>
                </ul>
                {currentTransfer.alreadyApproved ? (
                  "Already approved"
                ) : (
                  <button type="submit" className="btn btn-primary" onClick={sendTransfer}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default Transfer;
