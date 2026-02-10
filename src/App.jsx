import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-gray-900 dark:text-gray-100">
        {/* Background Layer with Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-cyan-50/80 via-white to-indigo-50/80 dark:from-gray-950 dark:via-black dark:to-gray-900 transition-all duration-700" />
        
        {/* Additional Pattern Overlay for Texture */}
        <div className="fixed inset-0 transition-opacity duration-700 opacity-40 dark:opacity-20" 
          style={{
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
    </ThemeProvider>
  );
}

export default App;
