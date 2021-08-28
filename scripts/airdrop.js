const friends = [
    "0x03E4d3C68b3C282fA52b2224BC7825ab7a3BbB1F",
];
//const existingContractAddr = "0xe45492088775586B2965cfc5a27941fF05B317E1";
const existingContractAddr = "0xa0d8556d13Cb2f549069D216610e8367b9af9B5A";

async function main() {
  const nft = await hre.ethers.getContractAt("pouletToken", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmU2aYV3nUQxVAFLcoHTNZRsLfK25S59zWzJELP3wGuPXv";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
