import FadeIn from "./FadeIn";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: "Developing modern web applications using React, Next.js, and Tailwind CSS. Crafting responsive, accessible, and high-performance user interfaces.",
    icon: <Briefcase size={20} className="text-zinc-50" />,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Campus Connect Project",
    date: "2023 - 2024",
    description: "Built a comprehensive platform using Laravel backend and React/Inertia.js frontend. Implemented role-based access control and RESTful APIs.",
    icon: <Briefcase size={20} className="text-zinc-50" />,
  },
  {
    id: 3,
    role: "Informatics Student",
    company: "Universitas PGRI Madiun",
    date: "2023 - Present",
    description: "Currently pursuing a degree in Teknik Informatika. Relevant coursework includes Data Mining, Web Development, and Software Engineering. Completed Data Science project predicting Dota 2 match outcomes.",
    icon: <GraduationCap size={20} className="text-zinc-50" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 container mx-auto">
      <FadeIn>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-50">Experience & Education</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl">A summary of my professional journey and academic background.</p>
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto md:mx-0">
        <div className="relative border-l border-white/10 ml-4 md:ml-5 space-y-12 pb-4">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.15} direction="up" className="relative pl-8 md:pl-12">
              <div className="absolute -left-[20px] top-1 bg-zinc-900 border border-white/20 w-10 h-10 rounded-full flex items-center justify-center shadow-xl">
                {exp.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-zinc-50">{exp.role}</h3>
                <span className="flex items-center gap-2 text-sm text-zinc-500 font-medium bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} />
                  {exp.date}
                </span>
              </div>

              <h4 className="text-lg text-zinc-400 font-medium mb-4">{exp.company}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
