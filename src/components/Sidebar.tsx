import { Link, useLocation } from "react-router-dom";
import { Flame, Grid3X3, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Flame, label: "My Habits" },
        { to: "/heatmap", icon: Grid3X3, label: "Heatmap" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ fontSize: "28px" }}>🔥</div>
            <div>
                <strong style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px" }}>HabitStreak</strong>
                <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>Build Better Habits</div>
            </div>
        </div>

        <nav style={{ padding: "var(--space-3)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 16px", borderRadius: "var(--radius-full)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 800 : 600, fontSize: "15px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "13px", fontWeight: 700, color: "var(--color-accent-primary)" }}>
                <Flame size={16} /> 14-day streak!
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
