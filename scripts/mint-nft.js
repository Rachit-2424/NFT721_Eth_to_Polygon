require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/Lock.sol/MyNft.json");


const contractAddress = "0xA9C918D730Ad6D4C1a09749183B48ed6547D8b18";
const ipfsUrls = [
  "https://gateway.pinata.cloud/ipfs/QmVoeABtrWq2r86YGnXwSp8skKJ14G2aXcxJJ5EvC8tVzy",
  "https://gateway.pinata.cloud/ipfs/QmPZwohaoKnZV1b9vx7bDDWmxTyN5xro9aH4PHqpAJuRTL",
  "https://gateway.pinata.cloud/ipfs/QmY38QD3R5PGuZaQBcMThzaXacBvrdSAE3AbvAmKvq82SY",
  "https://gateway.pinata.cloud/ipfs/QmeYiVeCFjSgHyHqbm5TAH6f4avq9Lidd67gnvjQjqKr3G",
  "https://gateway.pinata.cloud/ipfs/QmNUb4JPgSMgGVmeCa2PLBv2sVyjzG62Jkgu6hKrUFffgU"
];

async function mintNFT(tokenURI) {
  try {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
  
    // Create a contract instance
    const MyNft = new web3.eth.Contract(contract.abi, contractAddress);

    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 50,
      data: MyNft.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(), 
      
    };
  
    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
    console.log(
      "The transaction was successful. Transaction hash:",
      receipt.transactionHash
    );
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

async function mintNFTs() {
  for (let i = 0; i < ipfsUrls.length; i++) {
    await mintNFT(ipfsUrls[i]);
  }
}

mintNFTs(); 