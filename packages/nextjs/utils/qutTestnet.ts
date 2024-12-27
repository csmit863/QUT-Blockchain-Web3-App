import { defineChain } from "viem";

// qut testnet chain
export const qut = defineChain({
  id: 452,
  name: "QUT Testnet",
  nativeCurrency: { name: "QUT Testnet", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://192.168.68.115:8545"],
    },
  },
  blockExplorers: {
    default: {
      name: "QUTscan",
      url: "http://localhost:3000/blockexplorer",
    },
  },
});
