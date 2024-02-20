const MyToken20 = artifacts.require("MyERC20");


module.exports = function(deployer) {
  account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
  deployer.deploy(MyToken20);

};
