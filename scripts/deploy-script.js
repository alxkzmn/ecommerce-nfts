/*
 *   Copyright (c) 2021 Alexander Kuzmin
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
const hre = require("hardhat")
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT")
  const nft = await NFT.deploy()
  await nft.deployed()
  console.log("NFT deployed to:", nft.address)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
