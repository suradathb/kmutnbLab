// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken721 is ERC721{
    constructor() ERC721("ERC-721 (Ethereum Request for Comments 721)","NFT"){}
}