import React from 'react';
import { LayoutDashboard, BarChart2, Map, Settings, Users, TrendingUp } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Map size={24} />
                <span>IndiaTourism</span>
            </div>

            <nav>
                <a href="#" className="nav-link active">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="nav-link">
                    <BarChart2 size={20} />
                    <span>Analytics</span>
                </a>
                <a href="#" className="nav-link">
                    <Users size={20} />
                    <span>Demographics</span>
                </a>
                <a href="#" className="nav-link">
                    <TrendingUp size={20} />
                    <span>Predictions</span>
                </a>
                <a href="#" className="nav-link" onClick={() => window.location.hash = '#explore'}>
                    <Map size={20} />
                    <span>Explore Cities</span>
                </a>
                <a href="#" className="nav-link" style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <Settings size={20} />
                    <span>Settings</span>
                </a>

            </nav>
        </div>
    );
};

export default Sidebar;
