import AppointmentsCalendar from "@/components/dashboard/AppointmentsCalendar";
import ChatPanel from "@/components/dashboard/ChatPanel";
import DashboardIntro from "@/components/dashboard/DashboardIntro";
import PastRecording from "@/components/dashboard/PastRecording";
import PatientBillingHistory from "@/components/dashboard/PatientBillingHistory";
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
                    <DashboardIntro />
                    <AppointmentsCalendar />
                    <ChatPanel />
                    <PastRecording />
                    <PatientBillingHistory />
                </div>
            </div>
            <div className="dashboard-sidebar">
                <PatientList />
            </div>
        </div>
    );
}