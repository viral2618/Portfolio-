import { motion } from 'framer-motion'
import { GitFork, Link2, Mail, Phone, MapPin, Download, ArrowDown, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/resume'

const orbs = [
  { size: 500, x: '-5%', y: '-10%', color: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', delay: 0 },
  { size: 400, x: '75%', y: '5%', color: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)', delay: 1.5 },
  { size: 350, x: '60%', y: '65%', color: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', delay: 3 },
  { size: 300, x: '15%', y: '70%', color: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', delay: 0.8 },
]

const stats = [
  { value: '3+', label: 'Production Apps' },
  { value: '8.6', label: 'CGPA' },
  { value: '1+', label: 'Year Experience' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-bg">
      {/* Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: orb.color }}
          animate={{ y: [0, -30, 0], x: [0, 12, 0] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Spinning ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-violet-500/5 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/5 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bright border border-violet-500/30 text-violet-300 text-sm mb-8 shadow-lg shadow-violet-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
          <Sparkles size={13} className="text-amber-400" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight leading-none"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/25 text-slate-200 text-xl md:text-2xl font-bold mb-4"
        >
          {personalInfo.title}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-base mb-3 tracking-wide"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-8"
        >
          <MapPin size={13} className="text-cyan-500" />
          {personalInfo.location}
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto text-slate-400 text-base leading-relaxed mb-10"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          {stats.map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-xl shadow-violet-500/30"
          >
            <Mail size={17} /> Get In Touch
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 glass-bright border border-violet-500/30 text-white rounded-xl font-semibold hover:border-violet-400/60 transition-all"
          >
            <GitFork size={17} /> GitHub
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 glass-bright border border-slate-700/60 text-slate-300 rounded-xl font-semibold hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <Download size={17} /> Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: GitFork, href: personalInfo.github, label: 'GitHub', color: 'hover:text-violet-400 hover:border-violet-500/50' },
            { icon: Link2, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-cyan-400 hover:border-cyan-500/50' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-amber-400 hover:border-amber-500/50' },
            { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone', color: 'hover:text-emerald-400 hover:border-emerald-500/50' },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className={`w-11 h-11 glass-bright rounded-xl flex items-center justify-center text-slate-500 border border-border transition-all ${color}`}
              title={label}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-600 text-xs"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={15} />
        </motion.div>
      </div>
    </section>
  )
}
