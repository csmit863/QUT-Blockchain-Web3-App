"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import qutblockchainlogo from "~~/public/qutblockchainlogo.png";
import tap from "~~/public/tap.png";
import Image from "next/image";

/*
point of contact
information source
infrastructure for membership
infrastructure for governance

*/

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="pt-16 bg-[url(/dot-texture.svg)]">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="font-dotGothic tracking-wide">
              <span className="block text-xl mb-2 md:text-2xl md:mb-4">QUT Blockchain Club 🖥️</span>
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
              <Link href="/register" className="btn btn-primary rounded-md">
                Join Club →
              </Link>
              <a href="/docs" className="btn btn-primary btn-outline rounded-md">
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
            <a href="#prizes" className="btn btn-outline rounded-md">
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
      <div id="faucet" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-dotGothic tracking-wide md:text-4xl">Use our faucet!</h2>
          Club members can access up to 0.25 testnet ETH on _supported-networks_
          <p className="mt-12 leading-relaxed text-lg md:leading-8 md:text-xl">
            sign msg with wallet, input desired address and hit confirm.
          </p>
        </div>
        <Image src={tap} alt="tap"/>
      </div>
    
    </>

  );
};

export default Home;
