import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Treatments } from './components/sections/Treatments';
import { Testimonials } from './components/sections/Testimonials';
import { Insurance } from './components/sections/Insurance';
import { Contact } from './components/sections/Contact';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Treatments Section */}
        <Treatments />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Insurance Section */}
        <Insurance />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Final CTA Section */}
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
