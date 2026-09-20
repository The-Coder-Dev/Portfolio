"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Code2, Layers, Cpu, Zap } from "lucide-react";

// Stagger typography variants matching HeroHeading
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutPage() {
  const line1Words = ["Code", "is", "the", "craft."];
  const line2Words = ["Curiosity", "is", "the", "engine."];

  const focusCards = [
    {
      step: "01 / FOCUS",
      title: "Product-minded quality",
      description: "Building applications that feel fast, intuitive, polished, and delightful to interact with.",
    },
    {
      step: "02 / FOCUS",
      title: "Web apps, SaaS & AI tools",
      description: "Architecting modern full-stack platforms with Next.js, AI workflows, and cloud infrastructure.",
    },
    {
      step: "03 / FOCUS",
      title: "React, TypeScript, Node, Postgres",
      description: "A battle-tested tech stack optimized for maintainability, speed, and real-world scale.",
    },
    {
      step: "04 / FOCUS",
      title: "Optimized backend systems",
      description: "Designing robust APIs, efficient database queries, and resilient server-side architecture.",
    },
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Started with curiosity",
      text: "Tinkering with code early on, building small scripts and web experiments out of pure fascination.",
    },
    {
      num: "02",
      title: "Went full-stack",
      text: "Learned to bridge the gap between front-end UI design and back-end performance, creating end-to-end applications.",
    },
    {
      num: "03",
      title: "Building production software",
      text: "Focused on real-world reliability, clean modular architecture, accessible interfaces, and fast load times.",
    },
    {
      num: "04",
      title: "Working on the future",
      text: "Now building next-gen web tools, AI-assisted development systems, and sharpening engineering practices every day.",
    },
  ];

  const workPrinciples = [
    {
      icon: Code2,
      title: "Think before typing",
      text: "Understanding the problem and user goals thoroughly before writing a single line of code saves hours of rework.",
    },
    {
      icon: Layers,
      title: "Small surfaces, sharp details",
      text: "Micro-interactions, spacing, typography, and contrast turn ordinary digital interfaces into memorable products.",
    },
    {
      icon: Cpu,
      title: "Systems over hacks",
      text: "Clean, maintainable architecture and modular patterns win over quick, fragile hacks every single time.",
    },
    {
      icon: Zap,
      title: "Ship, then sharpen",
      text: "Getting software into users' hands provides real signal. Iterate relentlessly after launching into the world.",
    },
  ];

  const techStackRibbon = [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "TAILWIND CSS",
    "PYTHON",
    "FASTAPI",
    "POSTGRESQL",
    "DOCKER",
    "SYSTEM DESIGN",
  ];

  return (
    <main className="w-full min-h-screen pt-28 pb-20 overflow-x-hidden bg-background">
      {/* ---------------- SECTION 1: HERO HEADER ---------------- */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-10 pt-8 pb-16">
        <div className="flex flex-col gap-6">
          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest font-[manrope]"
          >
            <span className="text-primary">[</span>
            <span className="text-muted-foreground">01 ABOUT</span>
            <span className="text-primary">]</span>
          </motion.div>

          {/* Motion Stagger Typography Headline */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold font-[manrope] leading-[1.08] tracking-tight max-w-5xl flex flex-wrap gap-x-[0.25em] gap-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {line1Words.map((word, index) => (
              <span key={`l1-${index}`} className="inline-block overflow-hidden py-1">
                <motion.span variants={wordVariants} className="inline-block text-foreground">
                  {word}
                </motion.span>
              </span>
            ))}
            <div className="w-full h-0" /> {/* Line Break */}
            {line2Words.map((word, index) => (
              <span key={`l2-${index}`} className="inline-block overflow-hidden py-1">
                <motion.span variants={wordVariants} className="inline-block text-primary">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subtext & CTA */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-4xl"
          >
            <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-300 font-[manrope] leading-relaxed max-w-2xl">
              I’m Dev Sharma — a software developer who treats code like products, not projects.
              I design, build, and ship software end-to-end with focus on frontend finish,
              backend performance, and clean architecture.
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Button variant="default" size="lg" className="rounded-xl cursor-pointer">
                <Link href="/projects" className="flex">
                  See Projects <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-x cursor-pointer">
                <Link href="/contact" className="flex">
                  Contact <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TECH MARQUEE RIBBON ---------------- */}
      <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 py-4 overflow-hidden my-8">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs md:text-sm font-semibold font-[manrope] tracking-widest text-neutral-500 dark:text-neutral-400">
          {[...techStackRibbon, ...techStackRibbon].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- SECTION 2: FOCUS & CAPABILITIES ---------------- */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-10 py-16">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest font-[manrope]">
            <span className="text-primary">[</span> FOCUS <span className="text-primary">]</span>
          </p>
          <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-card hover:border-primary/50 transition-all duration-300 flex flex-col justify-between gap-6"
            >
              <span className="text-xs font-semibold text-muted-foreground tracking-wider font-[manrope]">
                {card.step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold font-[manrope] group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-[manrope]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 3: JOURNEY TIMELINE ("How I got here.") ---------------- */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-10 py-16">
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest font-[manrope]">
            <span className="text-primary">[</span> THE SHORT STORY <span className="text-primary">]</span>
          </p>
          <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Left Title */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold font-[manrope] tracking-tight sticky top-28">
              How I got here.
            </h2>
          </div>

          {/* Timeline List Right */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="text-xl font-bold font-[manrope] text-primary shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-[manrope] text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-1 font-[manrope] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: WORK PRINCIPLES ---------------- */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-10 py-16">
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest font-[manrope]">
            <span className="text-primary">[</span> HOW I WORK <span className="text-primary">]</span>
          </p>
          <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-card flex flex-col justify-between gap-6 hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-[manrope]">{item.title}</h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-[manrope]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------------- SECTION 5: BEYOND CODE (Dark Block) ---------------- */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-neutral-950 dark:bg-neutral-900 text-white rounded-3xl p-8 md:p-14 border border-neutral-800 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest font-[manrope]">
              <span className="text-primary">[</span> BEYOND CODE <span className="text-primary">]</span>
            </p>
            <div className="h-px w-full bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-bold font-[manrope] tracking-tight leading-tight">
                Not just a terminal.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-primary font-bold font-[manrope] text-lg sm:w-1/3">Reading</span>
                <span className="text-sm md:text-base text-neutral-300 font-[manrope] sm:w-2/3">
                  Product design systems, technical architecture, and developer workflow essays.
                </span>
              </div>
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-primary font-bold font-[manrope] text-lg sm:w-1/3">Gaming & Music</span>
                <span className="text-sm md:text-base text-neutral-300 font-[manrope] sm:w-2/3">
                  Atmospheric strategy games and lo-fi focus playlists during deep coding sessions.
                </span>
              </div>
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-primary font-bold font-[manrope] text-lg sm:w-1/3">Recharging</span>
                <span className="text-sm md:text-base text-neutral-300 font-[manrope] sm:w-2/3">
                  Long walks, fresh coffee, and testing out the latest AI tools and developer frameworks.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}