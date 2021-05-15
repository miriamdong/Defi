// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.1;

import "./MyToken.sol";

contract tokenFactory {

    address[] tokenAddress;

    event ChildCreated(
        uint date,
        uint data,
        address childAddress
    );

    function createChild(uint _data) external {
    Child child = new child(_data);
    children.push(child);
    emit ChildCreated(
    block.timestamp,
    _data,
    address(child)
    );
    }

    function deploy20Contract(
        string calldata name,
        string calldata symbol,
        uint8 decimals,
        uint256 initialSupply
    ) external returns (MyToken creditsAddress) {

        MyToken newCredits = new MyToken(
            initialSupply
        );
        tokenAddress.push(address(newCredits));
        return newCredits;
    }
}