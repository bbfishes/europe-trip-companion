import React, { useState, useEffect } from 'react';
import { itinerary, restaurants } from './data';
import { Calendar, MapPin, Utensils, Wallet, Map as MapIcon, ChevronRight, ExternalLink } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expenses, setExpenses] = useState([]);
  const [expName, setExpName] = useState('');
  const [expAmount, setExpAmount] = useState('');

  // Load expenses from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('trip_expenses');
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  // Save expenses
  useEffect(() => {
    localStorage.setItem('trip_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!expName || !expAmount) return;
    const newExp = {
      id: Date.now(),
      name: expName,
      amount: parseFloat(expAmount),
      date: new Date().toLocaleDateString()
    };
    setExpenses([newExp, ...expenses]);
    setExpName('');
    setExpAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

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
                {day.activities.map((act, aIdx) => (
                  <div key={aIdx} className="activity">
                    <div className="activity-time">{act.time}</div>
                    <div className="activity-loc">{act.location}</div>
                    <div className="activity-desc">{act.desc}</div>
                    {act.note && <div className="note-box">💡 {act.note}</div>}
                    <button className="maps-btn" onClick={() => openMaps(act.location, act.lat, act.lng)}>
                      <MapPin size={16} /> 導航
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dining' && (
          <div className="tab-dining">
            <h2>美食清單</h2>
            <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>布達佩斯與維也納精選餐廳</p>
            {restaurants.map((res, idx) => (
              <div key={idx} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{res.name}</h3>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{res.city}</span>
                </div>
                <p className="activity-desc" style={{ marginTop: '0.5rem' }}>{res.desc}</p>
                <button className="maps-btn" onClick={() => openMaps(res.name, res.lat, res.lng)}>
                  <MapPin size={16} /> 查看地點
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'expenses' && (
          <div className="tab-expenses">
            <div className="total-box">
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>目前總支出</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>€ {totalExpense.toFixed(2)}</div>
            </div>

            <div className="card" style={{ marginTop: '1.5rem' }}>
              <h3>新增記帳</h3>
              <div className="expense-input-group" style={{ marginTop: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="項目 (如: 晚餐)" 
                  value={expName}
                  onChange={(e) => setExpName(e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="金額 (€)" 
                  value={expAmount}
                  onChange={(e) => setExpAmount(e.target.value)}
                />
              </div>
              <button style={{ width: '100%' }} onClick={addExpense}>新增</button>
            </div>

            <div className="card">
              <h3>紀錄明細</h3>
              <div style={{ marginTop: '1rem' }}>
                {expenses.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#64748b', padding: '1rem' }}>尚無紀錄</p>
                ) : (
                  expenses.map(e => (
                    <div key={e.id} className="expense-item">
                      <div>
                        <div style={{ fontWeight: 600 }}>{e.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{e.date}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontWeight: 'bold' }}>€{e.amount.toFixed(2)}</span>
                        <button 
                          style={{ background: '#fee2e2', color: '#ef4444', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                          onClick={() => deleteExpense(e.id)}
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
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
          <span>美食</span>
        </div>
        <div className={`nav-item ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>
          <Wallet size={24} />
          <span>記帳</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
