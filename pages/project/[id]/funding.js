import React, { Component } from "react";
import MyToken from "../../../contracts/MyToken.json";
import MyTokenSale from "../../../contracts/MyTokenSale.json";
import KycContract from "../../../contracts/KycContract.json";
import getWeb3 from "../../../getWeb3";

class Transaction extends Component {
  state = {
    loaded: false,
    kycAddress: "0x123",
    tokenSaleAddress: "",
    userTokens: 0,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();
      console.log(MyToken.networks);

      // Get the contract instance.
      //this.networkId = await this.web3.eth.net.getId(); <<- this doesn't work with MetaMask anymore
      this.networkId = await this.web3.eth.getChainId();
      console.log(this.networkId);

      this.myToken = new this.web3.eth.Contract(
        MyToken.abi,
        MyToken.networks[this.networkId] && MyToken.networks[this.networkId].address,
      );
      // console.log(MyToken.networks[this.networkId].address);

      this.myTokenSale = new this.web3.eth.Contract(
        MyTokenSale.abi,
        MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
      );
      this.kycContract = new this.web3.eth.Contract(
        KycContract.abi,
        KycContract.networks[this.networkId] && KycContract.networks[this.networkId].address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenToTokenTransfer();
      this.setState(
        { loaded: true, tokenSaleAddress: this.myTokenSale._address },
        this.updateUserTokens,
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleKycSubmit = async () => {
    const { kycAddress } = this.state;
    await this.kycContract.methods.setKycCompleted(kycAddress).send({ from: this.accounts[0] });
    alert("Account " + kycAddress + " is now whitelisted");
  };

  handleBuyToken = async () => {
    await this.myTokenSale.methods
      .buyTokens(this.accounts[0])
      .send({ from: this.accounts[0], value: 1 });
  };

  updateUserTokens = async () => {
    let userTokens = await this.myToken.methods.balanceOf(this.accounts[0]).call();
    this.setState({ userTokens: userTokens });
  };

  listenToTokenTransfer = async () => {
    this.myToken.events.Transfer({ to: this.accounts[0] }).on("data", this.updateUserTokens);
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Invest Today</h1>
        <h2>Become an investor with MEOW-Tokens</h2>
        My Address:{" "}
        <input
          type="text"
          name="kycAddress"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
          value={this.state.kycAddress}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={this.handleKycSubmit}>
          Whitelist Me
        </button>
        <p className="mt-2 text-sm text-gray-500">
          Send Ether to this address: {this.state.tokenSaleAddress}
        </p>
        <p>You have: {this.state.userTokens}</p>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={this.handleBuyToken}>
          Buy MEOW-Tokens
        </button>
      </div>
    );
  }
}
export default Transaction;
