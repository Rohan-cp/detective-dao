import { Web3Button } from '@thirdweb-dev/react';
import '../index.css';

const MintNftScreen = (props) => {
  return (
    <div className="mint-nft">
      <p style={{
          fontSize: 45,
          width: "500px",
          textAlign: "center",
        }} >Mint your free DetectiveDAO Membership NFT</p>
      <div className="btn-hero">
        <Web3Button 
          contractAddress={props.contractAddress}
          action={contract => {
            contract.erc1155.claim(0, 1)
          }}
          onSuccess={() => {
            console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${props.editionDrop.getAddress()}/0`);
          }}
          onError={error => {
            console.error("Failed to mint NFT", error);
          }}
          accentColor="#F8F9FA"
        >
          Mint your NFT (FREE)
        </Web3Button>
      </div>
    </div>
  )
}

export default MintNftScreen;