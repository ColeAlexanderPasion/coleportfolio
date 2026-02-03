import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'TORQUE',
      subtitle: 'Transport, Operation, and Reservation Query',
      description: 'A comprehensive government vehicle request and management system that streamlined the entire reservation process, from request submission to approval and tracking.',
      impact: 'Reduced processing time by 40%',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'IFSCMS',
      subtitle: 'Integrated Fire Safety Compliance Management System',
      description: 'Developed for the Bureau of Fire Protection, this system manages fire safety inspections, compliance tracking, and certification processes across multiple facilities.',
      impact: 'Streamlined compliance tracking',
      techStack: ['PHP', 'MySQL', 'jQuery', 'AJAX'],
      icon: Shield,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 lg:hidden" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg z-20`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6 w-fit">
                      <Zap className="w-4 h-4" />
                      {project.impact}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className={`bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 rounded-xl`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-xl border-slate-200 dark:border-slate-700"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
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