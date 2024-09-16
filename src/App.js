import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import Hero_section from './sections/Hero_section';
import Social_proof from './sections/Social_proof';
import Features from './sections/Features';
import Testimonial from './sections/Testimonial';
import Feature2 from './components/Feature2';
import FAQ_sction from './sections/FAQ_sction';
import Blog from './sections/Blog';
import CTA_section from './sections/CTA_section';
import Footer_section from './sections/Footer_section';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero_section />
      <Social_proof />
      <Features />
      <Testimonial/>
      <Feature2/>
      <FAQ_sction/>
      <Blog />
      <CTA_section />
      <Footer_section />
    </div>
  );
}

export default App;
