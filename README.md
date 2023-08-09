# NFT Collection Deployment and Polygon Bridge Transfer
This repository contains the first project in Polygon-Advance, where we deploy an NFT (Non-Fungible Token) collection on the Ethereum blockchain, map the collection to Polygon, and transfer assets via the Polygon Bridge.

## Getting Started
To execute the program, follow these steps:

1. Download the entire repository to access its contents.
2. Navigate to the main project directory.
3. Run npm install to install the required dependencies.
4. Execute the test file using the command: npx hardhat test
5. Execute the npx hardhat compile to compile the contract.
## Deploying the ERC721 Contract
Before deploying, rename   ".env" and provide your wallet private key where required (e.g., "PRIVATE_KEY= 'your wallet private key'", PUBLIC_KEY='account address'). To deploy the ERC721 contract to the Goerli Ethereum Testnet, run the following command:

```
npx hardhat run scripts/deploy.js --network goerli
```
Note: After deploying, the contract address will be generated. Copy the address into "contarctAddress.js" (stored in the metadata folder) and "batchMint.js" (stored in the scripts folder).

## Batch Mint NFTs
To batch-mint NFTs using the deployed ERC721 contract, run the following command:

```
npx hardhat run scripts/mint-nft.js --network goerli
```
The script will mint the specified number of NFTs and assign them to your address.

## Approve and Deposit NFTs to Polygon Mumbai
To approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge, execute the following commands:

```
npx hardhat run scripts/batchTransfer.js --network goerli
```

