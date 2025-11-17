// export default function Experience() {
//     const experiences = [
//         {
//         year: "2024 - Present",
//         role: "Frontend Developer",
//         company: "Tech Corp",
//         details: "Building modern web applications with React, Next.js, and TailwindCSS.",
//         },
//         {
//         year: "2022 - 2024",
//         role: "Junior Web Developer",
//         company: "StartupX",
//         details: "Worked on full-stack features, optimized UI performance, and collaborated with designers.",
//         },
//     ];

//     return (
//         <section className="min-h-screen flex flex-col items-center justify-center px-6">
//         <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
//         <div className="space-y-8 max-w-3xl">
//             {experiences.map((exp, i) => (
//             <div
//                 key={i}
//                 className="border-l-4 border-indigo-500 pl-6 relative"
//             >
//                 <span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></span>
//                 <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
//                 <p className="text-gray-400">{exp.company} • {exp.year}</p>
//                 <p className="mt-2 text-gray-300">{exp.details}</p>
//             </div>
//             ))}
//         </div>
//         </section>
//     );
// }


export default function Experience() {
  const experiences = [
    {
      year: "May 2021 - Present",
      role: "Freelance Full-Stack Developer",
      company: "Self-employed / Remote • PH",
      details: [
        "Developed and deployed full-stack web apps using React (frontend) and Express.js API (backend) with MongoDB.",
        "Delivered tailored solutions for 3+ clients, increasing performance and usability by 30%.",
        "Built secure RESTful APIs with Express.js, handling 100+ daily user requests with JWT authentication.",
        "Integrated Cloudinary for image upload, optimization, and storage, enhancing media performance by 40%.",
        "Deployed apps to Vercel and Render with 99.9% uptime, managing source control with 100+ Git commits.",
      ],
    },
    {
      year: "May 2024 - July 2024",
      role: "Full-Stack Developer (OJT)",
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
