import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import ServiceArea from './components/ServiceArea';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <BeforeAfter />
      <ServiceArea />
      <About />
      <Contact />
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;
