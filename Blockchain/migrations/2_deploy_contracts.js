const MyToken = artifacts.require("./MyToken.sol");
const MyTokenSales = artifacts.require("./MyTokenSale.sol");
const MyWallet = artifacts.require("./MyWallet.sol");
const KycContract = artifacts.require("KycContract");
const Escrow = artifacts.require("Escrow.sol");
const TokenFactory = artifacts.require("TokenFactory.sol");
const Meow = artifacts.require("Meow.sol");

// module.exports = async function (deployer, _network, accounts) {
//   let addr = await web3.eth.getAccounts();
//   await deployer.deploy(MyToken, 1000000000);
//   await deployer.deploy(KycContract);
//   await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address);
//   let tokenInstance = await MyToken.deployed();
//   await tokenInstance.transfer(MyTokenSales.address, 1000000000);
//   await deployer.deploy(Escrow, accounts[0], 10000);
//   // await deployer.deploy(TokenFactory, "RocketMeow", "MEOW", 0, 100);
// };

module.exports = async function (deployer, _network, accounts) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, 1000000000);
  await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address);
  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSales.address, 1000000000);
  await deployer.deploy(Meow);
  await deployer.deploy(MyWallet);
  const wallet = await MyWallet.deployed();
  await web3.eth.sendTransaction({ from: accounts[0], to: wallet.address, value: 10000 });
  await deployer.deploy(Escrow, accounts[0], 10000);
};
