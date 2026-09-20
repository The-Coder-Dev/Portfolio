"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Menu, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";

interface NavLink {
  href: string;
  label: string;
  id: number;
}

interface MobileNavProps {
  links: NavLink[];
  children?: React.ReactNode;
}

export default function MobileNav({ links, children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* Header Bar Row */}
      <div className="w-full flex items-center justify-between py-3 px-5">
        {children}

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="p-2 text-neutral-700 hover:text-black rounded-lg transition-colors cursor-pointer focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Height-Slide Animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden w-full overflow-hidden border-t border-neutral-200/80 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-2 p-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-neutral-800 hover:text-black hover:bg-neutral-100/80 font-geist text-xs uppercase tracking-widest font-semibold transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.25, delay: links.length * 0.05 }}
                className="pt-2"
              >
                <Button className="w-full cursor-pointer rounded-xl justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" /> Ask me Anything
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
