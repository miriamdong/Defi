// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.1;


contract Escrow{
  address public payer;
  address payable public payee;
  uint public amount;

  constructor(
    address payable _payee,
    uint _amount)
    public {
    payer = msg.sender;
    payee = _payee;
    amount = _amount;
  }

  function deposit() payable public {
    // require(msg.sender == payer, 'Sender must be the payer');
    require(address(this).balance <= amount, 'Cant send more than escrow amount');
  }

  function release() public {
    require(address(this).balance == amount, 'cannot release funds before full amount is sent');
    payee.transfer(amount);
  }

  function balanceOf() view public returns(uint) {
    return address(this).balance;
  }
}