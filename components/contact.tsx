import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { VscFileSymlinkFile } from "react-icons/vsc";

const Contact = () => {
  return (
    <main className="py-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4 rounded-3xl border border-zinc-900 p-6">
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
          <Link href="mailto:yahya.codin@gmail.com">
            <Button
              variant="outline"
              className="text-primary w-full flex gap-2"
            >
              Get In Touch
              <BiRightArrowAlt />
            </Button>
          </Link>
        </div>

        <div className="lg:col-span-2 border border-zinc-900 rounded-3xl">
          <Image
            src="/assets/contact-image.png"
            alt="avatar"
            width={300}
            height={300}
            quality={100}
          />
          <div className="absolute -mt-[18.4rem] mx-2">
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
