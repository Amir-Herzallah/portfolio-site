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
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 transition-all duration-700">
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
