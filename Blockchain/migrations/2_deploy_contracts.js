const MyToken = artifacts.require("./MyToken.sol");
const MyTokenSales = artifacts.require("./MyTokenSale.sol");
require("dotenv").config({ path: "../../.env" });
const KycContract = artifacts.require("KycContract");

module.exports = async function (deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(KycContract);
  await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);
  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
};
