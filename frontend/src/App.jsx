import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import GlobalServices from './pages/GlobalServices';
import KnowledgeBank from './pages/KnowledgeBank';
import Calculators from './pages/Calculators';
import Blogs from './pages/Blogs';
import Forms from './pages/Forms';
import Bulletins from './pages/Bulletins';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ClientPortal from './pages/ClientPortal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/global-services" element={<GlobalServices />} />
            <Route path="/knowledge-bank" element={<KnowledgeBank />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/bulletins" element={<Bulletins />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/client-portal" element={<ClientPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;