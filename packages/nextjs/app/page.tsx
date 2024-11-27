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
      
      
      <div className="pt-16 bg-[url(/dot-texture.svg)]">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="font-dotGothic tracking-wide">
              <span className="block text-xl mb-2 md:text-2xl md:mb-4">QUT Blockchain Club</span>
              <span className="block text-3xl md:text-4xl">Welcome</span>
            </h1>
            <p className="mt-6 leading-relaxed md:leading-8">
              Greetings, future member! Welcome to the QUT Blockchain Club website.
              <br></br> 
              Our club is dedicated to fostering the development of blockchain technology as well as spreading knowledge about blockchain at QUT. 
              <br></br>
              To join, simply hit "Join Club →", then enter your QUT email and click "mint membership". 
              Upon registration you will be entitled to access to all of our shared resources and services including labs,
              workshop events, networking, testnet faucets, and much more (not to mention being part of our community :D ).
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/join" className="btn btn-primary rounded-md">
                Join Club →
              </Link>
              <a href="#rules" className="btn btn-primary btn-outline rounded-md">
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image src={qutblockchainlogo} alt="logo" width={200} height={200} />
          </div>
        </div>
        <div className="mt-20 flex flex-col">
          <div className="ml-auto bg-blue-600 h-8 w-[20%] opacity-20"></div>
          <div className="ml-auto bg-blue-600 h-8 w-[40%] opacity-40"></div>
          <div className="ml-auto bg-blue-600 h-8 w-[60%] opacity-60"></div>
          <div className="ml-auto bg-blue-600 h-8 w-[80%] opacity-80"></div>
          <div className="bg-blue-600 h-8 w-[100%] opacity-90"></div>
        </div>
      </div>
      <div id="rules" className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-dotGothic tracking-wide md:text-4xl">What we do</h2>
            <p className="mt-6 leading-relaxed md:leading-8 md:text-lg">
              Have a read of our constitution {" "}
              <a className="link" href="https://github.com/buidlguidl/ctf-devcon/" target="_blank">
                here.
              </a><br/><br/>
              Our aim is to provide a platform for like-minded students to connect locally and discuss, build, experiment and have fun onchain.
            </p>
            <a href="#prizes" className="btn btn-outline border-white rounded-md">
            Upcoming Events
            </a>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-24 gap-y-16 lg:max-w-none lg:grid-cols-4">
              lorem ipsum
            </dl>
          </div>
          <div className="flex items-center flex-col flex-grow pt-10">
            <div className="px-5">
              <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
                <p className="my-2 font-medium">Connected Address:</p>
                <Address address={connectedAddress} />
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
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-blue-600 h-8 w-[100%] opacity-90"></div>
        <div className="bg-blue-600 h-8 w-[80%] opacity-80"></div>
        <div className="bg-blue-600 h-8 w-[60%] opacity-60"></div>
        <div className="bg-blue-600 h-8 w-[40%] opacity-40"></div>
        <div className="bg-blue-600 h-8 w-[20%] opacity-20"></div>
      </div>
      <div id="prizes" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-dotGothic tracking-wide md:text-4xl">lorem ipsum</h2>
          lorem ipsum
          <p className="mt-12 leading-relaxed text-lg md:leading-8 md:text-xl">
            lorem ipsum
          </p>
        </div>
      </div>
    
    </>

  );
};

export default Home;
