"use client";

import tap from "~~/public/tap.png";
import Image from "next/image";
import { useAccount } from "wagmi"; // To get the connected wallet address
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth"; // Import the hook for reading from the contract
import { AddressInput } from "~~/components/scaffold-eth";
import { useState, useEffect } from "react";
import { TxReceipt } from "../debug/_components/contract";

export function Faucet() {
    const { address } = useAccount(); // Get the connected wallet address

    const { data: nftBalance } = useScaffoldReadContract({
        contractName: "YourContract",
        functionName: "balanceOf",
        args: [address],
    });

    const [faucetDestination, setFaucetDestination] = useState("");
    const [selectedNetwork, setSelectedNetwork] = useState("Sepolia"); // Default to Sepolia
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [txReceipt, setTxReceipt] = useState(null); // Transaction receipt state

    // Automatically set the wallet address if connected
    useEffect(() => {
        if (address) {
            setFaucetDestination(address);
        }
    }, [address]);

    // Available networks
    const networks = ["Sepolia", "QUT Testnet"];

    // Handle network selection
    const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetwork(e.target.value);
    };

    // Mock API Call
    const handleGetTestnetETH = async () => {
        setIsLoading(true); // Set loading state
        setTxReceipt(null); // Clear previous receipt
        let receipt = null;
        try {
            const response = await fetch("http://api:5000/endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    network: selectedNetwork,
                    destination: faucetDestination,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to request testnet ETH");
            }

            const data = await response.json();

            // Mock Transaction Receipt
            if (data.result){
                receipt = data.result;
                setTxReceipt(receipt);
            }

        } catch (error) {
            console.error("Error fetching testnet ETH:", error);
            alert("Failed to fetch testnet ETH. Please try again.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div id="faucet" className="py-16 bg-[url(/dot-texture.svg)] bg-repeat">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
                <div className="text-center max-w-md text-gray-800 dark:text-gray-100 space-y-4">
                    <h2 className="text-xl md:text-2xl font-medium">
                        Use our <span className="text-blue-500 dark:text-blue-400">Faucet</span>!
                    </h2>
                    {nftBalance && nftBalance > 0 ? (
                        <>
                            <p className="text-sm md:text-base">
                                Club members can access up to{" "}
                                <span className="font-semibold">1 testnet ETH</span> on supported networks.
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Supported networks: QUT Testnet, Sepolia
                            </p>
                            <div className="space-y-2">
                                {/* Dropdown for network selection */}
                                <select
                                    value={selectedNetwork}
                                    onChange={handleNetworkChange}
                                    className="w-full p-2 border rounded-md"
                                >
                                    {networks.map((network) => (
                                        <option key={network} value={network}>
                                            {network}
                                        </option>
                                    ))}
                                </select>

                                {/* Address Input */}
                                <AddressInput
                                    onChange={setFaucetDestination}
                                    value={faucetDestination}
                                    placeholder="Enter destination wallet address"
                                />

                                {/* Button */}
                                <button
                                    onClick={handleGetTestnetETH}
                                    disabled={isLoading}
                                    className={`btn btn-primary w-full ${
                                        isLoading ? "bg-gray-400 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <span className="loader mr-2"></span> Requesting ETH...
                                        </div>
                                    ) : (
                                        `Get Testnet ETH on ${selectedNetwork}`
                                    )}
                                </button>
                            </div>
                            {/* Transaction Receipt */}
                            {txReceipt && <TxReceipt txResult={txReceipt} />}
                        </>
                    ) : (
                        <p className="text-sm text-red-500">
                            You must be a club member to use the faucet. Please connect wallet, or register{" "}
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
