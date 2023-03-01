import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xee1994b67D24969eAB73D542b4EF3a35ccE7C1E2", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Collective",
        description: "This NFT will give you access to DetectiveDAO!",
        image: readFileSync("scripts/assets/message.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();