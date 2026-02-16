import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Boxes,
  MessageSquare,
  Workflow,
  GitBranch,
  Layers,
} from 'lucide-react';
import TechIcon from './TechIcon';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const skillCategories = [
    {
      icon: Code2,
      title: 'Backend Development',
      color: 'from-tech-cyan to-blue-500',
      skills: [
        'Java (Spring Boot)',
        'Node.js (NestJS, Express)',
        'ASP.NET Core',
        'Perl',
      ],
    },
    {
      icon: Layers,
      title: 'Frontend Development',
      color: 'from-tech-purple to-purple-500',
      skills: [
        'React',
        'SolidJS',
        'Angular',
        'TypeScript/JavaScript',
        'HTML5/CSS3',
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-tech-pink to-pink-500',
      skills: [
        'MySQL/PostgreSQL',
        'Oracle Database',
        'SQL Server',
        'MongoDB',
        'Redis',
      ],
    },
    {
      icon: Boxes,
      title: 'Architecture',
      color: 'from-tech-green to-green-500',
      skills: [
        'Microservices',
        'Event-Driven Architecture',
        'Clean Architecture',
        'SOLID Principles',
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'from-orange-400 to-red-500',
      skills: [
        'Docker',
        'CI/CD',
        'Azure DevOps',
        'Git/GitHub',
        'Linux/Bash',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Messaging',
      color: 'from-indigo-400 to-blue-600',
      skills: [
        'RabbitMQ',
        'Apache Kafka',
        'WebSockets',
      ],
    },
    {
      icon: Workflow,
      title: 'Methodologies',
      color: 'from-teal-400 to-cyan-500',
      skills: [
        'Agile/Scrum',
        'Clean Code',
        'Design Patterns',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-base sm:text-xl font-medium px-2" style={{ color: 'var(--text-primary)' }}>
            My toolkit for building exceptional software
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-2xl p-5 sm:p-6 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                style={isLightMode ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(4px)'
                } : {}}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  animate={isHovered ? { scale: 1.5, rotate: 180 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ x: -30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ 
                          delay: index * 0.1 + skillIndex * 0.06,
                          type: 'spring',
                          stiffness: 150,
                          damping: 12
                        }}
                        whileHover={{ 
                          x: 8,
                          transition: { duration: 0.2 }
                        }}
                        className="group cursor-default"
                      >
                        <div 
                          className="relative overflow-hidden px-4 py-3 rounded-xl bg-white dark:bg-black/20 hover:bg-gray-50 dark:hover:bg-black/30 border border-gray-300 dark:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                          style={isLightMode ? {
                            backgroundColor: '#ffffff',
                            borderColor: '#e5e7eb',
                            opacity: '1'
                          } : {}}
                        >
                          {/* Accent bar */}
                          <motion.div
                            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${category.color}`}
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : {}}
                            transition={{ delay: index * 0.1 + skillIndex * 0.06 + 0.2, duration: 0.4 }}
                          />
                          
                          <div className="relative flex items-center gap-3 pl-2">
                            {/* Logo container with gradient background */}
                            <motion.div
                              className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <TechIcon name={skill} size={24} className="text-white drop-shadow-md" />
                            </motion.div>
                            
                            {/* Technology name */}
                            <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                              {skill}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 glass-strong rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Why Work With <span className="text-gradient">Me?</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Performance First',
                description: 'Proven track record of optimizing systems for 95% performance improvements',
                icon: '⚡',
              },
              {
                title: 'Clean Code Advocate',
                description: 'Strong believer in SOLID principles, design patterns, and maintainable architecture',
                icon: '✨',
              },
              {
                title: 'Fast Learner',
                description: 'Continuously upskilling through courses and competitive programming',
                icon: '🚀',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
