const edu = artifacts.require('EducationCertificate');

module.exports = function(deployer) {
  account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
  // account1 = "0xe5aA4e2e30dABE011B0DEe5b1B91C312d7923f19";
  deployer.deploy(edu, account);
  // deployer.deploy(edu, account1);
};
