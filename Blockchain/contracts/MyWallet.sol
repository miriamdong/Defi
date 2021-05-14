// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract MyWallet {
  struct Transfer {
    uint id;
    uint amount;
    address payable to;
    bool sent;
  }

  Transfer[] public transfers;

  constructor() public payable {
  }

//  function getApprovers() external view returns(address[] memory){
//         return approvers;
//     }

    function getTransfers() external view returns (Transfer[] memory){
        return transfers;
    }

  function createTransfer(uint amount, address payable to) external {
    transfers.push(Transfer(
      transfers.length,
      amount,
      to,
      false
    ));
    }


  // function approveTransfer(uint id) external onlyApprover() {
  //       require(transfers[id].sent == false, "transfer has already been sent");
  //       require(approvals[msg.sender][id]== false, "cannot approve transfer twice");

  //     approvals[msg.sender][id] = true;
  //     transfers[id].approvals++;

  //       if(transfers[id].approvals >= quorum){
  //           transfers[id].sent = true;
  //           address payable to = transfers[id].to;
  //           uint amount = transfers[id].amount;
  //           to.transfer(amount);
  //       }
  //   }

  receive() external payable {}

  // modifier onlyApprover() {
  //   bool allowed = false;
  //   for(uint i = 0; i < approvers.length; i++) {
  //     if(approvers[i] == msg.sender) {
  //       allowed = true;
  //     }
  //   }
  //   require(allowed == true, 'only approver allowed');
  //   _;
  // }
}