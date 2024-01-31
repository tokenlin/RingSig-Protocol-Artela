import {
        allocate,
        entryPoint,
        execute,
        IPostContractCallJP,
        IPreContractCallJP,
        PostContractCallInput,
        PreContractCallInput,
        sys,
        uint8ArrayToHex,
        hexToUint8Array
} from "@artela/aspect-libs";

// 1. implement IPostContractCallJP
class Aspect implements IPreContractCallJP {

    isOwner(sender: Uint8Array): bool {
        // implement me
        // if return false，bind、unbind、upgrade Aspect will be block
        return true;
    }
    /**
     * postContractCall is a join-point which will be invoked after a contract call has finished.
     *
     * @param input input to the current join point
     */
    preContractCall(input: PreContractCallInput): void {

        let txData = uint8ArrayToHex(input.call!.data);

        let tx = sys.hostApi.blockchain.getTransactionByHash(hexToUint8Array(txData.slice(8,72)));

        if (tx) {
            // save to  transientStorage
            let txFrom = sys.aspect.transientStorage.get<string>("from");
            let txTo = sys.aspect.transientStorage.get<string>("to");
            let txBlockNumber = sys.aspect.transientStorage.get<string>("blockNumber");

            txFrom.set<string>(uint8ArrayToHex(tx.from));  // b245871eba5d1822bcbc5b721b54e0fcb6bd2b56
            txTo.set<string>(uint8ArrayToHex(tx.to));  // 0000000000000000000000000000000000a27e14
            txBlockNumber.set<string>(tx.blockNumber.toString());  // 1799960

            txFrom.reload();
            txTo.reload();
            txBlockNumber.reload();

            // let returnString = "";
            // returnString = returnString + uint8ArrayToHex(tx.from) + ";";  // from: '0xb245871eba5d1822bcbc5b721b54e0fcb6bd2b56'
            // returnString = returnString + uint8ArrayToHex(tx.to) + ";";  // to: '0x0000000000000000000000000000000000a27e14'
            // returnString = returnString + tx.blockNumber.toString();  // blockNumber: 1799960
            // sys.revert(returnString);  // "b245871eba5d1822bcbc5b721b54e0fcb6bd2b56;0000000000000000000000000000000000a27e14;1799960"
        }
    }
}

// 2.register aspect Instance
const aspect = new Aspect();
entryPoint.setAspect(aspect);

// 3.must export it
export {execute, allocate};



/**
 * 这是一个测试的example：
        let tx = sys.hostApi.blockchain.getTransactionByHash(hexToUint8Array("0x719f98d78cbb75d1a12788e9cb0dd0889249c9ce91e1d054eac79cc3d28252b7"))
        if (!tx) {
            sys.log("tx not found");
        } else {
            sys.log("transaction: accesses " + uint8ArrayToHex(tx.accesses))
            sys.log("transaction: blockHash " + uint8ArrayToHex(tx.blockHash))
            sys.log("transaction: blockNumber " + tx.blockNumber.toString())
            sys.log("transaction: chainId " + tx.chainId.toString())
            sys.log("transaction: from " + uint8ArrayToHex(tx.from))
            sys.log("transaction: gas " + tx.gas.toString())
            sys.log("transaction: gasFeeCap " + tx.gasFeeCap.toString())
            sys.log("transaction: gasPrice " + tx.gasPrice.toString())
            sys.log("transaction: gasTipCap " + tx.gasTipCap.toString())
            sys.log("transaction: hash " + uint8ArrayToHex(tx.hash))
            sys.log("transaction: input " + uint8ArrayToHex(tx.input))
            sys.log("transaction: nonce " + tx.nonce.toString())
            sys.log("transaction: type " + tx.type.toString())
            sys.log("transaction: transactionIndex " + tx.transactionIndex.toString())
            sys.log("transaction: to " + uint8ArrayToHex(tx.to))
            sys.log("transaction: r " + uint8ArrayToHex(tx.r))
            sys.log("transaction: s " + uint8ArrayToHex(tx.s))
            sys.log("transaction: v " + uint8ArrayToHex(tx.v))
            sys.log("transaction: value " + uint8ArrayToHex(tx.value))
        }
 */