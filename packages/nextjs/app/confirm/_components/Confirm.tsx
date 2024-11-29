"use client";
import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useSearchParams } from "next/navigation";

export function Confirm() {
    const searchParams = useSearchParams();
    const studentNumber = searchParams.get("studentNumber") || "";
    const desiredAddress = searchParams.get("desiredAddress") || "";

    const { writeContractAsync: mintMembership } = useScaffoldWriteContract("YourContract");

    return (
        <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <h1 className="text-xl font-semibold">Confirm Registration</h1>

        <button
            className="btn btn-primary"
            onClick={async () => {
            try {
                await mintMembership({
                functionName: "mintMembership",
                args: [desiredAddress, BigInt(studentNumber)]
                });
            } catch (e) {
                console.error("Error setting greeting:", e);
            }
            }}
        >
            Mint Membership
        </button>
        
        <p>
            Finish setting up your profile by making a {" "} 
            <a className="link" href="/members">
                personal page
            </a>!
        </p>
        </div>
    );
}
