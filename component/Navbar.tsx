"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links: { name: string; href: string }[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    ];


    return (
        <nav className="w-[80%] ml-50 bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] fixed top-5 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo / Brand */}
            <Link href="/" className="text-2xl font-bold text-white">
            MyPortfolio
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6">
            {links.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    {link.name}
                </Link>
                </li>
            ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                // Close Icon
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                // Hamburger Icon
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                )}
            </button>
            </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
            <ul className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-black/80 rounded-b-[2rem]">
            {links.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="block text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </nav>
    );
};

export default Navbar;
