import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Code2 } from 'lucide-react';

const OnlineProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/maahmuud007",
      icon: <Github size={28} />,
      color: "hover:text-white hover:border-white hover:bg-white/5",
      shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahmuud007/",
      icon: <Linkedin size={28} />,
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/5",
      shadow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Mahmuud007",
      icon: <Code2 size={28} />, // Using Code2 as a placeholder for Codeforces
      color: "hover:text-[#1F8ACB] hover:border-[#1F8ACB] hover:bg-[#1F8ACB]/5",
      shadow: "hover:shadow-[0_0_20px_rgba(31,138,203,0.3)]"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/mr.viruss/",
      icon: <Facebook size={28} />,
      color: "hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5",
      shadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]"
    }
  ];

  return (
    <section className="relative py-10">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col items-center gap-3 p-6 w-32 glass-card border border-white/5 text-gray-400 transition-all duration-300 ${profile.color} ${profile.shadow} group`}
          >
            <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              {profile.icon}
            </div>
            <span className="text-sm font-medium">{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default OnlineProfiles;
