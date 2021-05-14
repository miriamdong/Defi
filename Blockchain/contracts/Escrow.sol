/// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.1;
import "./MyToken.sol";
// import "./Ownable.sol";

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

contract Escrow {
  uint public endDate;
  uint public quorum;
  uint public target;
  struct Transfer
    {
    address payable investor;
    address payable funder;
    uint _amount;

    // address investor;
    // bool sent;
    // address payable to;
  }



 mapping(address => uint256) balances;


 constructor(
    uint _quorum,
    address payable _investor,
    address payable _funder)
    public payable {
    quorum = _quorum;
  }

  enum State { Active, Completed, Refunded}

  event RefundsClosed();
  event RefundsEnabled();

    State public _state;
    address payable private _beneficiary;
  mapping(uint => Transfer) transfers;
    uint index;

    // Only payer can send money to Escrow
    // address(this) is contact address
    // address(this).balance is msg.value , send by payer



  function state() public view virtual returns (State) {
        return _state;
    }

  function sendTransfer(uint id, address payable to, uint amount) public virtual {
    require(state() == State.Active, "Can only invest while active");
    balances[msg.sender] = balances[msg.sender] - amount;
    to.transfer(amount);
    return;
  }



  function balanceOf() view public returns(uint) {
    return address(this).balance;
  }

 /**
  * @return The beneficiary of the escrow.
  */
  function beneficiary() public view virtual returns (address payable) {
        return _beneficiary;
    }


  function release() public virtual {
    require(address(this).balance == target, 'cannot release funds before full amount is sent');
    require(block.timestamp < endDate, 'cannot release after target date');
    require(state() == State.Completed, "RefundEscrow: beneficiary can only withdraw while closed");
    beneficiary().transfer(address(this).balance);
    emit RefundsClosed();
  }


  function enableRefunds() public virtual {
    require(block.timestamp > endDate, 'Tefund after target date');
    require(address(this).balance < target, 'Target not reached');
    emit RefundsEnabled();
    }

  function refund(uint id, address payable investor,  uint amount) public payable virtual {
  require(address(this).balance < target, 'refund only if goals are not reached');
   balances[msg.sender] = balances[msg.sender] + amount;
   investor.transfer(amount);
   _state = State.Refunded;
  }
}