

export default function Experience() {
  const experiences = [
    {
      year: "September 2024 - November 2024",
      role: "Frontend Developer & Automation Engineer (Project-Based Contract)",
      company: "Maggymaid • Remote, PH",
      details: [
        "Contract-based role focused on admin-facing CRM dashboard including leads, customers, bookings, messaging, teams, availability, and settings.",
        "Created reusable UI components with React, TypeScript, and Tailwind CSS for scalable frontend architecture.",
        "Integrated frontend modules with REST APIs for real-time bookings, calendars, and team management.",
        "Developed automated n8n workflows integrating WordPress REST API and OpenAI for SEO content generation.",
        "Reduced manual content publishing workload by 80% through end-to-end automation workflows."
      ],
    },
    {
      year: "May 2021 - July 2025",
      role: "Freelance Full-Stack Developer",
      company: "Fiverr / Remote • PH",
      details: [
        "Developed and deployed full-stack web apps using React (frontend) and Express.js API (backend) with MongoDB.",
        "Delivered tailored solutions for 3+ clients, increasing performance and usability by 30%.",
        "Built secure RESTful APIs with Express.js, handling 100+ daily user requests with JWT authentication.",
        "Integrated Cloudinary for image upload, optimization, and storage, enhancing media performance by 40%.",
        "Deployed apps to Vercel and Render with 99.9% uptime.",
      ],
    },
    {
      year: "May 2024 - July 2024",
      role: "Full-Stack Developer (OJT / Internship)",
      company:
        "Provincial Government of South Cotabato - Information Technology Division • Koronadal, PH",
      details: [
        "Developed a full-stack data banking system using ASP.NET (C#), improving data retrieval speed by 30%.",
        "Designed and optimized SQL queries, reducing report generation time by 40%.",
        "Collaborated in a 5-person Agile team, contributing to 90% of front-end UI components and backend integration.",
        "Used GitHub Desktop to manage 15+ pull requests, resolving code conflicts and ensuring smooth version control.",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
      <div className="space-y-10 max-w-3xl">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-indigo-500 pl-6 relative">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></span>
            <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.year}</p>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
