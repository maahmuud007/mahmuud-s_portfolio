import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, FileText, BarChart2 } from 'lucide-react';

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/maahmuud007',
    external: true,
    glowColor: 'rgba(139,92,246,0.7)',
    glowBorder: 'rgba(139,92,246,0.6)',
    activeBg: 'rgba(139,92,246,0.12)',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mahmuud007/',
    external: true,
    glowColor: 'rgba(59,130,246,0.7)',
    glowBorder: 'rgba(59,130,246,0.6)',
    activeBg: 'rgba(59,130,246,0.12)',
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    icon: BarChart2,
    href: 'https://codeforces.com/profile/Mahmuud007',
    external: true,
    glowColor: 'rgba(6,182,212,0.7)',
    glowBorder: 'rgba(6,182,212,0.6)',
    activeBg: 'rgba(6,182,212,0.12)',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/mr.viruss/',
    external: true,
    glowColor: 'rgba(99,102,241,0.7)',
    glowBorder: 'rgba(99,102,241,0.6)',
    activeBg: 'rgba(99,102,241,0.12)',
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: FileText,
    href: '#resume',
    external: false,
    glowColor: 'rgba(6,182,212,0.7)',
    glowBorder: 'rgba(6,182,212,0.6)',
    activeBg: 'rgba(6,182,212,0.12)',
  },
];

const Hero = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-24 md:pt-32">
      <div className="max-w-5xl">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-primary font-mono text-sm md:text-base">
            // Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-name-color pb-2"
          >
            Mahmudul Hasan
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 font-medium flex flex-wrap gap-2 md:gap-3 items-center"
          >
            <span>Computer Science &amp; Engineering Student</span>
            <span className="text-gray-600 hidden md:inline">·</span>
            <span className="hidden md:inline">Competitive Programmer</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl pt-2 pb-4"
          >
            Passionate problem solver with 3+ years of competitive programming experience and 500+ problems solved across multiple platforms. Currently pursuing B.Sc. in CSE at Prime University while leading the departmental programming club.
          </motion.p>

          {/* Buttons Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 pb-8">
            {socialLinks.map((btn) => {
              const isHovered = hoveredBtn === btn.id;
              const Icon = btn.icon;
              return (
                <motion.a
                  key={btn.id}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noreferrer' : undefined}
                  onMouseEnter={() => setHoveredBtn(btn.id)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -3 : 0,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium cursor-pointer select-none"
                  style={{
                    color: isHovered ? '#fff' : '#9ca3af',
                    background: isHovered ? btn.activeBg : 'rgba(15,17,21,1)',
                    border: `1px solid ${isHovered ? btn.glowBorder : 'rgba(255,255,255,0.08)'}`,
                    boxShadow: isHovered
                      ? `0 0 20px ${btn.glowColor}, 0 0 40px ${btn.glowColor.replace('0.7', '0.2')}`
                      : 'none',
                    textShadow: isHovered ? `0 0 12px ${btn.glowColor}` : 'none',
                    transition: 'background 0.25s, border 0.25s, box-shadow 0.25s, color 0.25s, text-shadow 0.25s',
                  }}
                >
                  <Icon size={18} />
                  {btn.label}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Stats Tiles */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-[#0a0c10] border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-colors duration-300 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wider">YEARS CP EXPERIENCE</p>
            </div>
            <div className="bg-[#0a0c10] border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-colors duration-300 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wider">PROBLEMS SOLVED</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
