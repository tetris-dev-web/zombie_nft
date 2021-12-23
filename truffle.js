const HDWalletProvider = require("truffle-hdwallet-provider");
// const LoomTruffleProvider = require('loom-truffle-provider');

// Set your own mnemonic here
const mnemonic = "moment slot gospel figure walk taste immune fragile pony public grass interest large face exercise";

// Module exports to make this configuration available to Truffle itself
module.exports = {
   
  // Object with configuration for each network
  networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*",
			gas: 4600000
		},

		// Configuration for mainnet
		mainnet: {
			networkCheckTimeout : 10000,
			provider: function() {
				// Setting the provider with the Infura Mainnet address and Token
				return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/4e2a03ea71db440fab6638286431b837")
			},
			network_id: "1"
		},
		
		// Configuration for rinkeby network
		rinkeby: {
			networkCheckTimeout : 10000,
			// Special function to setup the provider
			provider: function() {
				// Setting the provider with the Infura Rinkeby address and Token
				return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/4e2a03ea71db440fab6638286431b837")
			},
			//Fill in the `network_id` for the Rinkeby network.
			network_id: 4
		},
		
		loom_testnet: {
			provider: function() {
				const privateKey = 'YOUR_PRIVATE_KEY';
				const chainId = 'extdev-plasma-us1';
				const writeUrl = 'wss://extdev-basechain-us1.dappchains.com/websocket';
				const readUrl = 'wss://extdev-basechain-us1.dappchains.com/queryws';
				const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
				loomTruffleProvider.createExtraAccountsFromMnemonic(mnemonic, 10);
				return loomTruffleProvider;
			},
			network_id: '9545242630824'
		}
	},
	compilers: {
		solc: {
			version: "0.8.10"
		}
	}
};
