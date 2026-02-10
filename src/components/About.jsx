import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, TrendingUp, Zap } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Zap,
      title: '95% Performance Boost',
      description: 'Rewrote a complex conversion engine achieving massive performance improvements',
      color: 'from-tech-cyan to-blue-500',
    },
    {
      icon: TrendingUp,
      title: '100% Achievement Rating',
      description: 'Perfect performance rating within first 7 months at Wiley/Atypon',
      color: 'from-tech-purple to-purple-500',
    },
    {
      icon: BookOpen,
      title: 'Computer Engineering',
      description: 'B.Sc. from University of Jordan with 3.60 GPA',
      color: 'from-tech-pink to-pink-500',
    },
    {
      icon: Award,
      title: 'Student of the Year',
      description: 'SOTY award with 96.0% high school average',
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed px-2"
            style={{ color: 'var(--text-primary)' }}
            variants={itemVariants}
          >
            I'm a passionate Full-Stack Software Engineer based in{' '}
            <span className="text-tech-cyan font-bold drop-shadow-lg">Amman, Jordan</span>, specializing in building 
            scalable backend systems and modern web applications. With expertise in{' '}
            <span className="text-tech-purple font-bold drop-shadow-lg">Java (Spring Boot)</span>,{' '}
            <span className="text-tech-pink font-bold drop-shadow-lg">Node.js</span>, and{' '}
            <span className="text-tech-green font-bold drop-shadow-lg">React</span>, I create elegant solutions to complex problems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong rounded-2xl p-5 sm:p-6 group hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {highlight.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 glass-strong rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Currently Working At
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2 animate-pulse flex-shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-tech-cyan drop-shadow-lg">Wiley/Atypon</h4>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Software Engineer - eJournalPress Team</p>
                    <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Sept 2024 - Present</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                What I Do Best
              </h3>
              <div className="space-y-3">
                {[
                  'Microservices Architecture',
                  'Event-Driven Systems (RabbitMQ/Kafka)',
                  'Real-time Features (WebSockets)',
                  'Clean Architecture & SOLID Principles',
                  'CI/CD & Azure DevOps',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-tech-cyan to-tech-purple shadow-lg flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
