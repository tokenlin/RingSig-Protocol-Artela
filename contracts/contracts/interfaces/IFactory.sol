// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IFactory {
    function getDepositAmountOfPool(address _addr) external view returns(uint);
    function getPoolOfDepositAmount(uint _amount) external view returns(address);
}
