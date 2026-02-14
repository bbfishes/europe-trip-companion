import React, { useState, useEffect } from 'react';
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
  Info,
  Search,
  Sun,
  Moon,
  RefreshCw,
  Wifi,
  WifiOff
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [weatherLoading, setWeatherLoading] = useState({});

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Online/Offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Fetch weather for cities
  useEffect(() => {
    const cities = {
      'Dubai': { lat: 25.2048, lng: 55.2708 },
      'Budapest': { lat: 47.4979, lng: 19.0402 },
      'Vienna': { lat: 48.2082, lng: 16.3738 }
    };
    
    Object.entries(cities).forEach(([city, coords]) => {
      setWeatherLoading(prev => ({ ...prev, [city]: true }));
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeather(prev => ({ ...prev, [city]: data.current_weather }));
          setWeatherLoading(prev => ({ ...prev, [city]: false }));
        })
        .catch(() => setWeatherLoading(prev => ({ ...prev, [city]: false })));
    });
  }, []);

  const openMaps = (loc) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}`;
    window.open(url, '_blank');
  };

  const scrollToDay = (idx) => {
    const element = document.getElementById(`day-${idx}`);
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Search functionality
  const searchItems = searchQuery.trim() ? itinerary.map(day => ({
    day: day.title,
    date: day.date,
    items: [
      ...day.activities.map(a => ({ type: '景點', name: a.location, desc: a.desc })),
      ...day.dining.map(d => ({ type: '餐廳', name: d.name, desc: d.desc }))
    ]
  })).filter(d => 
    d.items.some(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ) : [];

  const travelNotes = [
    {
      city: '杜拜 (Dubai)',
      currency: '阿聯酋迪拉姆 (AED)',
      weather: weather['Dubai'] ? `${weather['Dubai'].temperature}°C` : '載入中...',
      weatherLoading: weatherLoading['Dubai'],
      transport: '建議使用地鐵 (Metro) 或計程車/Careem/Uber。需購買 Nol Card。',
      plug: '230V / 50Hz / 插頭為 G 型 (英標三平頭)。',
      notes: '進入購物中心或餐廳建議帶薄外套（冷氣極強）。遵守當地服裝規定（肩膀、膝蓋）。'
    },
    {
      city: '布達佩斯 (Budapest)',
      currency: '匈牙利福林 (HUF) / 歐元亦通但匯率較差',
      weather: weather['Budapest'] ? `${weather['Budapest'].temperature}°C` : '載入中...',
      weatherLoading: weatherLoading['Budapest'],
      transport: '地鐵 M1, M2, M3 交會於 Deák Ferenc tér。電車與地鐵皆可買單程票或日票。',
      plug: '230V / 50Hz / 插頭為 C 型 & F 型 (歐標雙圓頭)。',
      notes: '推薦去賽切尼溫泉，Deák Ferenc tér 附近生活機能極佳。記得攜帶泳衣。'
    },
    {
      city: '維也納 (Vienna)',
      currency: '歐元 (EUR)',
      weather: weather['Vienna'] ? `${weather['Vienna'].temperature}°C` : '載入中...',
      weatherLoading: weatherLoading['Vienna'],
      transport: '大眾運輸發達 (U-Bahn, S-Bahn, 電車)。可購買維也納卡 (Vienna City Card)。',
      plug: '230V / 50Hz / 插頭為 C 型 & F 型 (歐標雙圓頭)。',
      notes: '週日大多數商店不營業。參觀美泉宮或藝術史博物館建議提前預約。水龍頭水可直接飲用。'
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="Header">
        <div className="header-top">
          <h1>EUROPE 2026</h1>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        {!isOnline && (
          <div className="offline-banner">
            <WifiOff size={14} /> 離線模式 - 部分功能可能無法使用
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
          <span><Camera size={12} /> BDP & VIE</span>
          <span><Heart size={12} color="#ef4444" fill="#ef4444" /> 2 GUESTS</span>
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="搜尋餐廳、景點..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {activeTab === 'itinerary' && (
          <div className="day-tabs">
            {itinerary.map((day, idx) => (
              <div 
                key={idx} 
                className="day-tab-item" 
                onClick={() => scrollToDay(idx)}
              >
                <div className="day-tab-date">{day.date.split('/')[1]}</div>
                <div className="day-tab-name">{day.day}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      <main className="content">
        {/* Search Results */}
        {searchQuery && (
          <div className="search-results">
            <h3>搜尋結果</h3>
            {searchItems.length === 0 ? (
              <p className="no-results">找不到符合的結果</p>
            ) : (
              searchItems.map((item, idx) => (
                <div key={idx} className="search-result-item">
                  <div className="result-day">{item.date} - {item.day}</div>
                  {item.items.filter(i => 
                    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    i.desc.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((result, rIdx) => (
                    <div key={rIdx} className="result-content">
                      <span className={`result-type ${result.type === '餐廳' ? 'dining' : 'attraction'}`}>
                        {result.type}
                      </span>
                      <strong>{result.name}</strong>
                      <p>{result.desc}</p>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        )}

        {!searchQuery && activeTab === 'itinerary' && (
          <div className="tab-itinerary">
            {itinerary.map((day, idx) => (
              <div key={idx} id={`day-${idx}`} className="card">
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
                      <button className="maps-btn" onClick={() => openMaps(act.location)}>
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
                        <button className="maps-btn" style={{ background: 'transparent', border: '1px solid #334155' }} onClick={() => openMaps(res.name)}>
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

        {!searchQuery && activeTab === 'dining' && (
          <div className="tab-dining">
            <h2 style={{ marginBottom: '1.5rem' }}>美食匯整</h2>
            {itinerary.map((day) => day.dining).flat().map((res, idx) => (
              <div key={idx} className="dining-card" style={{ padding: '1.25rem', marginBottom: '1rem', background: 'var(--card)' }}>
                <div className="dining-type">{res.type}</div>
                <h3 className="dining-name" style={{ fontSize: '1.1rem' }}>{res.name}</h3>
                <p className="dining-desc" style={{ marginBottom: '1rem' }}>{res.desc}</p>
                <button className="maps-btn" onClick={() => openMaps(res.name)}>
                  <MapPin size={14} /> 查看地圖
                </button>
              </div>
            ))}
          </div>
        )}

        {!searchQuery && activeTab === 'notes' && (
          <div className="tab-notes">
            <h2 style={{ marginBottom: '1.5rem' }}>旅遊注意事項</h2>
            {travelNotes.map((note, idx) => (
              <div key={idx} className="card" style={{ marginBottom: '1.5rem' }}>
                <div className="card-content">
                  <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>
                    {note.city}
                    {note.weatherLoading ? (
                      <RefreshCw size={14} className="weather-loading" />
                    ) : (
                      <span className="weather-badge">☀️ {note.weather}</span>
                    )}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                    <div><strong>💰 貨幣：</strong> {note.currency}</div>
                    <div><strong>☁️ 氣候：</strong> {note.weatherLoading ? '載入中...' : note.weather}</div>
                    <div><strong>🚌 交通：</strong> {note.transport}</div>
                    <div><strong>🔌 電器插頭：</strong> {note.plug}</div>
                    <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'var(--card)', borderRadius: '8px', borderLeft: '4px solid #60a5fa' }}>
                      <strong>📝 注意：</strong> {note.notes}
                    </div>
                  </div>
                </div>
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
        <div className={`nav-item ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>
          <Info size={24} />
          <span>注意事項</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
