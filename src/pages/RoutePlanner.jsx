import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import { Search, Maximize2, Crosshair, Map as MapIcon } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const RoutePlanner = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 150px)', margin: '-20px', overflow: 'hidden' }}>
      {/* Floating Search Bar */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        right: '20px', 
        zIndex: 1000,
        background: 'rgba(15, 17, 26, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}>
        <Search size={20} color="#8b92a5" />
        <input 
          type="text" 
          placeholder="Search origin & destination..." 
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'white',
            width: '100%',
            fontSize: '15px'
          }}
        />
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '8px', cursor: 'pointer' }}>
          <Maximize2 size={16} color="#8b92a5" />
        </div>
      </div>

      {/* Map Controls Floating Right */}
      <div style={{ 
        position: 'absolute', 
        right: '20px', 
        top: '90px', 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{
          background: 'rgba(15, 17, 26, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}>
          <Crosshair size={20} color="#3b82f6" />
        </div>
      </div>

      <div style={{ 
        position: 'absolute', 
        right: '20px', 
        bottom: '20px', 
        zIndex: 1000,
      }}>
        <div style={{
          background: 'rgba(15, 17, 26, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}>
          <MapIcon size={24} color="#fcd34d" />
        </div>
      </div>

      {/* Map */}
      <MapContainer 
        center={[20.5937, 78.9629]} 
        zoom={5} 
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topleft" />
      </MapContainer>
    </div>
  );
};

export default RoutePlanner;
