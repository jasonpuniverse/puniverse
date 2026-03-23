import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { System } from './pages/System';
import { Products } from './pages/Products';
import { AIAutomations } from './pages/AIAutomations';
import { Aetheo } from './pages/Aetheo';
import { Community } from './pages/Community';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-gray-400 font-sans selection:bg-purple-500/30 overflow-hidden relative flex flex-col">
        {/* Background Glows */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-teal-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/system" element={<System />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ai-automations" element={<AIAutomations />} />
            <Route path="/aetheo" element={<Aetheo />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
