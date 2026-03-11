import DashboardTopbar from "@/components/shared/DashboardTopbar";
import PatientList from "@/components/shared/PatientList";
import SideNav from "@/components/shared/SideNav";

export default function DashboardPage() {
    return (
        <div className="dashboard-page">
            <SideNav />
            <DashboardTopbar />
            <PatientList />
        </div>
    );
}