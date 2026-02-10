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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Backend Development',
      color: 'from-tech-cyan to-blue-500',
      skills: [
        { name: 'Java (Spring Boot)', level: 90 },
        { name: 'Node.js (NestJS, Express)', level: 85 },
        { name: 'ASP.NET Core', level: 80 },
        { name: 'Perl', level: 75 },
      ],
    },
    {
      icon: Layers,
      title: 'Frontend Development',
      color: 'from-tech-purple to-purple-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'SolidJS', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'TypeScript/JavaScript', level: 90 },
        { name: 'HTML5/CSS3', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-tech-pink to-pink-500',
      skills: [
        { name: 'MySQL/PostgreSQL', level: 85 },
        { name: 'Oracle Database', level: 80 },
        { name: 'SQL Server', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      icon: Boxes,
      title: 'Architecture',
      color: 'from-tech-green to-green-500',
      skills: [
        { name: 'Microservices', level: 90 },
        { name: 'Event-Driven Architecture', level: 85 },
        { name: 'Clean Architecture', level: 85 },
        { name: 'SOLID Principles', level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Azure DevOps', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux/Bash', level: 85 },
      ],
    },
    {
      icon: MessageSquare,
      title: 'Messaging',
      color: 'from-indigo-400 to-blue-600',
      skills: [
        { name: 'RabbitMQ', level: 85 },
        { name: 'Apache Kafka', level: 80 },
        { name: 'WebSockets', level: 85 },
      ],
    },
    {
      icon: Workflow,
      title: 'Methodologies',
      color: 'from-teal-400 to-cyan-500',
      skills: [
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Clean Code', level: 90 },
        { name: 'Design Patterns', level: 85 },
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
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 font-medium">
            My toolkit for building exceptional software
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-2xl p-6 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  animate={isHovered ? { scale: 1.5, rotate: 180 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <TechIcon name={skill.name} size={18} />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                              duration: 0.8,
                              ease: 'easeOut',
                            }}
                          />
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
          className="mt-16 glass-strong rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Why Work With <span className="text-gradient">Me?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
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
