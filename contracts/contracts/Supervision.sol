// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/IPool.sol";
import "./interfaces/IFactory.sol";
import "./library/LiteralConvertLib.sol";


contract Supervision {
    address public owner;
    address public factory;
    address public aspectID;

    event Deposit(address indexed depositor, bytes32 validTx, uint256 amount);
    event SetWhitelistLog(address _address, bool _bool);
    event SetWhitelistFromListLog(address[] _addressList, bool[] _boolList);
    event SetOwnerLog(address _address);

    mapping(address => bool) public whitelist;

    constructor(address _factory, address _owner, address _aspectID) {
        factory = _factory;
        owner = _owner;
        aspectID = _aspectID;
    }

    // for Aspect unbind 
    function isOwner(address _add) public view returns (bool){
        return (owner == _add);
    }


    function setWhitelist(address _address, bool _bool) public onlyOwner{
        whitelist[_address] = _bool;
        emit SetWhitelistLog(_address, _bool);
    }

    function setWhitelistFromList(address[] memory _addressList, bool[] memory _boolList) public onlyOwner{
        for(uint256 i=0; i<_addressList.length; i++){
            whitelist[_addressList[i]] = _boolList[i];
        }
        emit SetWhitelistFromListLog(_addressList, _boolList);
    }

    function setOwner(address _newOwner) public onlyOwner{
        owner = _newOwner;
        emit SetOwnerLog(_newOwner);
    }


    function getWhitelistOf(address _address) external view returns(bool){
        return whitelist[_address];
    }

    function deposit(bytes32 _tx, bytes memory _publicKey) public payable{

        bytes memory txFromS;
        bytes memory txToS;
        bytes memory txBlockNumberS;

        address _aspectID = aspectID;  // save the gas

        // Invoke 0x64 with the ABI-encoded address and key to retrieve the raw byte value of the key
        (, txFromS) = address(0x64).call(abi.encodePacked(_aspectID, "from"));
        (, txToS) = address(0x64).call(abi.encodePacked(_aspectID, "to"));
        (, txBlockNumberS) = address(0x64).call(abi.encodePacked(_aspectID, "blockNumber"));

        address txFrom = LiteralConvertLib.getAddressFromStringLiteral(string(txFromS));
        address txTo = LiteralConvertLib.getAddressFromStringLiteral(string(txToS));
        uint txBlockNumber = LiteralConvertLib.getUintFromStringLiteral(string(txBlockNumberS));

        require(whitelist[txFrom] == true, "tx.from is not in the whitelist");
        require(msg.sender == txTo, "tx.to is not equal to msg.sender");
        // deposit to pool
        address pool = IFactory(factory).getPoolOfDepositAmount(msg.value);
        require(pool != address(0), "invalid msg.value");
        IPool(pool).deposit{value:msg.value}(_publicKey);

        emit Deposit(msg.sender, _tx, msg.value);
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only for owner");
        _;
    }

}