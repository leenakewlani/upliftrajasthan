import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Card = ({ title, value, trend, trendValue, icon: Icon }) => {
    const isPositive = trend === 'up';

    return (
        <div className="card">
            <div className="card-header">
                <span className="card-title">{title}</span>
                {Icon && <Icon size={20} color="var(--text-secondary)" />}
            </div>
            <div className="card-value">{value}</div>
            {trend && (
                <div className={`card-trend ${isPositive ? 'trend-up' : 'trend-down'}`}>
                    {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    <span>{trendValue} vs last month</span>
                </div>
            )}
        </div>
    );
};

export default Card;
