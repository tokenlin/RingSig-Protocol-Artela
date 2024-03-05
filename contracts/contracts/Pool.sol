// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./library/BytesLib.sol";

import "./library/TransferHelper.sol";

import "./interfaces/IPool.sol";


contract Pool is IPool {
    using BytesLib for bytes;

    event WithdrawLog(bytes32 indexed _hash, address indexed _to);


    mapping(bytes32 => bool) public depositDoneCheck; 
    mapping(bytes32 => bool) public withdrawDoneCheck;
    
    uint256 public nonces; 
    uint256 public numsWithdraw; 
    uint256 public nounceMixedBegin;
    mapping(uint256 => bytes32[2]) depositOrderOf; 

    uint256 public feeForOwner;

    uint256 public availableBalanceOfOwner; 

    uint256 public depositAmount;
    address public factory;
    address public owner;
    address public supervision;

    constructor(uint _depositAmount, address _factory, address _owner, address _supervision) {
        depositAmount = _depositAmount;
        factory = _factory;
        owner = _owner;
        supervision = _supervision;
    }

    function withdrawByOwner(uint256 _amount) public {
        require(_amount <= availableBalanceOfOwner, "Withdraw amount shall be not more than available balance!");
        require(msg.sender == owner, "Only for owner!");
        TransferHelper.safeTransferETH(owner, _amount);
        availableBalanceOfOwner = availableBalanceOfOwner - _amount;
    }

    function setOwner(address _newOwner) public {
        require(msg.sender == owner, "Only for owner!");
        owner = _newOwner;
    }

    function setFeeForOwner(uint256 _fee) public{
        require(msg.sender == owner, "Only for owner!");
        require(_fee <= 500, "feeForOwner should be not more than 500!");  // max 500 / 1000
        feeForOwner = _fee;
    }

    function deposit(
        bytes memory _publicKey
        ) public payable {
        require(msg.sender == supervision, "only supervision");
        require(msg.value == depositAmount, "msg.value is not equal to depositAmount");
        _deposit(_publicKey);
    }

    function _deposit(bytes memory _publicKey) private{
        // decode into array
        bytes32[2] memory publicKey = [_publicKey.toBytes32(0), _publicKey.toBytes32(32)];

        // Duplication is not allowed
        bytes32 _depositCheck = keccak256(abi.encodePacked(publicKey[0], publicKey[1]));
        require(depositDoneCheck[_depositCheck] == false, "PublicKey can not repeat!");

        depositDoneCheck[_depositCheck] = true;

        nonces = nonces + 1;
        depositOrderOf[nonces] = publicKey;
    }



    
    function withdraw(bytes memory _data) public returns(
        bool withdrawalValid,
        bool dataValid,
        address address_to,
        uint48 fee,
        bytes32 privateKeyRelatedHash
    ) {
        
        // Duplication is not allowed. According to hash related to private key
        require(withdrawalValid == true, "This privateKey already withdraw!");
        require(dataValid == true, "Input data can not be verified");

        _witdraw(address_to, withdrawer, fee, privateKeyRelatedHash);
        
    }

    // all check should be done before this function call
    function _witdraw(
        address address_to,
        address withdrawer,
        uint48 fee,
        bytes32 privateKeyRelatedHash
    ) internal {
        
        withdrawDoneCheck[privateKeyRelatedHash] = true;
        numsWithdraw = numsWithdraw + 1; 

        if(numsWithdraw == nonces){
            nounceMixedBegin = nonces;
        }

        // fee
        uint256 fees = depositAmount * fee / 10**9;  // total fee
        uint256 amountForOwner = fees * feeForOwner / 1000;  // fee to contract
        uint256 amountForWithdrawer = fees - amountForOwner;  // The remainder to the withdrawal agent
    
        uint256 amountWithdraw = depositAmount - fees;

        availableBalanceOfOwner = availableBalanceOfOwner + amountForOwner;
        TransferHelper.safeTransferETH(withdrawer, amountForWithdrawer);
        TransferHelper.safeTransferETH(address_to, amountWithdraw);

        emit WithdrawLog(privateKeyRelatedHash, address_to);
    }


    
    function getDepositStatus(bytes memory _publicKey) public view returns(bool){
        bytes32[2] memory publicKey = [_publicKey.toBytes32(0), _publicKey.toBytes32(32)];
        bytes32 hash = keccak256(abi.encodePacked(publicKey[0], publicKey[1]));
        return depositDoneCheck[hash];
    }


    function getDepositOrder(uint256 _nonce) public view returns(bytes32[2] memory){
        return depositOrderOf[_nonce];
    }

}




