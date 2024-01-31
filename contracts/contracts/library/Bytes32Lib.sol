// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

library Bytes32Lib{
    function addMod(bytes32 a, bytes32 b) public pure returns(bytes32){
        uint256 nF = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
        uint256 a_int = uint256(a);
        uint256 b_int = uint256(b);
        require(a_int + b_int >= a_int, "addMod Error");
        return bytes32((a_int + b_int) % nF);
    }

    function subMod(bytes32 a, bytes32 b) public pure returns(bytes32){
        uint256 nF = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
        uint256 a_int = uint256(a);
        uint256 b_int = uint256(b);
        require(nF >= b_int, "subMod Error");
        if(a_int >= b_int) return bytes32((a_int - b_int) % nF);
        return bytes32((nF - b_int + a_int) % nF);
    }

}

