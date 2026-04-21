import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web App",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    imageLabel: "Hero Image / Showcase",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    imageLabel: "Dashboard Preview",
  },
  {
    id: 3,
    title: "Analytics Tool",
    category: "SaaS",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    imageLabel: "Charts & Graphs",
  },
  {
    id: 4,
    title: "Agency Site",
    category: "Marketing",
    span: "col-span-1 md:col-span-2 md:row-span-1",
    imageLabel: "Landing Page Snippet",
  },
];

export default function BentoGrid() {
  return (
    <section id="work" className="py-20 px-6 md:px-12 container mx-auto">
      <FadeIn>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-50">Selected Work</h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors group">
            View all projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1} className={project.span}>
            <div className="group relative h-full w-full rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-900/50 hover:border-white/10 flex flex-col cursor-pointer">
              {/* Image Placeholder */}
              <div className="flex-1 w-full bg-zinc-800 border-b border-white/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <span className="text-zinc-500 text-sm font-medium tracking-wide z-20 group-hover:scale-105 transition-transform duration-500">
                  {project.imageLabel}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 shrink-0 relative z-20 bg-zinc-900">
                <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">{project.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50 group-hover:text-white transition-colors">{project.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={16} className="text-zinc-50" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
