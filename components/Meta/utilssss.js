import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import MyWallet from "../../contracts/MyWallet.json";
import Wallet from "../../contracts/Wallet.json";

const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    console.log(provider);
    if (provider) {
      await provider.request({ method: "eth_requestAccounts" });
      try {
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    reject("Install Metamask");
  });

console.log("getWeb3::::::::::::!!!!!", getWeb3);

const getWallet = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = MyWallet.networks[networkId];
  return new web3.eth.Contract(MyWallet.abi, deployedNetwork && deployedNetwork.address);
};

export { getWeb3, getWallet };
