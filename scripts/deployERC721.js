const hre = require("hardhat");

const name = "Pasta"
const symb = "PST"

async function main() {

  const ERC721 = await ethers.getContractFactory("ERC721");
  const erc721 = await ERC721.deploy(name, symb);

  await erc721.deployed();

  console.log(name + ' deployed to:', erc721.address);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
