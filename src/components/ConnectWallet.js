import React, { useState, useEffect } from "react";
import web3Service from "./web3.server"; 

const ConnectWallet = () => {
  const [account, setAccount] = useState("");

  const updateAccount = async () => {
    try {
      const acc = await web3Service.getAccount();
      setAccount(acc || "");
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await web3Service.init();  // ✅ เพิ่ม init() เพื่อให้แน่ใจว่า Web3 ถูกโหลด
      await updateAccount();
    })();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", updateAccount);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", updateAccount);
      }
    };
  }, []);

  const handleConnect = async () => {
    try {
      await web3Service.init();  // ✅ เรียก init() ก่อน
      const acc = await web3Service.connectWallet();
      setAccount(acc);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <li>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </li>
  );
};

export default ConnectWallet;
