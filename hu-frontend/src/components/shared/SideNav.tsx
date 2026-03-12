import React from 'react';
import { Calendar, Email, VideoCamera, Bill, Setting } from '../../assets/icons/Icons';

const navItems = [
    {
        id: 'calendar',
        icon: <Calendar width={22} height={23} color="#1A1A1A" />,
        label: 'Calendar',
        badge: null,
    },
    {
        id: 'messages',
        icon: <Email width={22} height={17} color="#1A1A1A" />,
        label: 'Messages',
        badge: { text: '02', type: 'count' },
    },
    {
        id: 'recordings',
        icon: <VideoCamera width={22} height={16} color="#1A1A1A" />,
        label: 'Recordings',
        badge: null,
    },
    {
        id: 'bills',
        icon: <Bill width={15} height={20} color="#1A1A1A" />,
        label: 'Bills',
        badge: null,
    },
];

const SideNav = () => {
    return (
        <nav className="sidenav">
            <div className="sidenav-menu">
                {navItems.map((item) => (
                    <div key={item.id} className="sidenav-item">
                        <div className="sidenav-icon-wrap">
                            {item.badge && (
                                <span
                                    className={`sidenav-badge`}
                                >
                                    {item.badge.text}
                                </span>
                            )}
                            <button className="sidenav-btn" aria-label={item.label}>
                                {item.icon}
                            </button>
                        </div>
                        <span className="sidenav-label">{item.label}</span>
                    </div>
                ))}
                <div className="sidenav-avatar-wrap">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User avatar"
                        className="sidenav-avatar"
                    />
                    <button className="sidenav-setting-btn" aria-label="Settings">
                        <Setting width={11} height={11} color="#1A1A1A" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default SideNav;