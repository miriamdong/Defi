// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0;

library AddressUtils {
  function isContract(
    address _addr
  )
    internal
    view
    returns (bool addressCheck)
  {
    uint256 size;

    assembly { size := extcodesize(_addr) } // solhint-disable-line
    addressCheck = size > 0;
  }

}


contract Escrow{

  address payable public payer;
  address payable public payee;
  address public admin;
  uint public amount;
  uint public endDate;

  constructor(
    address payable _payer,
    address payable _payee,
    uint _amount)
    {
    payer = _payer;
    payee = _payee;
    admin = msg.sender;
    amount = _amount;
    endDate = endDate;
  }

    // Only payer can send money to Escrow
    // address(this) is contact address
    // address(this).balance is msg.value , send by payer

  function release() public {
    require(address(this).balance == amount, 'cannot release funds before conditions are met');
    require(block.timestamp < endDate, 'cannot release after target date');
    require(msg.sender == admin, 'only admin can release funds');
    payee.transfer(amount);
  }

  function balanceOf() view public returns(uint) {
    return address(this).balance;
  }

  function refund() public{
    require(address(this).balance < amount, 'refund if goals are not reached');
    require(msg.sender == admin, 'only admin can release funds');
    payer.transfer(amount);
  }

}