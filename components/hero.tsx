import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="grid grid-cols-6 gap-4 text-primary">
      <div className="col-span-4 border border-zinc-900 p-6 rounded-3xl">
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
            <svg
              viewBox="0 0 128 128"
              width={35}
              height={35}
              className="border border-zinc-700 rounded-xl p-1.5"
            >
              <path
                d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
                fill="#F9F9F9"
                style={{ strokeWidth: ".104373" }}
              ></path>
            </svg>
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
      <div className="col-span-2 border border-zinc-900 rounded-3xl">
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
