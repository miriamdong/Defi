import React, { useEffect, useState } from "react";
import MyToken from "../../contracts/MyToken.json";
import MyTokenSale from "../../contracts/MyTokenSale.json";
import KycContract from "../../contracts/KycContract.json";
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
    init().then(() => {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccounts(accounts);
        setMyToken(myToken);
        listenToTokenTransfer();
      });
    });
  }, []);

  const init = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const wallet = await web3.eth.accounts.wallet;
    console.log(wallet);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MyToken.networks[networkId];
    const myToken = new web3.eth.Contract(MyToken.abi, deployedNetwork && deployedNetwork.address);
    const myTokenSale = new web3.eth.Contract(
      MyTokenSale.abi,
      MyTokenSale.networks[networkId] && MyTokenSale.networks[networkId].address,
    );

    // console.log(`mmmmmmmm: ${await contract.methods.data().call()}`);
    // console.log(`Transaction hash: ${receipt.transactionHash}`);
    // const quorum = await contract.methods.quorum().call();

    // console.log(MyToken.networks[this.networkId].address);

    setWeb3(web3);
    setAccounts(accounts);
    setMyToken(myToken);
    setMyTokenSale(myTokenSale);
    console.log("ddddd", myToken.events, myTokenSale.methods);
  };

  useEffect(() => {
    if (typeof contract !== "undefined" && typeof web3 !== "undefined") {
      updateBalance();
      // updateCurrentTransfer();
    }
  }, [accounts, myToken, web3]);

  async function updateBalance() {
    const balance = await web3.eth.getBalance(contract.options.address);
    console.log(balance);
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
    await myTokenSale.methods
      .buyTokens(accounts[0])
      .send({ from: accounts[0], value: state.Tokens });
  };

  const updateUserTokens = async () => {
    let userTokens = await myToken.methods.balanceOf(accounts[0]).call();
    setState({ userTokens: userTokens });
  };

  const listenToTokenTransfer = async () => {
    myToken.events.Transfer({ to: accounts[0] }).on("data", updateUserTokens);
  };

  listenToTokenTransfer()
    .then(() => {
      // setBalance({ updateUserTokens });
      setLoaded(true);
      setTokenSaleAddress(myTokenSale._address);
    })
    .catch((error) => {
      // Catch any errors for any of the above operations.
      // alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    });

  // class Token extends Component {
  //   state = {
  //     loaded: false,
  //     kycAddress: "0x123",
  //     tokenSaleAddress: "",
  //     userTokens: 0,
  //     value: 1,
  //   };

  //   componentDidMount = async () => {
  //     try {
  //       // Get network provider and web3 instance.
  //       this.web3 = await getWeb3();

  //       // Use web3 to get the user's accounts.
  //       this.accounts = await this.web3.eth.getAccounts();
  //       console.log(MyToken.networks);

  //       // Get the contract instance.
  //       //this.networkId = await this.web3.eth.net.getId(); <<- this doesn't work with MetaMask anymore
  //       this.networkId = await this.web3.eth.getChainId();
  //       console.log(this.networkId);

  //       this.myToken = new this.web3.eth.Contract(
  //         MyToken.abi,
  //         MyToken.networks[this.networkId] && MyToken.networks[this.networkId].address,
  //       );
  //       console.log(MyToken.networks[this.networkId].address);

  //       this.myTokenSale = new this.web3.eth.Contract(
  //         MyTokenSale.abi,
  //         MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
  //       );

  //       // Set web3, accounts, and contract to the state, and then proceed with an
  //       // example of interacting with the contract's methods.
  //       this.listenToTokenTransfer();
  //       this.setState(
  //         { loaded: true, tokenSaleAddress: this.myTokenSale._address },
  //         this.updateUserTokens,
  //       );
  //     } catch (error) {
  //       // Catch any errors for any of the above operations.
  //       alert(`Failed to load web3, accounts, or contract. Check console for details.`);
  //       console.error(error);
  //     }
  //   };

  //   handleInputChange = (event) => {
  //     const target = event.target;
  //     const value = target.type === "textarea" ? target.checked : target.value;
  //     const name = target.name;
  //     console.log(name);
  //     this.setState({
  //       [name]: value,
  //     });
  //     console.log("pppp:", event.target.value);
  //   };

  //   handleBuyToken = async (e) => {
  //     await this.myTokenSale.methods
  //       .buyTokens(this.accounts[0])
  //       .send({ from: this.accounts[0], value: this.state.Tokens });
  //   };

  //   updateUserTokens = async () => {
  //     let userTokens = await this.myToken.methods.balanceOf(this.accounts[0]).call();
  //     this.setState({ userTokens: userTokens });
  //   };

  //   listenToTokenTransfer = async () => {
  //     this.myToken.events.Transfer({ to: this.accounts[0] }).on("data", this.updateUserTokens);
  //   };

  //   render() {
  //     if (!this.state.loaded) {
  //       return <div>Loading Web3, accounts, and contract...</div>;
  //     }
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
          {/* <p>You have: {userTokens}</p> */}
        </div>
      )}
    </>
  );
}
export default Token;
