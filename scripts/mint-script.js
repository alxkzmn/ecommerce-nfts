/*
 *   Copyright (c) 2021 Alexander Kuzmin
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
require("dotenv").config()
const IPFS_URI = process.env.IPFS_URI
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const hre = require("hardhat")
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT")
  const URI = `ipfs://${IPFS_URI}`
  const contract = NFT.attach(CONTRACT_ADDRESS)
  await contract.mint(WALLET_ADDRESS, URI)
  console.log("NFT minted:", contract)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
