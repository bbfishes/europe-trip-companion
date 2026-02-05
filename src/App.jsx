import React, { useState } from 'react';
import { itinerary } from './data';
import { Calendar, MapPin, Utensils, Navigation, ChevronRight, Info } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');

  const openMaps = (loc, lat, lng) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>歐洲之旅 2026</h1>
        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>布達佩斯 & 維也納</p>
      </header>

      <main className="content">
        {activeTab === 'itinerary' && (
          <div className="tab-itinerary">
            {itinerary.map((day, idx) => (
              <div key={idx} className="card">
                <div className="date-badge">{day.date} ({day.day})</div>
                <h2>{day.title}</h2>
                
                <div className="section-title"><Info size={16} /> 景點規劃</div>
                {day.activities.map((act, aIdx) => (
                  <div key={aIdx} className="activity">
                    <div className="activity-time">{act.time}</div>
                    <div className="activity-loc">{act.location}</div>
                    <div className="activity-desc">{act.desc}</div>
                    {act.note && <div className="note-box">💡 {act.note}</div>}
                    <button className="maps-btn" onClick={() => openMaps(act.location, act.lat, act.lng)}>
                      <Navigation size={14} /> 導航
                    </button>
                  </div>
                ))}

                <div className="section-title" style={{ marginTop: '1.5rem', color: '#e67e22' }}>
                  <Utensils size={16} /> 推薦餐廳
                </div>
                <div className="dining-list">
                  {day.dining.map((res, rIdx) => (
                    <div key={rIdx} className="dining-item">
                      <div className="dining-name">{res.name}</div>
                      <div className="dining-desc">{res.desc}</div>
                      <button className="maps-btn small" onClick={() => openMaps(res.name, res.lat, res.lng)}>
                        地點
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dining' && (
          <div className="tab-dining">
            <h2>美食匯整</h2>
            <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>旅程中所有的推薦餐廳</p>
            {itinerary.map((day) => day.dining).flat().map((res, idx) => (
              <div key={idx} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{res.name}</h3>
                </div>
                <p className="activity-desc" style={{ marginTop: '0.5rem' }}>{res.desc}</p>
                <button className="maps-btn" onClick={() => openMaps(res.name, res.lat, res.lng)}>
                  <MapPin size={16} /> 查看地點
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
          <span>全部美食</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
