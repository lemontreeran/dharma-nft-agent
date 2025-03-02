import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useContractWrite } from 'wagmi';
import { ethers } from 'ethers';
import NFTABI from '../abis/MyAI_NFT.json'; // Exported Smart Contract ABI

// Smart Contract address
const NFT_CONTRACT_ADDRESS = "0xF706ddBc70B90736eB3E44EEC340e5B4EeD46922";

export default function MintPanel() {
  const { address, isConnected } = useAccount();
  const [tokenURI, setTokenURI] = useState("");

  // Contract operations
  const { write: mintNFT, isLoading, isSuccess } = useContractWrite({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFTABI.abi,
    functionName: 'mintNFT',
    args: [address, tokenURI],
  });

  const handleMint = async () => {
    try {
      // Start trade
      mintNFT();
    } catch (error) {
      console.error("Mint error:", error);
    }
  };

  if (!isConnected) {
    return <div>Please connect to wallet</div>;
  }

  return (
    <div>
      <h2>Mint Your AI NFT</h2>
      <input 
        type="text"
        placeholder="Type or copy TokenURI"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
      />
      <button onClick={handleMint} disabled={!tokenURI || isLoading}>
        {isLoading ? "Minting..." : "Mint NFT"}
      </button>
      {isSuccess && <p>Mint Successful，Please check your NFT！</p>}
    </div>
  );
}
