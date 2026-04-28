import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { System } from './pages/System';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Aetheo } from './pages/Aetheo';
import { Community } from './pages/Community';
import { ProductIntro } from './pages/ProductIntro';
import { Success } from './pages/Success';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function AppInner() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen font-sans relative flex flex-col transition-colors duration-200">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 dark:bg-purple-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-[var(--glow-opacity)]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-teal-500/15 dark:bg-teal-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-[var(--glow-opacity)]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-[var(--glow-opacity)]"></div>
      </div>

      {/* Navigation — fixed so it floats over hero video */}
      <div className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className={`relative z-10 flex-grow w-full ${isHome ? '' : 'max-w-6xl mx-auto px-6 pt-32 pb-16'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aetheo" element={<Aetheo />} />
          <Route path="/community" element={<Community />} />
          <Route path="/product/:slug" element={<ProductIntro />} />
          <Route path="/success" element={<Success />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
