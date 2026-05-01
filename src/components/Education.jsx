import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Prime University",
      result: "CGPA: 3.52 / 4.00",
      year: "Expected: Jan 2027",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Group",
      result: "GPA: 5.00 / 5.00",
      year: "2020",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Science Group",
      result: "GPA: 4.94 / 5.00",
      year: "2018",
    }
  ];

  return (
    <section id="education" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education Journey</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2 opacity-30"></div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#0b0f14] border-2 border-primary md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-5/12 w-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <p className="text-primary font-medium mb-4">{item.institution}</p>
                  
                  <div className="flex flex-col space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span>{item.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrophyIcon size={16} className="text-accent" />
                      <span className="text-gray-300">{item.result}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom mini icon for result since Lucide's Trophy might be too big, reusing it but sized down
const TrophyIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export default Education;
