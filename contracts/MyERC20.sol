// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract MyERC20 is ERC20, ERC20Permit {
    constructor() ERC20("Ethereum Request for Comment 20 (ERC-20)", "ERC20") ERC20Permit("Ethereum Request for Comment 20 (ERC-20)") {}
}
