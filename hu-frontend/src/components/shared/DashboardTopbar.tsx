
import { logo } from '@/assets/images';
import { Bell, Video, Clock } from '../../assets/icons/Icons';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const DashboardTopbar = () => {
    return (
        <header className="dashboard-topbar">
            <div className="topbar-left">
                <Button className="notification-btn" variant="light">
                    <Bell width={16} height={17} color="#9B9B9B" />
                    <span className="notification-dot" />
                </Button>

                <div className="today-sessions">
                    <span className="sessions-count">03</span>
                    <span className="sessions-text">Sessions Today</span>
                </div>
                <div className="session-card">
                    <div className="session-avatar-wrap">
                        <div className="session-avatar">
                            <img
                                width={32}
                                height={32}
                                src="https://randomuser.me/api/portraits/women/50.jpg"
                                alt="Amanda Zalka"
                            />
                        </div>
                        <span className="session-video-icon">
                            <Video width={13} height={11} color="#1A1A1A" />
                        </span>
                    </div>

                    <div className="session-info">
                        <p className="session-name">Amanda Zalka</p>
                        <p className="session-time">Now, 09:00 AM PST (30 min)</p>
                    </div>

                    <Button className="join-btn">
                        <Clock width={13} height={13} color="#ffffff" />
                        <span>Join in 4 mins</span>
                    </Button>
                </div>
            </div>
            <div className="dashboard-logo">
                <Link href="/">
                    <Image src={logo} width={76} height={50} alt="hu logo" />
                </Link>
            </div>
        </header>
    );
};

export default DashboardTopbar;