import Navbar from './components/common/Navbar';
import Hero from './components/Hero';
import Result from './components/Result';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import News from './components/News';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/common/Footer';
import { HERO_BG } from './utils/helper';

function App() {
  return (
    <div>
      <div className='bg-center bg-cover bg-no-repeat' style={HERO_BG}>
        <Navbar />
        <Hero />
      </div>
      <Result />
      <About />
      <Services />
      <Experience />
      <News />
      <Expertise />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;