import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      company: 'Wiley/Atypon',
      role: 'Software Engineer',
      location: 'USA/Jordan [Hybrid]',
      period: 'Sept 2024 - Present',
      description: 'Part of the eJournalPress team, handling the end-to-end manuscript submission flow.',
      highlights: [
        'Rewrote a complex conversion engine achieving 95% performance improvement',
        'Contributing to 12 releases per year with consistent on-time delivery',
        'Achieved 100% performance rating within first 7 months',
        'Completed multiple technical courses on LinkedIn',
      ],
      color: 'from-tech-cyan to-blue-500',
    },
    {
      company: 'Safe App',
      role: 'Software Engineer (Contract)',
      location: 'USA [Remote]',
      period: 'Oct 2024 - May 2025',
      description: 'Developed modern, responsive web applications with focus on scalable backend systems.',
      highlights: [
        'Built reactive user interfaces using SolidJS (TypeScript)',
        'Designed Node.js backend services with clean architecture',
        'Implemented event-driven architecture using RabbitMQ and Kafka',
        'Built real-time features using WebSockets',
        'Integrated Temporal.io for orchestrating long-running workflows',
      ],
      color: 'from-tech-purple to-purple-500',
    },
    {
      company: 'Tahaluf Al-Emarat Technical Solutions',
      role: 'Full Stack Developer',
      location: 'UAE [Remote]',
      period: 'July 2023 - Sept 2024',
      description: 'Designed and delivered scalable national systems with clean code practices.',
      highlights: [
        'Built Jordan\'s new Passport System and Airport e-Gate',
        'Applied SOLID principles and microservices architecture',
        'Developed RESTful services using Java and ASP.NET Core',
        'Used Azure DevOps for CI/CD pipelines',
        'Worked with Angular, Oracle DB, and SQL Server',
      ],
      color: 'from-tech-pink to-pink-500',
    },
    {
      company: 'PayOne',
      role: 'Backend Java Developer',
      location: 'Jordan [On-site]',
      period: 'July 2022 - May 2023',
      description: 'Worked as a Java backend engineer on HR Information Systems.',
      highlights: [
        'Contributed to SuiteCRM customization and Jira integrations',
        'Gained hands-on experience with Spring Boot',
        'Applied OOP principles and Git/GitHub workflows',
      ],
      color: 'from-tech-green to-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-2 sm:px-6" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-base sm:text-xl font-medium px-2" style={{ color: 'var(--text-primary)' }}>
            My professional journey through innovative tech companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-2 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-cyan via-tech-purple to-tech-pink"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-12`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-2 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${exp.color} -translate-x-1/2 z-10 border-2 sm:border-4 border-white dark:border-gray-900`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content card */}
                <motion.div
                  className={`w-full md:w-[calc(50%-3rem)] ml-8 sm:ml-20 md:ml-0 glass-strong rounded-2xl p-4 sm:p-6 group hover:scale-105 transition-all cursor-pointer ${
                    expandedIndex === index ? 'ring-2 ring-tech-cyan' : ''
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white/90 dark:bg-gray-800/90 shadow-sm flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <CompanyLogo company={exp.company} size="lg" />
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-2xl font-bold truncate" style={{ color: 'var(--text-primary)' }}>
                          {exp.company}
                        </h3>
                        <p className="text-sm sm:text-lg text-tech-cyan font-semibold drop-shadow-lg">{exp.role}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="break-words">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mb-3 sm:mb-4 font-medium text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                    {exp.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-600">
                      <h4 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={expandedIndex === index ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: hIndex * 0.1 }}
                            className="flex items-start gap-2 font-medium text-sm sm:text-base"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 sm:mt-2 flex-shrink-0 shadow-lg`} />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
