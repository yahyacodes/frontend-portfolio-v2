"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import { VscFileSymlinkFile } from "react-icons/vsc";

const Contact = () => {
  return (
    <main className="py-4">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 rounded-3xl border border-zinc-900 p-6">
          <p className="mb-3 text-sm text-zinc-500">
            I'm always trying to level up my skills
          </p>
          <h1 className="mt-4 text-2xl max-w-lg font-semibold text-primary mb-4">
            I'm currently getting into TypeScript and exploring new design
            ideas.
          </h1>
          <p className="mb-3 text-md text-zinc-500">
            leveling up my frontend skills with side projects. Gotta keep up
            with the latest design trends too. Holla if you wanna collaborate or
            just talk tech
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-primary w-full flex gap-2"
              >
                Get In Touch
                <BiRightArrowAlt />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/dialog-logo.png"
                    alt="avatar"
                    className="rounded-full"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
                <div className="mx-auto text-center">
                  <DialogTitle className="text-primary text-3xl">
                    Let's have a chat!
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400">
                    Enter your details below and I will get back to you.
                  </DialogDescription>
                </div>
              </DialogHeader>
              <div className="py-4">
                <div className="mt-4">
                  <Label htmlFor="name" className="text-primary">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="col-span-3 text-zinc-400"
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="email" className="text-primary">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    className="col-span-3 text-zinc-400"
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="message" className="text-primary">
                    Message
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    className="w-full text-zinc-400"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="submit"
                  className="text-primary w-full flex gap-2"
                >
                  Send
                  <AiOutlineSend />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="col-span-2 border border-zinc-900 rounded-3xl">
          <Image
            src="/assets/contact-image.png"
            alt="avatar"
            width={300}
            height={300}
            quality={100}
          />
          <div className="absolute -mt-[18.4rem] mx-[17.6rem]">
            <Link href="/assets/yahyaDahir.pdf" target="_blank">
              <VscFileSymlinkFile className="text-primary text-4xl border border-zinc-700 rounded-xl p-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
