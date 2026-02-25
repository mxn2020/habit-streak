import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HabitsDashboardPage from "../pages/HabitsDashboardPage";
import HeatmapPage from "../pages/HeatmapPage";
import SettingsPage from "../pages/SettingsPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("HabitStreak")).toBeInTheDocument(); });
    it("HabitsDashboardPage renders", () => { wrap(<HabitsDashboardPage />); expect(screen.getByText("Today's Habits")).toBeInTheDocument(); });
    it("HeatmapPage renders", () => { wrap(<HeatmapPage />); expect(screen.getByText("Activity Heatmap")).toBeInTheDocument(); });
    it("SettingsPage renders", () => { wrap(<SettingsPage />); expect(screen.getByText("Reminders")).toBeInTheDocument(); });
});
