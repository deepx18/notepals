import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import styles from "./dashboard.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardLayout}>
      <Navbar />
      <div className={styles.dashboardBody}>
        <Sidebar />
        <main className={styles.dashboardContent}>{children}</main>
      </div>
    </div>
  );
}
