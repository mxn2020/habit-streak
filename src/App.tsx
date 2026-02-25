import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HabitsDashboardPage from "./pages/HabitsDashboardPage";
import HeatmapPage from "./pages/HeatmapPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HabitsDashboardPage />} />
          <Route path="/heatmap" element={<HeatmapPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
