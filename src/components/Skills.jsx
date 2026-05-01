import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    category: "Programming & Problem Solving",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "Algorithms", level: "Advanced" },
      { name: "Data Structures", level: "Advanced" },
      { name: "STL", level: "Intermediate" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Dynamic Programming", level: "Intermediate" },
      { name: "Graph Theory", level: "Intermediate" },
      { name: "Number Theory", level: "Familiar" },
      { name: "Object-Oriented Programming", level: "Intermediate" }
    ]
  },
  {
    category: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Node.js", level: "Familiar" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "MySQL", level: "Familiar" },
      { name: "VS Code", level: "Advanced" }
    ]
  }
];

const getLevelStyles = (level) => {
  switch (level) {
    case 'Advanced':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]';
    case 'Intermediate':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]';
    case 'Familiar':
      return 'bg-gray-500/10 text-gray-300 border-gray-500/30 hover:border-gray-400 hover:shadow-[0_0_15px_rgba(156,163,175,0.4)]';
    default:
      return 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30';
  }
};

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] mx-auto md:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ translateY: -5 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/5 text-gray-300 group-hover:text-white transition-colors duration-300 border border-white/5">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-300 cursor-default ${getLevelStyles(skill.level)}`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
          <span>Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]"></div>
          <span>Intermediate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.6)]"></div>
          <span>Familiar</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
