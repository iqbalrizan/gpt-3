
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Brand from './components/brand/Brand';
import WhatGPT3 from './components/whatGPT3/WhatGPT3';
import CTA from './components/CTA/CTA';
import Blog from './components/Blog/Blog';
import Possibility from './components/Possibility/Possibility';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="gradient__BG">
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <CTA />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
