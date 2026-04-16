import { motion } from 'framer-motion'
import { Palette, Server, Database, Cloud, Lightbulb, LucideProps } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { skills } from '../data/resume'

const iconMap: Record<string, React.FC<LucideProps>> = {
  Palette, Server, Database, Cloud, Lightbulb,
}

const categoryColors = [
  { tag: 'tag-violet', ring: 'border-violet-500/30 bg-violet-500/10 text-violet-400' },
  { tag: 'tag-cyan',   ring: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { tag: 'tag-amber',  ring: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { tag: 'tag-violet', ring: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { tag: 'tag-cyan',   ring: 'border-teal-500/30 bg-teal-500/10 text-teal-400' },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">A curated stack of tools I use to build production-grade applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const colors = categoryColors[i % categoryColors.length]
            const Icon = iconMap[group.icon] ?? Palette
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-bright rounded-2xl p-6 glow-card border border-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${colors.ring}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{group.category}</h3>
                    <p className="text-slate-600 text-xs">{group.items.length} technologies</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06 }}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium cursor-default transition-all ${colors.tag}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
