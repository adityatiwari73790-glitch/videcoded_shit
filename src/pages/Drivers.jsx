import React from 'react';
import { Package, CheckSquare, Truck, XCircle, Search, Plus } from 'lucide-react';

const Drivers = () => {
  return (
    <div className="page-container">
      <div className="status-grid">
        <div className="glass-card status-card">
          <div className="status-header">
            <div className="icon-box">
              <Package size={20} color="#60a5fa" />
            </div>
            <span className="badge blue">0 active</span>
          </div>
          <div>
            <div className="status-value">0</div>
            <div className="status-label">Total Orders</div>
          </div>
        </div>

        <div className="glass-card status-card">
          <div className="status-header">
            <div className="icon-box">
              <CheckSquare size={20} color="#4ade80" />
            </div>
            <span className="badge green">—</span>
          </div>
          <div>
            <div className="status-value">0</div>
            <div className="status-label">Delivered</div>
            <div className="status-sublabel">successfully delivered</div>
          </div>
        </div>

        <div className="glass-card status-card">
          <div className="status-header">
            <div className="icon-box">
              <Truck size={20} color="#f87171" />
            </div>
            <span className="badge green">None</span>
          </div>
          <div>
            <div className="status-value">0</div>
            <div className="status-label">In Transit</div>
          </div>
        </div>

        <div className="glass-card status-card">
          <div className="status-header">
            <div className="icon-box">
              <XCircle size={20} color="#f87171" />
            </div>
            <span className="badge green">None</span>
          </div>
          <div>
            <div className="status-value">0</div>
            <div className="status-label">Cancelled</div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '4px' }}>
              <Truck size={22} color="#ef4444" />
              Driver Management
            </h2>
            <p className="status-sublabel">
              0 drivers · 0 active
            </p>
          </div>
          <button className="primary-btn">
            <Plus size={16} />
            Add Driver
          </button>
        </div>

        <div className="empty-state" style={{ marginTop: '24px' }}>
          <div className="icon-box" style={{ width: '48px', height: '48px', marginBottom: '12px' }}>
            <Truck size={24} color="#ef4444" />
          </div>
          <h3>No drivers yet</h3>
          <p>Add your first driver to get started</p>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
