import { motion } from 'framer-motion'
import { ExternalLink, Calendar, KeyRound, CheckCircle2, Heart, UtensilsCrossed, Radio, LucideProps } from 'lucide-react'
import type React from 'react'

const projectIconMap: Record<string, React.FC<LucideProps>> = {
  Heart, UtensilsCrossed, Radio,
}
import { useInView } from '../hooks/useInView'
import { projects } from '../data/resume'

const projectAccents = [
  { border: 'border-pink-500/20', glow: 'hover:shadow-pink-500/10', tag: 'tag-violet' },
  { border: 'border-amber-500/20', glow: 'hover:shadow-amber-500/10', tag: 'tag-amber' },
  { border: 'border-cyan-500/20', glow: 'hover:shadow-cyan-500/10', tag: 'tag-cyan' },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Credential note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-bright border border-violet-500/25 text-sm">
            <KeyRound size={14} className="text-violet-400 shrink-0" />
            <span className="text-slate-400">Access any project with:</span>
            <span className="font-mono text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">test@yopmail.com</span>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Test@2618</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => {
            const accent = projectAccents[i % projectAccents.length]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glass-bright rounded-2xl overflow-hidden border ${accent.border} glow-card group transition-all duration-300`}
              >
                {/* Gradient header bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex items-center justify-center glass-bright rounded-2xl border border-border shrink-0">
                        {(() => { const I = projectIconMap[project.icon]; return I ? <I size={26} className="text-slate-300" /> : null })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Calendar size={13} />
                        {project.period}
                      </span>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-9 h-9 glass-bright rounded-xl flex items-center justify-center text-slate-400 hover:text-violet-400 border border-border hover:border-violet-500/50 transition-all"
                      >
                        <ExternalLink size={15} />
                      </motion.a>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {project.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={15} className="text-violet-500 mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`px-2.5 py-1 text-xs rounded-lg font-medium cursor-default transition-all ${accent.tag}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
