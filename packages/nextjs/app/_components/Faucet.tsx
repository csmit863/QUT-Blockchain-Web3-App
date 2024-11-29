"use client";

import tap from "~~/public/tap.png";
import Image from "next/image";
import { useAccount } from "wagmi";  // To get the connected wallet address
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";  // Import the hook for reading from the contract
import { AddressInput } from "~~/components/scaffold-eth";
import { useState } from "react";

export function Faucet() {
    const { address } = useAccount();  // Get the connected wallet address
    const isLoading = true;
    // Use `useScaffoldReadContract` to query the NFT contract and check ownership
    const { data: nftBalance } = useScaffoldReadContract({
        contractName: "YourContract",
        functionName: "balanceOf",
        args: [address],
    });
    const [faucetDestination, setFaucetDestination] = useState("");



    // Check if the user has an NFT
    const hasNFT = nftBalance && nftBalance > 0;

    return (
        <div id="faucet" className="py-16 bg-[url(/dot-texture.svg)] bg-repeat">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
            <div className="text-center max-w-md text-gray-800 dark:text-gray-100 space-y-4">
            <h2 className="text-xl md:text-2xl font-medium">
                Use our <span className="text-blue-500 dark:text-blue-400">Faucet</span>!
            </h2>
            {hasNFT ? (
                <>
                <p className="text-sm md:text-base">
                    Club members can access up to <span className="font-semibold">X testnet ETH</span> on supported networks.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Supported networks: Sepolia
                </p>
                <div>
                    <AddressInput
                        onChange={setFaucetDestination}
                        value={faucetDestination}
                        placeholder="Enter destination wallet address"
                    />
                    <button className="btn btn-primary">
                    Get Testnet ETH
                    </button>
                </div>
                </>
            ) : (
                <p className="text-sm text-red-500">You must be a club member to use the faucet. Register {" "}
                    <a className="link" href="/register">
                         here
                    </a>    
                    .
                </p>
            )}
            <div className="mt-4">
                <Image src={tap} alt="tap" className="w-16 opacity-90 mx-auto" />
            </div>
            </div>
        </div>
        </div>
    );
}
