import React, { useState } from 'react';
import { itinerary } from './data';
import { 
  Calendar, 
  MapPin, 
  Utensils, 
  Navigation, 
  Bus, 
  Train, 
  Camera, 
  Heart,
  ExternalLink,
  Info
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');

  const openMaps = (loc, lat, lng) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>EUROPE 2026</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
          <span><Camera size={12} /> BDP & VIE</span>
          <span><Heart size={12} color="#ef4444" fill="#ef4444" /> 2 GUESTS</span>
        </div>
      </header>

      <main className="content">
        {activeTab === 'itinerary' && (
          <div className="tab-itinerary">
            {itinerary.map((day, idx) => (
              <div key={idx} className="card">
                <div className="card-content">
                  <div className="date-badge">{day.date} · {day.day}</div>
                  <h2 className="day-title">{day.title}</h2>
                  
                  <div className="transport-box">
                    <Bus size={18} />
                    <span>{day.transport}</span>
                  </div>

                  <div className="section-divider">Spots</div>
                  {day.activities.map((act, aIdx) => (
                    <div key={aIdx} className="activity">
                      <div className="activity-header">
                        <div className="activity-loc">{act.location}</div>
                        <div className="activity-time">{act.time}</div>
                      </div>
                      <div className="activity-desc">{act.desc}</div>
                      {act.note && <div className="note-box">💡 {act.note}</div>}
                      <button className="maps-btn" onClick={() => openMaps(act.location, act.lat, act.lng)}>
                        <Navigation size={12} /> Google Maps
                      </button>
                    </div>
                  ))}

                  <div className="section-divider">Dining for Two</div>
                  <div className="dining-list">
                    {day.dining.map((res, rIdx) => (
                      <div key={rIdx} className="dining-card">
                        <div className="dining-type">{res.type}</div>
                        <div className="dining-name">{res.name}</div>
                        <div className="dining-desc">{res.desc}</div>
                        <button className="maps-btn" style={{ background: 'transparent', border: '1px solid #334155' }} onClick={() => openMaps(res.name, res.lat, res.lng)}>
                          <MapPin size={12} /> 地點
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dining' && (
          <div className="tab-dining">
            <h2 style={{ marginBottom: '1.5rem' }}>美食匯整</h2>
            {itinerary.map((day) => day.dining).flat().map((res, idx) => (
              <div key={idx} className="dining-card" style={{ padding: '1.25rem', marginBottom: '1rem', background: 'var(--card)' }}>
                <div className="dining-type">{res.type}</div>
                <h3 className="dining-name" style={{ fontSize: '1.1rem' }}>{res.name}</h3>
                <p className="dining-desc" style={{ marginBottom: '1rem' }}>{res.desc}</p>
                <button className="maps-btn" onClick={() => openMaps(res.name, res.lat, res.lng)}>
                  <MapPin size={14} /> 查看地圖
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <nav className="nav-bar">
        <div className={`nav-item ${activeTab === 'itinerary' ? 'active' : ''}`} onClick={() => setActiveTab('itinerary')}>
          <Calendar size={24} />
          <span>行程</span>
        </div>
        <div className={`nav-item ${activeTab === 'dining' ? 'active' : ''}`} onClick={() => setActiveTab('dining')}>
          <Utensils size={24} />
          <span>美食清單</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
