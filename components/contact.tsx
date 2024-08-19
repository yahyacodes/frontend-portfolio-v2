"use client";

import React from "react";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="col-span-12 md:col-span-9 rounded-lg border border-zinc-300 bg-background p-6">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-background px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-800 px-3 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </div>
  );
};

export default Contact;
