const MyToken = artifacts.require("./MyToken.sol");
const MyTokenSales = artifacts.require("./MyTokenSale.sol");
const MyWallet = artifacts.require("./MyWallet.sol");
require("dotenv").config({ path: "../../.env" });
const KycContract = artifacts.require("KycContract");
const Escrow = artifacts.require("Escrow.sol");
const TokenFactory = artifacts.require("TokenFactory.sol");

module.exports = async function (deployer, _network, accounts) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(KycContract);
  await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);
  // let tokenInstance = await MyToken.deployed();
  // await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
  await deployer.deploy(Escrow, accounts[0], 100);
  // await deployer.deploy(TokenFactory, "RocketMeow", "MEOW", 0, 100);
  // await deployer.deploy(
  //   Escrow,
  //   accounts[0], //payer
  //   1000,
  // );
  // await deployer.deploy(MyWallet);
  // const wallet = await MyWallet.deployed();
  // await web3.eth.sendTransaction({ from: accounts[0], to: wallet.address, value: 10000 });
};
