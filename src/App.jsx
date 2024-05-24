import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
