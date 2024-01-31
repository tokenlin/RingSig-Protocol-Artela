// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

library EllipticCurve{
    function bn256ScalarMul(
        bytes32[2] memory G,
        bytes32 k
        ) public view returns(bytes32[2] memory p) { 
        bytes32[3] memory input;
        input[0] = G[0];
        input[1] = G[1];
        input[2] = k;

        assembly {
            if iszero(staticcall(gas(), 0x07, input, 0x60, p, 0x40)) {
                revert(0,0)
            }
        }
        return p;
    }

    function bn256Add(
        bytes32[2] memory X,
        bytes32[2] memory Y
        ) public view returns(bytes32[2] memory p) { 
        bytes32[4] memory input;
        input[0] = X[0];
        input[1] = X[1];
        input[2] = Y[0];
        input[3] = Y[1];

        assembly {
            if iszero(staticcall(gas(), 0x06, input, 0x80, p, 0x40)) {
                revert(0,0)
            }
        }
        return p;
    }
}


