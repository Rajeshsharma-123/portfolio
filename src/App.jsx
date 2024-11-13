import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import Themes from './component/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Blogs from './pages/Blog/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        {/* Define the route for the Home component */}
        <Route path="/" element={<Home />} />
        {/* Define other routes directly */}
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path='blog' element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
