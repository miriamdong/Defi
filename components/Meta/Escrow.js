import React, { Component } from "react";
// import tokenFactory from "../contracts/tokenFactory.json";
import Escrow from "../../contracts/Escrow.json";
import getWeb3 from "../../hooks/useWeb3";

class NewEscrow extends Component {
  state = {
    web3: undefined,
    accounts: [],
    currentAccount: undefined,
    contract: undefined,
    balance: undefined,
  };

  async componentDidMount() {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Escrow.networks[networkId];
    const contract = new web3.eth.Contract(Escrow.abi, deployedNetwork && deployedNetwork.address);

    console.log("Escrow.abi contract:", contract);
    this.setState({ web3, accounts, contract }, this.updateBalance);
  }

  async updateBalance() {
    const { contract } = this.state;
    const balance = await contract.methods.balanceOf().call();
    console.log({ balance });
    this.setState({ balance });
  }

  async deposit(e) {
    e.preventDefault();
    const { contract, accounts } = this.state;
    await contract.methods.deposit().send({
      from: accounts[0],
      value: e.target.elements[0].value,
    });
    this.updateBalance();
    console.log("Transactions:", { contract });
  }

  async release() {
    const { contract, accounts } = this.state;
    await contract.methods.release().send({
      from: accounts[0],
    });
    this.updateBalance();
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading...</div>;
    }

    const { balance } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-2xl">
            <p>
              Balance: <b>{balance}</b> Meow Tokens{" "}
            </p>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={(e) => this.deposit(e)}>
            <div className="form-group ">
              <label htmlFor="deposit ">Deposit</label>
              <input type="number" className="form-control" id="deposit" />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Wallet
              </button>
              <button
                onClick={() => this.release()}
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Release
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEscrow;
