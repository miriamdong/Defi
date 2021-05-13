const MyToken = artifacts.require("./MyToken.sol");
const MyTokenSales = artifacts.require("./MyTokenSale.sol");
const MyWallet = artifacts.require("./MyWallet.sol");
require("dotenv").config({ path: "../../.env" });
const KycContract = artifacts.require("KycContract");

module.exports = async function (deployer, _network, accounts) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(KycContract);
  await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);
  await deployer.deploy(MyWallet, [accounts[1], accounts[2], accounts[3]], 2, {
    from: accounts[0],
    value: 1000,
  });
  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
};
