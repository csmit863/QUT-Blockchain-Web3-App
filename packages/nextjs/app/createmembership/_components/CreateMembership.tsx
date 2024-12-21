"use client";
import { useEffect, useState } from "react";
import { TransactionReceipt } from "viem";
import { TxReceipt } from "~~/app/debug/_components/contract";

export const CreateMembershipComponent: React.FC = () => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [membershipCreated, setMembershipCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txReceipt, setTxReceipt] = useState<TransactionReceipt | null>(null);

  useEffect(() => {
    // Extract JWT from URL hash
    const hash = window.location.hash; // e.g., #your-jwt-token
    if (hash) {
      const token = hash.substring(1); // Remove the '#' and get the token
      setJwt(token);
    }
  }, []);

  useEffect(() => {
    const createMembership = async () => {
      if (!jwt) return;

      try {
        const response = await fetch("http://192.168.68.115:5000/api/create-membership", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: jwt }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Membership creation initiated successfully:", result);

        const txHash = result.tx_hash;
        if (!txHash) {
          throw new Error("No transaction hash returned.");
        }

        // Polling the RPC node for transaction receipt
        let receipt = null;
        while (!receipt) {
          const receiptResponse = await fetch("http://192.168.68.115:8545", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              method: "eth_getTransactionReceipt",
              params: [txHash],
              id: 1,
            }),
          });
          const receiptData = await receiptResponse.json();

          if (receiptData.result) {
            receipt = receiptData.result;
            setTxReceipt(receipt);
            setMembershipCreated(true);
          } else {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait before retrying
          }
        }
      } catch (err) {
        console.error("Failed to create membership:", err);
        setError("Failed to create membership. Please try again later.");
      }
    };

    createMembership();
  }, [jwt]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1 className="text-xl font-semibold">Create Membership</h1>
      {membershipCreated ? (
        <>
          <p>Membership created successfully!</p>
          {txReceipt && <TxReceipt txResult={txReceipt} />}
        </>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Processing your membership...</p>
      )}
    </div>
  );
};
