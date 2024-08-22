import React from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "./ui/button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-4">
      <h1 className="mt-4 text-xl font-semibold text-primary mb-4">
        Check Out What I've Been Up To
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="col-span-3">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/assets/coin-pulse.png"
              alt="CoinPulse Project"
              className="rounded-3xl relative z-0 transition-all duration-300 hover:scale-110"
              width={800}
              height={800}
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <h1 className="mt-4 text-lg font-semibold text-primary">
                Coin Pulse
              </h1>
              <Link href="https://coin-pulse-seven.vercel.app/">
                <BsArrowUpRight className="text-primary text-4xl mt-2 bg-zinc-900 border border-zinc-800 rounded-full p-2" />
              </Link>
            </div>
            <Link
              href="https://github.com/yahyacodes/coin-pulse"
              target="_blank"
              className="flex gap-2 text-primary mt-4 text-sm"
            >
              View Code
            </Link>
          </div>
          <p className="text-zinc-400">
            Real-time crypto updates with smooth, responsive design.
          </p>
        </div>
        <div className="col-span-3">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/assets/trace-myip.png"
              alt="CoinPulse Project"
              className="rounded-3xl relative z-0 transition-all duration-300 hover:scale-110"
              width={800}
              height={800}
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <h1 className="mt-4 text-lg font-semibold text-primary">
                Trace My IP
              </h1>
              <Link href="https://trace-my-ip.vercel.app/">
                <BsArrowUpRight className="text-primary text-4xl mt-2 bg-zinc-900 border border-zinc-800 rounded-full p-2" />
              </Link>
            </div>
            <Link
              href="https://github.com/yahyacodes/trace-my-ip"
              target="_blank"
              className="flex gap-2 text-primary mt-4 text-sm"
            >
              View Code
            </Link>
          </div>
          <p className="text-zinc-400">
            Real-time location mapping, clean UI, and accurate IP tracking.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">
        <div className="col-span-3">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/assets/finedge.png"
              alt="CoinPulse Project"
              className="rounded-3xl relative z-0 transition-all duration-300 hover:scale-110"
              width={900}
              height={900}
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <h1 className="mt-4 text-lg font-semibold text-primary">
                FinEdge
              </h1>
              <Link href="https://finedge-gamma.vercel.app/">
                <BsArrowUpRight className="text-primary text-4xl mt-2 bg-zinc-900 border border-zinc-800 rounded-full p-2" />
              </Link>
            </div>
            <Link
              href="https://github.com/yahyacodes/finedge"
              target="_blank"
              className="flex gap-2 text-primary mt-4 text-sm"
            >
              View Code
            </Link>
          </div>
          <p className="text-zinc-400">
            Innovative banking UI with modern, responsive design.
          </p>
        </div>
        <div className="col-span-3">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/assets/nexusai.png"
              alt="CoinPulse Project"
              className="rounded-3xl relative z-0 transition-all duration-300 hover:scale-110"
              width={800}
              height={800}
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <h1 className="mt-4 text-lg font-semibold text-primary">
                Nexus AI
              </h1>
              <Link href="https://nexus-ai-sigma.vercel.app/">
                <BsArrowUpRight className="text-primary text-4xl mt-2 bg-zinc-900 border border-zinc-800 rounded-full p-2" />
              </Link>
            </div>
            <Link
              href="https://github.com/yahyacodes/nexus-ai"
              target="_blank"
              className="flex gap-2 text-primary mt-4 text-sm"
            >
              View Code
            </Link>
          </div>
          <p className="text-zinc-400">
            Futuristic design with a focus on clean, modern UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
