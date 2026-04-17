import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GitFork, Link2, Send, HandMetal } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/resume'

const contacts = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-violet-400 bg-violet-500/10 border-violet-500/25' },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25' },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#', color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' },
  { icon: GitFork, label: 'GitHub', value: personalInfo.github.replace('https://', ''), href: personalInfo.github, color: 'text-purple-400 bg-purple-500/10 border-purple-500/25' },
  { icon: Link2, label: 'LinkedIn', value: personalInfo.linkedin.replace('https://', ''), href: personalInfo.linkedin, color: 'text-sky-400 bg-sky-500/10 border-sky-500/25' },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Let's work together</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {contacts.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass-bright rounded-xl p-4 border border-border hover:border-violet-500/30 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${color}`}>
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">{label}</p>
                  <p className="text-slate-200 text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-bright rounded-2xl p-10 border border-border text-center relative overflow-hidden glow-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/25 flex items-center justify-center">
                <HandMetal size={30} className="text-violet-300" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Let's Build Something Amazing</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                I'm passionate about creating impactful products. If you're looking for a dedicated full-stack developer, let's connect!
              </p>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-xl shadow-violet-500/25"
              >
                <Send size={16} /> Send a Message
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
