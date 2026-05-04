import React from 'react';
import { Package, CheckSquare, Truck, XCircle, ArrowRight } from 'lucide-react';

const RoutesPage = () => {
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
          Select Shipment
        </h2>

        <div className="list-container">
          <div className="shipment-card">
            <div className="shipment-header">
              <div>
                <div className="shipment-id">SHP-1000</div>
                <div className="shipment-meta">Electronics · 482kg</div>
              </div>
              <span className="badge green" style={{ border: '1px solid rgba(34, 197, 94, 0.2)' }}>On-time</span>
            </div>

            <div className="shipment-route">
              <span className="city origin">Mumbai</span>
              <ArrowRight size={14} className="arrow" />
              <span className="city">Pune</span>
            </div>

            <div className="shipment-details">
              <div className="transport-badge">
                <Truck size={14} /> ROAD
              </div>
              <span className="eta">ETA 2h</span>
            </div>

            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '18%' }}></div>
              </div>
              <div className="progress-stats">
                <div className="coordinates">
                  <div className="dot"></div>
                  19.023, 72.971
                </div>
                <span className="progress-percent">18%</span>
              </div>
            </div>
          </div>

          <div className="shipment-card">
            <div className="shipment-header">
              <div>
                <div className="shipment-id">SHP-1001</div>
                <div className="shipment-meta">Pharmaceuticals · 1782kg</div>
              </div>
              <span className="badge green" style={{ border: '1px solid rgba(34, 197, 94, 0.2)' }}>On-time</span>
            </div>

            <div className="shipment-route">
              <span className="city origin">Delhi</span>
              <ArrowRight size={14} className="arrow" />
              <span className="city">Mumbai</span>
            </div>

            <div className="shipment-details">
              <div className="transport-badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                <Truck size={14} /> TRAIN
              </div>
              <span className="eta">ETA 8h</span>
            </div>

            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '45%', background: '#60a5fa' }}></div>
              </div>
              <div className="progress-stats">
                <div className="coordinates">
                  <div className="dot" style={{ background: '#60a5fa' }}></div>
                  28.613, 77.209
                </div>
                <span className="progress-percent" style={{ color: '#60a5fa' }}>45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
