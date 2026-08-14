import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const liveProjects = [
  { title: 'Leetcode Solutions Daily', desc: 'Daily LeetCode solutions, tips & more for consistent DSA practice.', href: 'https://leet-code-solutions-svjh.vercel.app/', emoji: '🧠', color: '#f59e0b' },
  { title: 'Rock Paper Scissor', desc: 'Classic Rock Paper Scissor game with clean UI and smooth interactions.', href: 'https://swapnilgupta31.github.io/rockPaperScissor/', emoji: '✊', color: '#3b82f6' },
  { title: 'm4uDirect', desc: 'A modern media platform with a seamless browsing and streaming experience.', href: 'https://m4u-direct.vercel.app/', emoji: '🎬', color: '#8b5cf6' },
  { title: 'Tic Tac Toe', desc: 'Interactive Tic Tac Toe game with responsive design and game logic.', href: 'https://swapnilgupta31.github.io/tic-tac-toe/', emoji: '⭕', color: '#06b6d4' },
  { title: 'CricZone', desc: 'Cricket platform landing page with live match updates and player stats.', href: 'https://swapnilgupta31.github.io/CricZone_LandingPage', emoji: '🏏', color: '#10b981' },
  { title: 'Portfolio', desc: 'My personal developer portfolio showcasing projects, skills and experience.', href: 'https://portfolio-fe-swapnil-guptas-projects-2fb8af3d.vercel.app/', emoji: '🚀', color: '#ec4899' },
];

export default function LiveProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="live-projects" className="py-24" style={{ background: 'linear-gradient(180deg,#0f172a,#1a1f2e)' }}>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="section-title"
        >Live Projects</motion.h2>
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >Deployed & live on the web</motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map(({ title, desc, href, emoji, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 flex flex-col gap-4 group relative overflow-hidden cursor-pointer"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%,${color}18,transparent 70%)` }}
              />

              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: `linear-gradient(180deg,${color},transparent)` }} />

              <div className="flex items-start justify-between relative z-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${color}20`, border: `1px solid ${color}40`, boxShadow: `0 0 16px ${color}20` }}
                >
                  {emoji}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="glass w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-white transition-colors"
                >
                  <HiExternalLink size={16} />
                </motion.div>
              </div>

              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>

              <div className="relative z-10 mt-auto">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                >
                  Live ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
