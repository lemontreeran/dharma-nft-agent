const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        'Deploying the contracts with the account:',
        await deployer.getAddress()
    )

    // Check some basics
    console.log('Account balance:', (await ethers.provider.getBalance(deployer.address)).toString())

    const NFTContract = await ethers.getContractFactory("MyAI_NFT");
    const nft = await NFTContract.deploy();
    await nft.waitForDeployment();

    console.log("MyAI_NFT deployed to:", nft.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
