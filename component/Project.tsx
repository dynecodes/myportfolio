

export default function Projects() {
    const projects = [
          {
            title: "Admin Leads Management Dashboard",
            description:
                  "Developed a full admin customer relationship management (CRM) system for managing leads, customers, bookings, messaging, services, teams, and scheduling through a centralized dashboard.",
            stack: "React | TypeScript | Tailwind CSS | REST APIs | Admin UI",
            links: [
                { label: "Admin Dashboard Preview", url: "/admin.pdf" },
            ],
        },
        {
            title: "WordPress SEO Automation with n8n (HTML & Alt Text Optimization)",
            description:
            "Automated WordPress SEO using n8n by generating SEO-optimized HTML and image alt text with OpenAI and updating posts directly via the WordPress REST API.",
            stack: "n8n | WordPress REST API | OpenAI | JavaScript | HTTP APIs",
            links: [
                { label: "Workflow Demo", url: "/n8n-workflow.pdf" },
            ],
        },
        {
            title: "PEMO Data Banking System",
            description:
                "Full-Stack Web for Provincial Environment and Management Office system in managing environmental data.",
            stack: "ASP.NET | C# | Microsoft SQL Server | Azure",
           // Use this Login account: User Name: 11265276 Password: 60-dayfreetrial
            links: [
                { label: "Admin Dashboard Preview", url: "/pemo.pdf" },
            ],
        },
        {
            title: "Real Estate Website UI",
            description: "A modern responsive real estate website UI design.",
            stack: "Next.js | TypeScript | Tailwind CSS",
            links: [
                { label: "Live Site", url: "https://home-rate-web-cum6rozeb-dynecodes-projects.vercel.app" },
            ],
        },
        {
            title: "Cartzy Shop",
            description:
                "Full-stack MERN application with authentication and Stripe payments.",
            stack: "MongoDB | Express.js | React.js | Node.js",
            links: [
                { label: "Frontend", url: "https://mern-ecommerce-webapp-front-end.onrender.com/" },
                { label: "Admin", url: "https://mern-ecommerce-webapp-admin.onrender.com/" },
            ],
        },
      
    ];

    return (
        <section className="min-h-screen px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Projects
            </h1>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                    >
                        <h2 className="text-2xl font-semibold text-white">
                            {project.title}
                        </h2>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                        <p className="text-indigo-300 text-sm mt-2">{project.stack}</p>
                        <div className="mt-4 flex flex-wrap gap-4">
                            {project.links.map((link, j) => (
                                <a
                                    key={j}
                                    href={link.url}
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    {link.label} →
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
