"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
    const skills = {
        Languages: ["C#", "Python", "JavaScript", "TypeScript"],
        "Web Technologies & Tools": [
        "React.js",
        "Next.js",
        "Node.js",
        "ASP.NET",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Express.js",
        ],
        "Databases & Cloud Platforms": [
        "Microsoft SQL Server",
        "MongoDB",
        "Azure",
        "AWS",
        "Vercel",
        ],
        "AI, Data & Analytics Tools": [
        "KNIME",
        "Google Colab",
        "Google Earth Engine",
        "GitHub Copilot",
        "LLMs",
        "ML Tools",
        ],
        "CI/CD & Version Control": ["Git", "GitHub", "GitHub Desktop"],
    } as const;

    type SkillCategory = keyof typeof skills;
    const categories = Object.keys(skills) as SkillCategory[];
    const [activeTab, setActiveTab] = useState<SkillCategory>(categories[0]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>

        {/* About Text */}
        <div className="max-w-2xl text-gray-300 space-y-4">
            <p>
            Hi, I’m <span className="font-semibold text-white">Dyne</span>, a
            passionate web developer who loves building modern, responsive, and
            user-friendly applications. I specialize in{" "}
            <span className="text-indigo-400">MERN Stack</span> and always enjoy
            learning new technologies.
            </p>
            <p>
            Outside of coding, I enjoy reading, exploring design trends, and
            discovering new coffee shops ☕.
            </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16 w-full max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Technical Skills
            </h2>
            <p className="text-gray-400 text-center mb-8">
            My expertise across various technologies and tools
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeTab === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
                >
                {category}
                </button>
            ))}
            </div>

            {/* Skills Grid */}
            <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
            {skills[activeTab].map((skill) => (
                <div
                key={skill}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white text-sm font-medium text-center shadow hover:scale-105 transition-transform"
                >
                {skill}
                </div>
            ))}
            </motion.div>
        </div>
        </section>
    );
}
