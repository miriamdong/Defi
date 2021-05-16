import React, { Component, useState } from "react";
import MyToken from "../../contracts/MyToken.json";
import MyTokenSale from "../../contracts/MyTokenSale.json";
import KycContract from "../../contracts/KycContract.json";
import getWeb3 from "../../hooks/useWeb3";

class Kyc extends Component {
  state = {
    loaded: false,
    kycAddress: "",
    tokenSaleAddress: "",
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
      console.log(MyToken.networks[this.networkId].address);

      this.myTokenSale = new this.web3.eth.Contract(
        MyTokenSale.abi,
        MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
      );
      this.kycContract = new this.web3.eth.Contract(
        KycContract.abi,
        KycContract.networks[this.networkId] && KycContract.networks[this.networkId].address,
      );
      console.log("this.kycContract:", this.kycContract);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      //   this.listenToTokenTransfer();
      //   this.setState(
      //     { loaded: true, tokenSaleAddress: this.myTokenSale._address },
      //     this.updateUserTokens,
      //   );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "textarea" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
    console.log("event.target.value:", event.target.value);
  };

  handleKycSubmit = async () => {
    const { kycAddress } = this.state;
    console.log({ kycAddress });
    await this.kycContract.methods.setKycCompleted(kycAddress).send({ from: this.accounts[0] });
    alert("Account " + kycAddress + " is now whitelisted");
  };

  render() {
    return (
      <>
        {this.web3 !== null && (
          <div className="w-full pt-5">
            <input
              type="text"
              name="kycAddress"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2 text-center"
              value={this.state.kycAddress}
              onChange={this.handleInputChange}
            />
            <div className="pt-5 flex justify-end border-none">
              <button
                type="button"
                className="ml-3 inline-flex py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={this.handleKycSubmit}>
                Join & Next
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Kyc;
