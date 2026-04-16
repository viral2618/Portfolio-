import { Heart } from 'lucide-react'
import { personalInfo } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/3 to-transparent pointer-events-none" />
      <p className="text-slate-600 text-sm relative z-10 flex items-center justify-center gap-1.5">
        Designed & Built with <Heart size={12} className="text-violet-500 fill-violet-500" /> by{' '}
        <span className="gradient-text font-bold">{personalInfo.name}</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}
