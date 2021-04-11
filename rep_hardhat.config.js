// import a module
require ("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  // if netwoks are not defined - the contract will be deployed to HardHat local testnet
  networks: {
  	// this allows to deploy on global testnet(rinkeby)
  	rinkeby: {
  		url: "PLACE YOUR INFURA.COM URL HERE",
  		accounts: ["PLACE YOUR METAMASK.COM PRIVATE KEY HERE"]
  	}
  }

};
