import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Card from '../components/Card';
import { Users, Clock, Smile, MapPin } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, Filler);

const Dashboard = () => {
    // Mock Data
    const footfallData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Footfall (2024)',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#18181b', // Black
                backgroundColor: 'rgba(24, 24, 27, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const demographicsData = {
        labels: ['Domestic', 'International'],
        datasets: [
            {
                data: [75, 25],
                backgroundColor: ['#18181b', '#d4d4d8'], // Black and Light Grey
                borderWidth: 0,
            },
        ],
    };

    const hourlyData = {
        labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'],
        datasets: [
            {
                label: 'Visitors',
                data: [50, 150, 400, 350, 200, 300, 100],
                backgroundColor: '#52525b', // Dark Grey
                borderRadius: 4,
            },
        ],
    };

    const optionsCommon = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderDash: [5, 5],
                },
            },
        },
    };

    const donutOptions = {
        ...optionsCommon,
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }

    return (
        <div className="dashboard">
            <div className="header">
                <div>
                    <h1 className="title">Dashboard</h1>
                    <p className="subtitle">Overview of tourism analytics and footfall.</p>
                </div>
                <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Last updated: Today, 12:30 PM</span>
                </div>
            </div>

            <div className="metrics-grid">
                <Card title="Total Footfall" value="30,245" trend="up" trendValue="12%" icon={Users} />
                <Card title="Avg Dwell Time" value="2h 15m" trend="up" trendValue="5%" icon={Clock} />
                <Card title="Satisfaction" value="4.8/5" trend="up" trendValue="0.2" icon={Smile} />
                <Card title="Top Destination" value="Jaipur" trend="down" trendValue="2%" icon={MapPin} />
            </div>

            <div className="charts-grid">
                <div className="card charts-full">
                    <div className="card-header">
                        <span className="card-title">Footfall Trends (6 Months)</span>
                    </div>
                    <div className="chart-container">
                        <Line data={footfallData} options={optionsCommon} />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Visitor Demographics</span>
                    </div>
                    <div className="chart-container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '70%' }}>
                            <Doughnut data={demographicsData} options={donutOptions} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Peak Hours (Avg)</span>
                    </div>
                    <div className="chart-container">
                        <Bar data={hourlyData} options={optionsCommon} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <span className="card-title">AI Insights</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '0.5rem', borderLeft: '4px solid var(--text-primary)' }}>
                        <strong>Prediction:</strong> Footfall expected to increase by 15% next weekend due to holiday season.
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '0.5rem', borderLeft: '4px solid var(--text-secondary)' }}>
                        <strong>Anomaly:</strong> Unexpected dip in international visitors in Sector 4 yesterday.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
