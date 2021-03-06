import Web3 from "web3";

const getWeb3 = () => {
  return new Promise(async (resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.

    console.log({ window });
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        console.log("Request account access if needed");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // Acccounts now exposed
        console.log("Acccounts now exposed", accounts);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      resolve(web3);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
  });
};

console.log("getWeb3:", getWeb3);
export default getWeb3;
