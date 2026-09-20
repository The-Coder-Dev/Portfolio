import React from "react";
import { Link } from "next-view-transitions";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F94500] text-white py-16 md:py-24">
      <div className="max-w-350 mx-auto px-6 md:px-10 flex flex-col justify-between min-h-[480px]">
        {/* Top & Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Tagline + Main Headline */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/80 font-[manrope]">
              HAVE A SERIOUS IDEA?
            </p>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-[manrope] leading-[1.05] tracking-tight">
              Let’s build <br className="hidden sm:inline" />
              something <br className="hidden sm:inline" />
              that matters.
            </h2>
          </div>

          {/* Right Column: Subtext + Contact CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-3">
            <p className="text-base md:text-lg text-white/90 leading-relaxed font-[manrope] max-w-md">
              Open to thoughtful products, ambitious teams, and hard engineering problems.
            </p>
            <div>
              <Link
                href="mailto:hello@devsharma.dev"
                className="inline-flex items-center gap-1.5 text-xl md:text-2xl font-bold font-[manrope] border-b-2 border-white pb-1 hover:opacity-80 transition-opacity group duration-300"
              >
                <span>devsharma2057@gmail.com</span>
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider + Copyright & Social Links */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Name and Title */}
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg font-[manrope]">Dev Sharma</h3>
            <p className="text-xs md:text-sm text-white/80 font-[manrope]">
              Software Developer · © 2026
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:hello@devsharma.dev"
              aria-label="Email"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
