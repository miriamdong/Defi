import Web3 from "web3";

export default function getWeb3() {
  console.log("getweb3 called");
  const web3 = new Web3(window.ethereum);
  return window.ethereum
    .enable()
    .then(() => {
      if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        return web3;
      }
      // Fallback to localhost; use dev console port by default...
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      return web3;
    })

    .catch((err) => {
      console.log(err);
    });
}

// new Promise((resolve, reject) => {
//   // Wait for loading completion to avoid race conditions with web3 injection timing.
//   // Modern dapp browsers...
//   if (window.ethereum) {

//     try {
//       // Request account access if needed
//       const result = window.ethereum.enable();
//       console.log("result::::::", result);
//       // Acccounts now exposed
//       resolve(web3);
//     } catch (error) {
//       reject(error);
//     }
//   }
//   // Legacy dapp browsers...
// if (window.web3) {
//   // Use Mist/MetaMask's provider.
//   const web3 = window.web3;
//   console.log("Injected web3 detected.");
//   return web3;
// }
// // Fallback to localhost; use dev console port by default...
// const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
// const web3 = new Web3(provider);
// console.log("No web3 instance injected, using Local web3.");
// return web3;

// });
