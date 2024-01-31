// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract MyToken1155 is ERC1155, Ownable {
    constructor(string memory uri,address initialOwner) ERC1155(uri) {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
}
