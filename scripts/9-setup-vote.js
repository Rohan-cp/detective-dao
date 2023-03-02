import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is our governance contract.
    const vote = await sdk.getContract("0xF72db5598Fc4349dF20ef0ff281D01C7E6c2F31b", "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xc35770cd37E0Bc22cF8ED0341Aa071c64F2ebb15", "token");
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    // This is our governance contract.
    const vote = await sdk.getContract("0xF72db5598Fc4349dF20ef0ff281D01C7E6c2F31b", "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xc35770cd37E0Bc22cF8ED0341Aa071c64F2ebb15", "token");
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent85 = Number(ownedAmount) / 100 * 85;

    // Transfer 85% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      percent85
    ); 

    console.log("✅ Successfully transferred " + percent85 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();