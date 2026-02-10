import { ThemeProvider, useTheme } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div 
      className="relative min-h-screen"
      style={{
        '--text-primary': theme === 'dark' ? '#ffffff' : '#111827',
        '--text-secondary': theme === 'dark' ? '#e5e7eb' : '#1f2937',
        '--text-tertiary': theme === 'dark' ? '#d1d5db' : '#374151',
        color: theme === 'dark' ? '#ffffff' : '#111827'
      }}
    >
      {/* Background Layer with Gradient */}
      <div 
        className="fixed inset-0 transition-all duration-700"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #0f172a 0%, #000000 50%, #1e293b 100%)'
            : 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #e0e7ff 100%)'
        }}
      />
      
      {/* Additional Pattern Overlay for Texture */}
      <div 
        className="fixed inset-0 transition-opacity duration-700"
        style={{
          opacity: theme === 'dark' ? 0.2 : 0.4,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0, 217, 255, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)`
        }}
      />
      
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
