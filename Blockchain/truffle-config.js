const path = require("path");
require("dotenv").config({ path: "./.env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "../contracts"),
  networks: {
    development: {
      port: 7545,
      network_id: "*",
      host: "127.0.0.1",
    },
    ganache_local: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "HTTP://127.0.0.1:7545",
          MetaMaskAccountIndex,
        );
      },
      network_id: 1337,
    },
    ropsten_infura: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://ropsten.infura.io/v3/5e24e9ad27d84951bb4a7c50bfdbfd45",
          MetaMaskAccountIndex,
        );
      },
      chainId: 3,
      gas: 3000000,
      gasPrice: 10000000000,
      network_id: 3,
    },
  },
  compilers: {
    solc: {
      version: "^0.6.2",
      optimizer: { enabled: true, runs: 200 },
    },
  },
};
