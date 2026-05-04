import React from 'react';
import { Package, CheckSquare, Truck, XCircle, Search } from 'lucide-react';

const Shipments = () => {
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
        <h2 className="section-title">
          <Package size={22} color="#fcd34d" />
          All Orders
        </h2>
        <p className="status-sublabel" style={{ marginBottom: '16px' }}>
          0 in transit · 0 delivered · 0 cancelled
        </p>

        <div className="search-bar">
          <Search size={18} color="#8b92a5" />
          <input type="text" placeholder="Search by driver, location, order ID..." />
        </div>

        <div className="filter-row">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">
            <Truck size={14} color="#ef4444" />
            In Transit
          </button>
          <button className="filter-btn">
            <CheckSquare size={14} color="#22c55e" />
            Delivered
          </button>
          <button className="filter-btn">
            <XCircle size={14} color="#ef4444" />
            Cancelled
          </button>
        </div>

        <div className="empty-state">
          <div className="icon-box" style={{ width: '48px', height: '48px', marginBottom: '12px' }}>
            <Package size={24} color="#3b82f6" />
          </div>
          <h3>No orders yet</h3>
          <p>Create your first order to get started</p>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
