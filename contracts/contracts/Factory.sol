// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Supervision.sol";
import "./Pool.sol";
import "./interfaces/IFactory.sol";

contract Factory is IFactory{
    address[] public pools;
    mapping(address => uint256) depositAmountOfPool;
    mapping(uint256 => address) poolOfDepositAmount;
    
    address public owner;
    address public supervisionAddress; 
    address public aspectID; 

    event PoolCreatedLog(uint256 indexed _depositAmount, address indexed _pool);

    constructor(address _aspectID) {
        owner = msg.sender;
        // create supervision contract
        supervisionAddress = address(new Supervision(address(this), msg.sender, _aspectID));
        aspectID = _aspectID;
    }

    function setOwner(address _newOwner) public onlyOwner{
        owner = _newOwner;
    }

    function createPool(uint256 _depositAmount) public {
        require(owner == msg.sender, "Only for owner!");
        require(poolOfDepositAmount[_depositAmount] == address(0), "The depositamount alread created!");

        address pool;
        pool = address(new Pool(_depositAmount, address(this), owner, supervisionAddress));
        pools.push(pool);
        depositAmountOfPool[pool] = _depositAmount;
        poolOfDepositAmount[_depositAmount] = pool;

        emit PoolCreatedLog(_depositAmount, pool);
    }

    function getDepositAmountOfPool(address _addr) public view returns(uint){
        return depositAmountOfPool[_addr];
    }

    function getPoolOfDepositAmount(uint _amount) public view returns(address){
        return poolOfDepositAmount[_amount];
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only for owner");
        _;
    }

}


