import { Bell, Clock, Shield, Palette, Save } from "lucide-react";
import { Button, Card, Input, Select, SelectItem, Switch } from "@geenius-ui/react-css";

export default function SettingsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800 }}>Settings</h1>
            <Button variant="primary" icon={<Save size={16} />}>Save</Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card padding="lg">
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Bell size={20} /> Reminders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div><div style={{ fontWeight: 700 }}>Daily Reminder</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Get notified to check in on your habits</div></div>
                        <Switch defaultChecked />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div><div style={{ fontWeight: 700 }}>Reminder Time</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>When should we remind you?</div></div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Clock size={16} style={{ color: "var(--color-text-tertiary)" }} /><Input type="text" defaultValue="08:00 AM" style={{ width: 100, textAlign: "center" }} /></div>
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Palette size={20} /> Appearance</h2>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><div style={{ fontWeight: 700 }}>Week Starts On</div><div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Set your preferred week start day</div></div>
                    <Select defaultValue="Monday">
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Sunday">Sunday</SelectItem>
                    </Select>
                </div>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Shield size={20} /> Data & Privacy</h2>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Your data is stored locally and never shared. Export or delete your data at any time.</p>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <Button variant="outline" size="sm">Export JSON</Button>
                    <Button variant="destructive" size="sm">Reset All Data</Button>
                </div>
            </Card>
        </div>
    </div>);
}
