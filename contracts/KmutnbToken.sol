// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

// contract KmutnbToken is ERC20PresetFixedSupply,AccessControl {
contract KmutnbToken is ERC20PresetFixedSupply {
    // bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    constructor(
        address owner
    )
        ERC20PresetFixedSupply(
            "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK.",
            "KMUTNB",
            30000000 * 10 ** 18,
            owner
        )
    {}
 
    // Allow minters to add more tokens to the contract #แบบฝึกหัด Smart Contract

    // Allow the owner to add minters #แบบฝึกหัด Smart Contract #2
    
}
