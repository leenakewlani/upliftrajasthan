import React, { useState } from 'react';
import { cities } from '../data/cities';
import { MapPin, Star, Hotel, Utensils, Camera, ArrowRight } from 'lucide-react';

const CityExplorer = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [activeTab, setActiveTab] = useState('spots'); // spots, stay, food

    if (!selectedCity) {
        return (
            <div className="city-selection">
                <div className="header">
                    <div>
                        <h1 className="title">Explore Incredible India</h1>
                        <p className="subtitle">Select a destination to plan your trip.</p>
                    </div>
                </div>

                <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {cities.map((city) => (
                        <div key={city.id} className="card" style={{ cursor: 'pointer' }} onClick={() => setSelectedCity(city)}>
                            <div className="card-header">
                                <span className="card-title" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{city.name}</span>
                                <ArrowRight size={20} color="var(--text-secondary)" />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{city.tagline}</p>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {city.spots.length} Spots • {city.stay.length} Hotels • {city.food.length} Eateries
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const renderList = (items, icon) => (
        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {items.map((item, index) => (
                <div key={index} className="card">
                    <div className="card-header">
                        <span className="card-title" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{item.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={16} fill="var(--text-primary)" />
                            <span style={{ fontWeight: 'bold' }}>{item.rating}</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span>{item.type}</span>
                        <span>{item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="city-details">
            <div style={{ marginBottom: '2rem' }}>
                <button
                    onClick={() => setSelectedCity(null)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    ← Back to Cities
                </button>
                <h1 className="title">{selectedCity.name}</h1>
                <p className="subtitle">{selectedCity.description}</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <TabButton active={activeTab === 'spots'} onClick={() => setActiveTab('spots')} icon={Camera} label="Tourist Spots" />
                <TabButton active={activeTab === 'stay'} onClick={() => setActiveTab('stay')} icon={Hotel} label="Where to Stay" />
                <TabButton active={activeTab === 'food'} onClick={() => setActiveTab('food')} icon={Utensils} label="Where to Eat" />
            </div>

            {activeTab === 'spots' && renderList(selectedCity.spots)}
            {activeTab === 'stay' && renderList(selectedCity.stay)}
            {activeTab === 'food' && renderList(selectedCity.food)}
        </div>
    );
};

const TabButton = ({ active, onClick, icon: Icon, label }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 0.5rem',
            background: 'none',
            border: 'none',
            borderBottom: active ? '2px solid var(--text-primary)' : '2px solid transparent',
            color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
            fontWeight: active ? '600' : '400',
            transition: 'all 0.2s'
        }}
    >
        <Icon size={18} />
        {label}
    </button>
)

export default CityExplorer;
