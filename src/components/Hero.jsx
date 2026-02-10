import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollHint, setScrollHint] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollHint(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Amir-Herzallah', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amir-herzalla', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:amirherzalla8@gmail.com', label: 'Email' },
  ];

  return (
    <motion.section
      id="hero"
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-tech-cyan animate-pulse" />
            <span className="text-sm font-medium text-gradient">Available for opportunities</span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
            transition={{ duration: 0.5 }}
          >
            Amir
          </motion.span>
          {' '}
          <motion.span
            className="inline-block text-gradient"
            whileHover={{ scale: 1.05, rotate: [1, -1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            Herzalla
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Full-Stack Software Engineer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto font-medium"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Specializing in scalable backend systems, modern frontend experiences, and 
            <span className="text-tech-cyan font-bold drop-shadow-lg"> microservices architecture</span>.
            Passionate about creating elegant solutions to complex problems.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-strong rounded-full flex items-center justify-center group relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tech-cyan to-tech-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,217,255,0.6)]" />
                <Icon className="w-6 h-6 relative z-10 text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors drop-shadow-lg" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="glass-strong px-8 py-4 rounded-full font-semibold group relative overflow-hidden btn-tech"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-tech-cyan via-tech-purple to-tech-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileHover={{
                boxShadow: [
                  '0 0 20px rgba(0, 217, 255, 0.4)',
                  '0 0 40px rgba(168, 85, 247, 0.6)',
                  '0 0 20px rgba(0, 217, 255, 0.4)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Explore My Work
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {scrollHint && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-tech-cyan drop-shadow-lg" />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
