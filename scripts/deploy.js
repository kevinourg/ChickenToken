async function main() {
  const pouletToken = await hre.ethers.getContractFactory("pouletToken");
  const token = await pouletToken.deploy();

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
