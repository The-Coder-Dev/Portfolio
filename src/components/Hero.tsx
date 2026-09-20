"use client";

import { motion } from "motion/react";
import DottedBackground from "@/components/originkit/ui/dotmatrix-variant-5";
import InteractiveBlobatar from "@/components/web/InteractiveBlobatar";
import HeroHeading from "@/components/web/HeroHeading";

import { DownloadCloud, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 1. Dotted Matrix WebGL Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-7">
        <DottedBackground
          frequency={2}
          speed={1.2}
          colors={["#EFCDB9", "#EFCDB9", "#EFCDB9"]}
          cellSize={16}
          gamma={12}
          paletteBias={6}
          useGlyphAtlas={true}
          characters="10010101<>/{}"
        />
      </div>

      {/* Hero Content  */}
      <div className="absolute inset-0 z-50 w-full h-full">
        <div className="w-full h-full mx-auto max-w-350 flex flex-col justify-end px-10 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-center gap-3"
          >
            <InteractiveBlobatar
              name="devs"
              hue={35}
              size={130}
              showOnlineStatus={true}
            />

            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground shimmer shimmer-color-primary">Developer & Game Lover</span>
              <h1 className="text-lg font-[manrope] font-bold leading-1.5">
                Hi, I'm <span className="">Devraj Sharma</span>
              </h1>
            </div>
          </motion.div>
          <HeroHeading />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm md:text-md   text-neutral-600 dark:text-neutral-300 font-normal"
          >
            Developer focused on web applications, SaaS, AI-assisted development, and backend engineering.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row items-center gap-5 border-t-2 border-black/5 max-w-xl mt-5">
            <Button variant={"default"} size={"lg"} className="mt-5 rounded-lg cursor-pointer">
              View Projects
              <ArrowRight />
            </Button>
            <Button variant={"outline"} size={"lg"} className="mt-5 rounded-lg cursor-pointer">
              Download Resume
              <DownloadCloud />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
