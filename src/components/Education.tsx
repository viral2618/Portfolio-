import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { education } from '../data/resume'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Academic background</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-bright rounded-2xl border border-border glow-card overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 via-cyan-500 to-amber-500" />
            <div className="p-8 relative">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <GraduationCap size={28} className="text-violet-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Degree</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{education.degree}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold text-lg mb-5">{education.university}</p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg tag-cyan text-sm">
                      <MapPin size={13} />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg tag-violet text-sm">
                      <Calendar size={13} />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/25 text-sm font-bold">
                      <Award size={13} />
                      CGPA: {education.cgpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
