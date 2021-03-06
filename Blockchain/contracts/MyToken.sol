// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("RocketMEOW", "MEOW") public {
        _mint(msg.sender, initialSupply);
    _setupDecimals(0);
    }

        // Balances for each account stored using mapping
    mapping(address => uint256) balances;


    event Transfer(address indexed from, address indexed to, uint tokens);

}




//     // Called automatically when contract is initiated
//     // Also gives the initial supply to msg.sender...who creates the contract

//     // Transfer the balance from owner's account to another account
//     // Decreases the balance of "from" account
//     // Increases the balance of "to" account
//     // Emits Transfer event

//     // Send amount of tokens from address `from` to address `to`
//     // The transferFrom method is used to allow contracts to spend
//     // tokens on your behalf
//     // Decreases the balance of "from" account
//     // Decreases the allowance of "msg.sender"
//     // Increases the balance of "to" account
//     // Emits Transfer event
//     function transferFrom(address from, address to, uint tokens) public virtual override returns (bool success) {
//         balances[from] = balances[from] - tokens;
//         balances[to] = balances[to] + tokens;
//         emit Transfer(from, to, tokens);
//         return true;
//     }

// }
