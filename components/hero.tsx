import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="grid grid-cols-6 gap-4 text-primary">
      <div className="col-span-4 border border-zinc-800 p-6 rounded-3xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex">
            <Image
              src="/assets/logo-image.png"
              alt="avatar"
              className="mb-4 rounded-full"
              width={70}
              height={70}
              quality={100}
            />
            <div>
              <h1 className="mt-4 text-lg font-semibold">Hey. I'm Yahya.</h1>
              <p className="text-zinc-400 text-xs -mt-1">Frontend Developer</p>
            </div>
          </div>

          <div className="flex gap-2">
            <AiOutlineTwitter className="text-primary text-4xl border border-zinc-700 rounded-xl p-1" />
            <BiLogoLinkedin className="text-primary text-4xl border border-zinc-700 rounded-xl p-1" />
            <AiOutlineGithub className="text-primary text-4xl border border-zinc-700 rounded-xl p-1" />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Always Curious, Always Coding
          </h1>
          <p className="text-zinc-400 text-md">
            I love diving into new challenges and seeing how much I've grown
            with each project.
          </p>
        </div>
      </div>
      <div className="col-span-2 border border-zinc-800 rounded-3xl">
        <Image
          src="/assets/hero-image.png"
          alt="avatar"
          width={300}
          height={300}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
