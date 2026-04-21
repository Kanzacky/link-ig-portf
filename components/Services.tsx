import FadeIn from "./FadeIn";
import { Code2, MonitorSmartphone, Wand2 } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Frontend Development",
    description: "Building scalable, performant, and accessible web applications using React, Next.js, and TypeScript.",
  },
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Responsive Design",
    description: "Creating fluid and adaptive layouts that provide an optimal viewing experience across all devices.",
  },
  {
    icon: <Wand2 size={32} />,
    title: "UI/UX Engineering",
    description: "Bridging the gap between design and engineering with smooth animations and intuitive interactions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 container mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-50 mb-12">Expertise</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-zinc-50 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50 mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
