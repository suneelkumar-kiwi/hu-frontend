import DashboardTopbar from "@/components/shared/DashboardTopbar";
import PatientList from "@/components/shared/PatientList";
import SideNav from "@/components/shared/SideNav";

export default function DashboardPage() {
    return (
        <div className="dashboard-page">
            <div className="dashboard-main">
                <div className="dashboard-header">
                    <DashboardTopbar />
                </div>
                <SideNav />
                <div className="dashboard-content">
                    <h1> Welcome, Dr. Eve </h1>
                </div>
            </div>
            <div className="dashboard-sidebar">
                <PatientList />
            </div>
        </div>
    );
}