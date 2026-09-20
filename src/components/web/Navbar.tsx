import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import InteractiveBlobatar from "./InteractiveBlobatar";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { href: "/", label: "Home", id: 1 },
    { href: "/about", label: "About", id: 2 },
    { href: "/projects", label: "Projects", id: 3 },
    { href: "/contact", label: "Contact", id: 4 },
];

const Navbar = () => {
    return (
        <header className="w-full px-4 sm:px-6 py-4 absolute top-0 z-99">
            <nav style={{viewTransitionName: "navbar"}} className="w-full max-w-350 mx-auto bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm transition-all duration-300 overflow-hidden">
                <MobileNav links={links}>
                    {/* Brand / Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-3">
                            <InteractiveBlobatar name="devs" size={38} />
                            <span className="font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-lg">
                                Dev Sharma
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links & CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-geist text-xs uppercase tracking-widest font-semibold transition-colors py-1 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <Button className="cursor-pointer rounded-xl">
                            <MessageCircle /> Ask me Anything
                        </Button>

                        <ThemeToggle />
                        </div>
                    </div>
                </MobileNav>
            </nav>
        </header>
    );
};

export default Navbar;