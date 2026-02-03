import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer & Graphic Designer',
      company: 'Edge Computer Technologies',
      location: 'Philippines',
      period: 'Present',
      type: 'Full-time',
      description: [
        'Develop and maintain responsive web applications using modern technologies',
        'Create visually compelling graphic designs for digital and print media',
        'Collaborate with clients to deliver tailored solutions that meet their needs',
        'Optimize website performance and implement SEO best practices',
      ],
      current: true,
    },
    {
      title: 'IT Intern',
      company: 'DOST Region 1',
      location: 'Ilocos Sur, Philippines',
      period: 'Internship',
      type: 'Internship',
      description: [
        'Developed TORQUE - a vehicle reservation system that reduced processing time by 40%',
        'Contributed to the Integrated Fire Safety Compliance Management System (IFSCMS)',
        'Gained hands-on experience in full-stack development and database management',
        'Collaborated with government stakeholders to gather requirements and implement solutions',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-4 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-4 border-white dark:border-slate-900 shadow-lg z-10" />
                
                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Currently Working
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-4">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}