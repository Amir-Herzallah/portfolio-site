import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amirherzalla8@gmail.com',
      href: 'mailto:amirherzalla8@gmail.com',
      color: 'from-tech-cyan to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+962 77 554 0697',
      href: 'tel:+962775540697',
      color: 'from-tech-purple to-purple-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Amman, Jordan',
      href: null,
      color: 'from-tech-pink to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/amir-herzalla',
      href: 'https://linkedin.com/in/amir-herzalla',
      color: 'from-tech-green to-green-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Amir-Herzallah',
      href: 'https://github.com/Amir-Herzallah',
      color: 'from-orange-400 to-red-500',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-xl font-medium" style={{ color: 'var(--text-primary)' }}>
            Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="glass-strong rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 group"
                        >
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{info.label}</p>
                            <p className="text-lg font-semibold group-hover:text-tech-cyan transition-colors" style={{ color: 'var(--text-primary)' }}>
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{info.label}</p>
                            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-strong rounded-3xl p-8 text-center"
            >
              <div className="text-6xl mb-4">👋</div>
              <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Open to Opportunities</h4>
              <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                Currently available for full-time positions, contract work, and exciting collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-3xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-20 h-20 text-tech-green mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Your Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Your Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-tech-cyan via-tech-purple to-tech-pink text-white font-bold group relative overflow-hidden btn-tech shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        boxShadow: [
                          '0 0 20px rgba(0, 217, 255, 0.6)',
                          '0 0 40px rgba(168, 85, 247, 0.8)',
                          '0 0 20px rgba(0, 217, 255, 0.6)',
                        ],
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  </motion.button>
                </>
              )}
            </motion.form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p className="text-sm font-medium">
            © 2026 Amir Herzalla. Built with React, Framer Motion, and Three.js
          </p>
          <p className="text-xs mt-2 font-medium">
            Designed and developed with passion in Jordan 🇯🇴
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
