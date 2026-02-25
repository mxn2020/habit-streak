import { Bell, Clock, Shield, Palette, Save } from "lucide-react";

export default function SettingsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800 }}>Settings</h1>
            <button className="btn btn-primary"><Save size={16} /> Save</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Bell size={20} /> Reminders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div><div style={{ fontWeight: 700 }}>Daily Reminder</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Get notified to check in on your habits</div></div>
                        <div style={{ width: 48, height: 28, borderRadius: 14, background: "var(--color-accent-primary)", position: "relative", cursor: "pointer" }}><div style={{ width: 22, height: 22, borderRadius: "50%", background: "white", position: "absolute", top: 3, right: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}></div></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div><div style={{ fontWeight: 700 }}>Reminder Time</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>When should we remind you?</div></div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Clock size={16} style={{ color: "var(--color-text-tertiary)" }} /><input type="text" defaultValue="08:00 AM" style={{ width: 100, padding: "6px 10px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "inherit", fontWeight: 700, textAlign: "center" }} /></div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Palette size={20} /> Appearance</h2>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><div style={{ fontWeight: 700 }}>Week Starts On</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Set your preferred week start day</div></div>
                    <select style={{ padding: "6px 10px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "inherit", fontWeight: 700 }}>
                        <option>Monday</option><option>Sunday</option>
                    </select>
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Shield size={20} /> Data & Privacy</h2>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Your data is stored locally and never shared. Export or delete your data at any time.</p>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <button className="btn btn-sm">Export JSON</button>
                    <button className="btn btn-sm" style={{ color: "var(--color-danger)", borderColor: "var(--color-danger)" }}>Reset All Data</button>
                </div>
            </div>
        </div>
    </div>);
}
