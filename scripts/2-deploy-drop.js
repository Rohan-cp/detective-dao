import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    console.log("1")
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "DetectiveDAO Membership",
      description: "The mysteries stay endless, so we join in an attempt to solve and also create them.",
      image: readFileSync("scripts/assets/detective-dao.png"),
      primary_sale_recipient: AddressZero,
    });
console.log("2")
    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");
console.log("4")
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();