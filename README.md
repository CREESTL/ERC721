1) Create a new folder

2) `npm init -y`

3) `npm install -D @nomiclabs/hardhat-ether ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`

4) Clone this repo

5) Replace your `hardhat.config.js` file with cloned `rep_hardhat.config.js`

6) Rename `rep_hardhat.config.js` to `hardhat.config.js`

7) If you want to deploy on local HardHat testnet:

	- comment/delete lines 
		"rinkeby: {
	  		url: "...",
	  		accounts: ["..."]
	  	}"
  	in `hardhat.config.js`
    
8) If you want to deploy on RinkeBy global testnet:

	- Download Metamask (https://metamask.io/) chrome extention -> create there a new crypto wallet / import the old one using 12 secret words combination
  
	- Register at https://infura.io/ -> create new project -> go to project settings -> in `endpoints` choose `Rinkeby` -> copy https URL generated below
  
	- Place this URL into `rinkeby:url` in `hardhat.config.js`
  
	- Create a Twitter or Facebook account
  
	- In Metamask in the upper right corner choose a Rinkeby testnet and copy the `Account 1` address (center of the screen)
  
	- Post this address on Twitter or Facebook
  
	- Copy the link of the page with the post (or the link of post itself) and put it in https://faucet.rinkeby.io/ and push 'give me Ether' to get some Ether to your crypto wallet
  
	- In Metamask go to 'Account Details' (three dots below your avatar) -> export private key -> copy the key and place it in `rinkeby:accounts` in `hardhat.config.js`
  
	- Navigate to `scripts/` directory and run `npx hardhat run scripts/deployERC721.js --network rinkeby`
