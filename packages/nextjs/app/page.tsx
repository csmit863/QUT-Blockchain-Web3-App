"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import qutblockchainlogo from "~~/public/qutblockchainlogo.png";
import Image from "next/image";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">QUT Blockchain Club</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={qutblockchainlogo} alt="logo" width={200} height={200} />
        </div>

        <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
          <p className="my-2 font-medium">Club Governance</p>
            <Link href="https://app.safe.global/home?safe=arb1:0x94C0F3A8de71D2E7EDC7aC02BB87fc39d605559f"><button>
              (Safe Wallet)
            </button></Link>
            <Link href="https://snapshot.org/#/callumsmith.eth/proposal/0xec98b05aaaa1b3434d1ced311c3b7f0e878e713cfd5e2bc98ecf3d6bd5b3f529"><button>
              (Snapshot)
            </button></Link>
        </div>
        <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
          <p className="my-2 font-medium">Helpful Services</p>
            <Link href="https://github.com/csmit863/QUT-Faucet"><button>
              (QUT Faucet)
            </button></Link>
            <Link href=""><button>
              (Node Endpoints)
            </button></Link>
        </div>

        </div>

      </div>
    </>
  );
};

export default Home;
