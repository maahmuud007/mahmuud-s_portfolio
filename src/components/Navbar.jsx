import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Auto-update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(href.substring(1)); // immediately update on click
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const isActive = (href) => activeSection === href.substring(1);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => scrollToSection(e, '#hero')}
        >
          Mahmudul<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={!active ? { y: -1, transition: { duration: 0.2 } } : {}}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300 cursor-pointer select-none
                  ${active
                    ? 'text-white scale-105'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                  }
                `}
                style={active ? {
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  textShadow: '0 0 14px rgba(139, 92, 246, 1), 0 0 28px rgba(139, 92, 246, 0.4)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.15), inset 0 0 12px rgba(139, 92, 246, 0.05)',
                } : { border: '1px solid transparent' }}
              >
                {link.name}

                {/* Sliding glowing underline — animates smoothly between tabs */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.9), 0 0 20px rgba(6, 182, 212, 0.5)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`
                      px-4 py-3 rounded-xl text-base font-medium
                      transition-all duration-300
                      ${active
                        ? 'text-white bg-violet-500/10 border border-violet-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                      }
                    `}
                    style={active ? {
                      textShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
                      boxShadow: 'inset 0 0 14px rgba(139, 92, 246, 0.08)',
                    } : {}}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
