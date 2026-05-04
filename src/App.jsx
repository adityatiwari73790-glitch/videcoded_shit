import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Map, Package, Truck, Shuffle, Brain, Globe, Rocket, Sun } from 'lucide-react';
import Shipments from './pages/Shipments';
import Drivers from './pages/Drivers';
import RoutePlanner from './pages/RoutePlanner';
import RoutesPage from './pages/RoutesPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="top-bar">
          <div className="top-bar-title">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', padding: '6px' }}>
              <Rocket size={20} color="white" />
            </div>
            <span>AI Smart Supply Chain</span>
          </div>
          <div className="header-controls">
            <div className="icon-box" style={{ border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              <Sun size={18} color="#fcd34d" />
            </div>
          </div>
        </header>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/shipments" replace />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/routes" element={<RoutesPage />} />
          </Routes>
        </main>

        <nav className="bottom-nav">
          <NavLink to="/route-planner" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Map />
            <span>Route Planner</span>
          </NavLink>
          <NavLink to="/shipments" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Package />
            <span>Shipments</span>
          </NavLink>
          <NavLink to="/drivers" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Truck />
            <span>Drivers</span>
          </NavLink>
          <NavLink to="/routes" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Shuffle />
            <span>Routes</span>
          </NavLink>
          <div className="nav-item">
            <Brain color="#f43f5e" />
            <span>Insights</span>
          </div>
          <div className="nav-item">
            <Globe color="#0ea5e9" />
            <span>Live Data</span>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default App;
