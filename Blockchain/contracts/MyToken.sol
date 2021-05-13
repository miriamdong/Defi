// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Snapshot.sol";

contract MyToken is ERC20, ERC20Snapshot, Ownable {
    constructor(uint256 initialSupply) ERC20("RocketMeow", "MEOW") public {
        _mint(msg.sender, initialSupply);
        _setupDecimals(0);
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Snapshot)
    {
        super._beforeTokenTransfer(from, to, amount);
    }



// contract MyToken is ERC20, Ownable{
//     constructor(uint256 initialSupply) ERC20("rocketMEOW", "MEOW") public {
//         _mint(msg.sender, initialSupply);
//         _setupDecimals(0);
//     }



    // Balances for each account stored using mapping
    mapping(address => uint256) balances;


    event Transfer(address indexed from, address indexed to, uint tokens);

    // Called automatically when contract is initiated
    // Also gives the initial supply to msg.sender...who creates the contract

    // Transfer the balance from owner's account to another account
    // Decreases the balance of "from" account
    // Increases the balance of "to" account
    // Emits Transfer event
    function transfer(address to, uint tokens) public virtual override returns (bool success) {
        if(tokens < 1) {
            revert("Not enough Ether provided");
        }
        require(tokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender] - tokens;
        balances[to] = balances[to] + tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    // Send amount of tokens from address `from` to address `to`
    // The transferFrom method is used to allow contracts to spend
    // tokens on your behalf
    // Decreases the balance of "from" account
    // Decreases the allowance of "msg.sender"
    // Increases the balance of "to" account
    // Emits Transfer event
    function transferFrom(address from, address to, uint tokens) public virtual override returns (bool success) {
        balances[from] = balances[from] - tokens;
        balances[to] = balances[to] + tokens;
        emit Transfer(from, to, tokens);
        return true;
    }

}