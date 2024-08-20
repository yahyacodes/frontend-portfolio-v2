import React from "react";
import { Button } from "./ui/button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const About = () => {
  return (
    <div className="leading-snug rounded-3xl border border-zinc-900 p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-4 text-primary">
          Hey, This is Me
        </h1>
        <p className="text-zinc-400 text-lg mb-8">
          I'm Yahya, a frontend developer who's obsessed with building cool
          stuff on the web. I'm passionate about learning and growing in what I
          do, and I love tackling new challenges. I've had the chance to work
          with some fantastic developers, and I'm always eager to dive into new
          projects. When I'm not coding, I'm usually working on side projects,
          exploring new tech, or enjoying some good series. Let's build
          something awesome together!
        </p>
        <Link href="https://github.com/yahyacodes" target="_blank">
          <Button variant="outline" className="text-primary flex gap-2">
            Browse my work
            <BiRightArrowAlt />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
