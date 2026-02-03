import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles, Shield, Code, Cpu, Bot, Cog } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Digital Transformation',
      issuer: 'Professional Development',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cybersecurity',
      issuer: 'PicsPPro',
      icon: Shield,
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Rust Programming',
      issuer: 'Technical Certification',
      icon: Code,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'IoT Basics',
      issuer: 'Internet of Things',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Robotics',
      issuer: 'Automation & Robotics',
      icon: Bot,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Technical Training',
      issuer: 'Various Platforms',
      icon: Cog,
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="certificates" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Certificates & Training
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 h-full overflow-hidden">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="absolute inset-[2px] bg-white dark:bg-slate-800 rounded-[14px] z-10" />
                
                <div className="relative z-20">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="w-4 h-4" />
                    View Certificate
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}