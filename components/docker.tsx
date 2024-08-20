import React from "react";
import { FiMapPin } from "react-icons/fi";

const Blogs = () => {
  return (
    <div className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 rounded-lg border border-zinc-300 bg-background p-6">
      <FiMapPin className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Cyberspace</p>
    </div>
  );
};

export default Blogs;
