import React from 'react';
import { LayoutDashboard, Map } from 'lucide-react';

const Landing = ({ onSelect }) => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '1rem', background: 'var(--bg-secondary)' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>IndiaTourism</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Select you experience</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%', maxWidth: '800px' }}>
                <div
                    className="card"
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem', gap: '1rem' }}
                    onClick={() => onSelect('dashboard')}
                >
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%' }}>
                        <LayoutDashboard size={48} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem' }}>Analytics Dashboard</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>For tourism officials to track footfall, insights, and demographics.</p>
                </div>

                <div
                    className="card"
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem', gap: '1rem' }}
                    onClick={() => onSelect('explore')}
                >
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%' }}>
                        <Map size={48} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem' }}>Explore India</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>For tourists to find best spots, hotels, and food places.</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
