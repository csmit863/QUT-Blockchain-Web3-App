"use client";
import { useEffect, useState, useRef } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useSearchParams } from "next/navigation";

export function Confirm() {
  const searchParams = useSearchParams();
  const studentNumber = searchParams.get("studentNumber") || "";
  const desiredAddress = searchParams.get("desiredAddress") || "";

  const { writeContractAsync: mintMembership } = useScaffoldWriteContract("YourContract");
  const [error, setError] = useState('');
  const [confirmedEmail, setConfirmedEmail] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const [txHash, setTxHash] = useState("");
  const email = `n${studentNumber}@qut.edu.au`;

  // Ref to track if the email was already sent
  const emailSentRef = useRef(false);

  const sendConfirmationRequest = async () => {
    if (emailSentRef.current) return; // Prevent duplicate calls

    setSentEmail(true);
    emailSentRef.current = true; // Mark as sent
    try {
      const response = await fetch("http://192.168.68.115:5000/api/get-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, address: desiredAddress }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("Confirmation email sent successfully");
    } catch (err) {
      console.error("Failed to send confirmation email:", err);
      setError("Failed to send confirmation email. Please try again later.");
    }
  };

  useEffect(() => {
    if (!emailSentRef.current && email && desiredAddress) {
      sendConfirmationRequest();
    }
  }, [email, desiredAddress]);

  const handleMintMembership = async () => {
    try {
      const response = await fetch("http://192.168.68.115:5000/api/get-eth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: "your-decoded-otp-here" }), // Replace this with the actual OTP value
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Transaction result:", result);
      setTxHash(result.tx_hash);
    } catch (err) {
      console.error("Error minting membership:", err);
      setError("Failed to complete the transaction. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1 className="text-xl font-semibold">Confirm Registration</h1>
      {sentEmail && (<p>We've sent a confirmation email to {email}.</p>)}
      {/*!confirmedEmail ? (
        <button
          className="btn btn-primary"
          onClick={sendConfirmationRequest}
        >
          Send Confirmation Email
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={handleMintMembership}
        >
          Mint Membership
        </button>
      )*/}
      {txHash && (
        <p>
          Transaction successful! TX Hash: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">{txHash}</a>
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
