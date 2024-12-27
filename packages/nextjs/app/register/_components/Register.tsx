"use client";
import Link from "next/link";
import { InputBase } from "~~/components/scaffold-eth";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export function Register() {
  const { address } = useAccount(); // Get the connected wallet address

  const [studentNumber, setStudentNumber] = useState<string>("");
  const [desiredAddress, setDesiredAddress] = useState<string>("");

  // Automatically set the wallet address if connected
  useEffect(() => {
      if (address) {
          setDesiredAddress(address);
      }
  }, [address]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1 className="text-xl font-semibold">New Member Registration</h1>

      {/* Student number input */}
      <InputBase
        name="studentNumber"
        placeholder="Enter your student number"
        value={studentNumber}
        onChange={setStudentNumber}
      />

      {/* Desired address input */}
      <InputBase
        name="desiredAddress"
        placeholder="Enter your wallet address"
        value={desiredAddress}
        onChange={setDesiredAddress}
      />

      {/* Navigate to confirm page with query parameters */}
      <Link
        href={{
          pathname: "/confirm",
          query: {
            studentNumber,
            desiredAddress,
          },
        }}
        className="btn btn-primary rounded-md"
      >
        Confirm Registration
      </Link>
    </div>
  );
}
