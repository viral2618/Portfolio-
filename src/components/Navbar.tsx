import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, KeyRound } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Credential Banner */}
      <div className="credential-bar w-full py-2 px-4 text-center text-xs text-slate-300 flex items-center justify-center gap-2 flex-wrap z-50 relative">
        <KeyRound size={12} className="text-violet-400 shrink-0" />
        <span className="text-slate-400">Demo credentials for any project:</span>
        <span className="font-mono bg-white/5 border border-violet-500/20 rounded px-2 py-0.5 text-violet-300">test@yopmail.com</span>
        <span className="text-slate-600">/</span>
        <span className="font-mono bg-white/5 border border-cyan-500/20 rounded px-2 py-0.5 text-cyan-300">Test@2618</span>
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-bright shadow-xl shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.06 }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="borderGrad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="36" height="36" rx="10" fill="rgba(124,58,237,0.12)" stroke="url(#borderGrad)" strokeWidth="1.5" />
              <text x="19" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="15" fill="url(#logoGrad)">VM</text>
            </svg>
            <span className="text-sm font-bold text-slate-300 hidden sm:block tracking-wide">viral<span className="text-violet-400">.dev</span></span>
          </motion.div>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm text-slate-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('Contact')}
            className="hidden md:block px-5 py-2 text-sm bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all"
          >
            Hire Me
          </motion.button>

          <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-bright border-t border-border"
            >
              <ul className="flex flex-col px-6 py-4 gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link)}
                      className="text-slate-300 hover:text-violet-400 transition-colors w-full text-left font-medium"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
