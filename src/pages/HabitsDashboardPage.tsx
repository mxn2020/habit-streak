import { Flame, Plus, Check, Trophy, Target, Zap } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

export default function HabitsDashboardPage() {
    const stats = [
        { label: "Current Streak", value: "14 days", icon: Flame, color: "var(--color-accent-primary)" },
        { label: "Completion Rate", value: "87%", icon: Target, color: "var(--color-success)" },
        { label: "Best Streak", value: "32 days", icon: Trophy, color: "var(--color-warning)" },
        { label: "Total Check-ins", value: "418", icon: Zap, color: "var(--color-info)" }
    ];

    const habits = [
        { name: "Morning Meditation", emoji: "🧘", streak: 14, done: true, frequency: "Daily" },
        { name: "Read 30 Minutes", emoji: "📚", streak: 9, done: true, frequency: "Daily" },
        { name: "Exercise", emoji: "💪", streak: 14, done: false, frequency: "Daily" },
        { name: "Drink 8 Glasses Water", emoji: "💧", streak: 5, done: true, frequency: "Daily" },
        { name: "Journal", emoji: "✍️", streak: 0, done: false, frequency: "Daily" },
        { name: "Practice Guitar", emoji: "🎸", streak: 3, done: false, frequency: "3x/week" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: 4 }}>Today's Habits</h1>
                <p style={{ color: "var(--color-text-secondary)", fontWeight: 600 }}>Wednesday, October 28</p>
            </div>
            <Button variant="primary" icon={<Plus size={18} />}>Add Habit</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            {stats.map((s, i) => (
                <Card key={i} padding="lg" className="text-center">
                    <s.icon size={24} style={{ color: s.color, margin: "0 auto var(--space-2)" }} />
                    <div style={{ fontSize: "24px", fontWeight: 800 }}>{s.value}</div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-tertiary)", marginTop: 4 }}>{s.label}</div>
                </Card>
            ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {habits.map((h, i) => (
                <Card key={i} padding="md" className={h.done ? "habit-done" : ""}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                        <button style={{ width: 48, height: 48, borderRadius: "var(--radius-full)", background: h.done ? "var(--color-success)" : "var(--color-bg-tertiary)", border: "2px solid " + (h.done ? "var(--color-success)" : "var(--color-border-strong)"), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all var(--transition-fast)" }}>
                            {h.done ? <Check size={22} style={{ color: "var(--color-text-inverse)" }} /> : <span style={{ fontSize: "20px" }}>{h.emoji}</span>}
                        </button>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: "16px", textDecoration: h.done ? "line-through" : "none", opacity: h.done ? 0.7 : 1 }}>{h.name}</div>
                            <div style={{ fontSize: "13px", color: "var(--color-text-tertiary)", fontWeight: 600, marginTop: 2 }}>{h.frequency}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            {h.streak > 0 ? (
                                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--color-accent-primary)", fontWeight: 800, fontSize: "16px" }}><Flame size={16} /> {h.streak}</div>
                            ) : (
                                <span style={{ fontSize: "13px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>No streak</span>
                            )}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
