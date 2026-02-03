import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SQL', level: 85 },
        { name: 'Python (Django)', level: 70 },
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Frontend Development', level: 90 },
        { name: 'Backend Development', level: 85 },
        { name: 'WordPress', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'Navicat', level: 85 },
        { name: 'Database Design', level: 80 },
        { name: 'Query Optimization', level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Design',
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'XAMPP', level: 90 },
        { name: 'Photoshop', level: 80 },
        { name: 'Canva', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-4 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/5 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}