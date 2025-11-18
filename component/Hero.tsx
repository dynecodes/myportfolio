"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
    return (
        <section className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            {/* Left: Text */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6 max-w-xl"
            >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Dyne H. Sombero
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300">
                A passionate{" "}
                <span className="text-indigo-400">Web Developer</span> crafting
                modern, responsive, and user-friendly experiences for the web.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
                <a
                href="#projects"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
                >
                View Projects
                </a>
                <a
                href="/DyRes (3).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition"
                >
                Resume
                </a>
            </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-12 md:mt-0"
            >
            <Image
                src="/images/profile.jpg"
                alt="Profile photo of Dyne H. Sombero"
                width={320}
                height={320}
                className="rounded-3xl shadow-2xl border border-white/10"
                priority
            />
            </motion.div>
        </div>
        </section>
    );
}

export default Hero;
