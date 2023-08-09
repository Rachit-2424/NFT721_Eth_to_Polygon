const hre = require("hardhat");

async function main() {
  // Deploying the contract
  const ERC721 = await hre.ethers.getContractFactory("MyNft");
  const MyNft = await ERC721.deploy("AnacondaNFT", "ANFT", "Create an image of anaconda");
  await MyNft.deployed();

  console.log("Contract deployed to:", MyNft.address);
}

// Running the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

 //0xA9C918D730Ad6D4C1a09749183B48ed6547D8b18