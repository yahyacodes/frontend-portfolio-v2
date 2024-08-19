import React from "react";
import { SiGithub, SiTiktok, SiYoutube, SiGitter } from "react-icons/si";

const Socials = () => {
  return (
    <>
      <div className="col-span-6 rounded-lg bg-red-500 md:col-span-3">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiYoutube />
        </a>
      </div>
      <div className="col-span-6 rounded-lg bg-green-600 md:col-span-3">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </div>
      <div className="col-span-6 rounded-lg bg-zinc-50 md:col-span-3">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <SiTiktok />
        </a>
      </div>
      <div className="col-span-6 rounded-lg bg-blue-500 md:col-span-3">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGitter />
        </a>
      </div>
    </>
  );
};

export default Socials;
