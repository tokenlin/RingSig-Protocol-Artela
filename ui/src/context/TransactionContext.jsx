import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractAddressPool, contractABIPool} from "../utils/constants";
import { contractAddressSupervisor, contractABISupervisor } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContractPool = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddressPool, contractABIPool, signer);
  return transactionsContract;
};



const createEthereumContractSupervisor = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddressSupervisor, contractABISupervisor, signer);
  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ amount: "", tx: "", publicKey: "", proveData: ""});
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState({ deposit: false, withdraw: false});
  const [errMsg, setErrMsg] = useState({ deposit: "", withdraw: ""});

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };





  const sendTransactionDeposit = async () => {
    try {
      if (ethereum) {
        const { amount, tx, publicKey} = formData;
        const transactionsContract = createEthereumContractSupervisor();
        const parsedAmount = ethers.utils.parseEther(amount);

        const transactionHash = await transactionsContract.deposit(tx, publicKey, { value: parsedAmount});
        setIsLoading((prevState) => ({ ...prevState, deposit: true }));
        setErrMsg((prevState) => ({ ...prevState, deposit: "" }));
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading((prevState) => ({ ...prevState, deposit: false }));
        
        
      } else {
        console.log("No ethereum object");
        setErrMsg((prevState) => ({ ...prevState, deposit: "No ethereum object" }));
      }
    } catch (error) {
      console.log(error);
      setErrMsg((prevState) => ({ ...prevState, deposit: "Deposit error: "+error.message}));
      throw new Error("sendTransactionDeposit error");
    }
  };

  

  const sendTransactionWithdraw = async () => {
    try {
      if (ethereum) {
        const { proveData } = formData;
        const transactionsContract = createEthereumContractPool();

        const transactionHash = await transactionsContract.withdraw(proveData);
        setIsLoading((prevState) => ({ ...prevState, withdraw: true }));
        setErrMsg((prevState) => ({ ...prevState, withdraw: "" }));
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading((prevState) => ({ ...prevState, withdraw: false }));

       
      } else {
        console.log("No ethereum object");
        setErrMsg((prevState) => ({ ...prevState, withdraw: "No ethereum object" }));
      }
    } catch (error) {
      console.log(error);
      setErrMsg((prevState) => ({ ...prevState, withdraw: "Withdraw error: "+error.message}));
      throw new Error("sendTransactionWithdraw error");
    }
  };



  
  useEffect(() => {
    checkIfWalletIsConnect();
   
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        isLoading,
        errMsg,
        sendTransactionDeposit,
        sendTransactionWithdraw,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
