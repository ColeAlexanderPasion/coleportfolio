import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: 'BS Information Technology', sublabel: 'Graduate' },
    { icon: Briefcase, label: 'Web Developer', sublabel: 'Edge Computer Tech' },
    { icon: MapPin, label: 'Ilocos Sur', sublabel: 'Philippines' },
    { icon: Code2, label: 'Full-Stack', sublabel: 'Development' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I'm a passionate <strong className="text-slate-900 dark:text-white">IT Professional</strong> with 
                  expertise in full-stack development and graphic design. As a BS Information Technology graduate, 
                  I've honed my skills through hands-on experience in building government systems and modern web applications.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  My journey includes an impactful internship at <strong className="text-slate-900 dark:text-white">DOST Region 1</strong>, 
                  where I developed systems that improved operational efficiency. Currently, I'm contributing my skills 
                  at <strong className="text-slate-900 dark:text-white">Edge Computer Technologies</strong> as a Web Developer 
                  & Graphic Designer.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I believe in creating solutions that are not only functional but also visually compelling, 
                  combining technical expertise with creative design thinking.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}