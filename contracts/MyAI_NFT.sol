// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyAI_NFT is ERC721, Ownable {
    uint256 public currentTokenId;
    
    // 简单存储 tokenId => tokenURI
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("MyAI_NFT", "MAINFT") {
        // 可以在这里执行一些初始化逻辑
    }

    function mintNFT(address recipient, string memory tokenUri) public onlyOwner returns (uint256) {
        currentTokenId++;
        uint256 newItemId = currentTokenId;
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenUri);
        return newItemId;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        // 这里可以返回 IPFS 地址，也可以是 HTTPS 链接
        return _tokenURIs[tokenId];
    }
}
