import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransactionDeposit, sendTransactionTransfer, sendTransactionWithdraw, formData, isLoading, errMsg} = useContext(TransactionContext);

  const depositSubmit = (e) => {
    const { amount, tx, publicKey } = formData;
    e.preventDefault();
    console.log("depositSubmit");
    sendTransactionDeposit();
  };

  const transferSubmit = (e) => {
    const { publicKey } = formData;
    e.preventDefault();
    if (!publicKey) return;
    sendTransactionTransfer();
  };

  const withdrawSubmit = (e) => {
    const { proveData } = formData;
    e.preventDefault();
    sendTransactionWithdraw();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Supervised RingSig Privacy  <br /> Transaction Protocol
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            More privacy for the crypto world on RingSig.
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Amount (ART)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Tx to be verified" name="tx" type="text" handleChange={handleChange} />
            <Input placeholder="Public Key" name="publicKey" type="text" handleChange={handleChange} />
            
            {isLoading.deposit
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={depositSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Deposit
                </button>
              )}

            {errMsg.deposit != "" && (
                <p
                  className="text-left mt-5 text-red-500 font-light md:w-9/12 w-11/12 text-base"
                >
                  {errMsg.deposit}
                  </p>
              )}

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            <Input placeholder="Prove Data" name="proveData" type="text" handleChange={handleChange} />
            
            {isLoading.withdraw
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={withdrawSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Withdraw
                </button>
              )}

              {errMsg.withdraw != "" && (
                <p
                  className="text-left mt-5 text-red-500 font-light md:w-9/12 w-11/12 text-base"
                >
                  {errMsg.withdraw}
                  </p>
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
