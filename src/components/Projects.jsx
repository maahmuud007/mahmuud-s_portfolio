import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Add project objects here in the future
  const projects = [];

  return (
    <section id="projects" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
      </motion.div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="glass-card h-full p-8 flex flex-col relative overflow-hidden">
                {/* Top gradient glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110">
                      <Github size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors hover:scale-110">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full py-20 flex flex-col items-center justify-center glass-card border border-dashed border-white/20 text-center rounded-2xl"
        >
          <div className="w-20 h-20 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            <Github className="text-gray-500" size={32} />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Projects coming soon...</h3>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            I am currently curating and polishing my competitive programming projects and tools. Check back later to see my latest work!
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
