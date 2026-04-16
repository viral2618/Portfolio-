import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/resume'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Where I've worked</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent hidden md:block" />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative md:pl-24 mb-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-7 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 border-4 border-dark hidden md:flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Briefcase size={13} className="text-white" />
              </div>

              <div className="glass-bright rounded-2xl border border-border glow-card overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500" />

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">{job.role}</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold text-lg">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                      <span className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={13} className="text-violet-400" />
                        {job.period}
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
                        ● {job.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={15} className="text-violet-500 mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded-lg tag-violet font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
