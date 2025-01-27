import { defineChain } from "viem";

// qut testnet chain
export const qut = defineChain({
  id: 452,
  name: "QUT Testnet",
  nativeCurrency: { name: "QUT Testnet", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.qutblockchain.club"],
    },
  },
  blockExplorers: {
    default: {
      name: "QUTscan",
      url: "https://app.qutblockchain.club/blockexplorer",
    },
  },
});
