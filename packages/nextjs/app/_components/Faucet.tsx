"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TxReceipt } from "../debug/_components/contract";
import { useAccount } from "wagmi";
// Import the hook for reading from the contract
import { AddressInput } from "~~/components/scaffold-eth";
// To get the connected wallet address
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import tap from "~~/public/tap.png";

export function Faucet() {
  /**
   * The faucet should require a signature proving that the requester has a club NFT.
   * Once the signature is verified, send the funds to the designated address on the specified network.
   * Should require no gas fees from the user.
   * It would also be useful if you could use the faucet as a non-member.
   */

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

  // TODO: make a function which asks for a signature from the user proving they own the club nft.
  // const getSignature
  // this function (below) should send the signature to the backend for verification and await success/failure
  const handleGetTestnetETH = async () => {
    setIsLoading(true); // Set loading state
    setTxReceipt(null); // Clear previous receipt
    let receipt = null;
    try {
      const response = await fetch("todo", {
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
      if (data.result) {
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
                Club members can access up to <span className="font-semibold">1 testnet ETH</span> on supported
                networks.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Supported networks: QUT Testnet, Sepolia</p>
              <div className="space-y-2">
                {/* Dropdown for network selection */}
                <select value={selectedNetwork} onChange={handleNetworkChange} className="w-full p-2 border rounded-md">
                  {networks.map(network => (
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
                  className={`btn btn-primary w-full ${isLoading ? "bg-gray-400 cursor-not-allowed" : ""}`}
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
          <div>
            <p>
              Faucet not available? <br /> Here are some other testnet faucets:
            </p>
            {/** list of faucets */}
            <a href="https://cloud.google.com/application/web3/faucet/ethereum">Google Faucet</a>
            <br />
            <a href="https://www.alchemy.com/faucets">Alchemy Faucets</a>
            <br />
            <a href="https://faucet.quicknode.com/ethereum">Quicknode Faucets</a>
            <br />
            <a href="https://sepolia-faucet.pk910.de/">Sepolia PoW Faucet</a>
          </div>
        </div>
      </div>
    </div>
  );
}
