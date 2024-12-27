"use client";

export function Docs() {

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <p>hello this is the documentation/about page</p>
      <p><a className="link" href="https://github.com/csmit863/QUT-Blockchain-Web3-App">here</a> is the github for our club web app</p>
      <p>QUT Testnet:</p>
      <p>RPC URL: http://192.168.68.115:8545</p> 
      <p>Chain ID: 452</p>
      <p><a className="link" href="http://localhost:3000#faucet">Faucet</a></p>
    </div>
  );
}
