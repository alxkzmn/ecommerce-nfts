/*
 *   Copyright (c) 2021 Alexander Kuzmin
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
require("dotenv").config()
const { expect } = require("chai")
describe("NFT", function () {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
    const NFT = await ethers.getContractFactory("MyNFT")
    const WALLET_ADDRESS = process.env.WALLET_ADDRESS
    const nft = await NFT.deploy()
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv"
    await nft.deployed()
    await nft.mint(WALLET_ADDRESS, URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  })
})
