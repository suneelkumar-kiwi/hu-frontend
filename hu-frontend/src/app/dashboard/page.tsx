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
                <div className="dashboard-content">
                    <SideNav />
                </div>
            </div>
            <div className="dashboard-sidebar">
                <PatientList />
            </div>
        </div>
    );
}