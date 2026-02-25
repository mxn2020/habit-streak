export default function HeatmapPage() {
    // Generate 365 days of dummy data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
    const levels = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3]; // weighted toward active
    const days = Array.from({ length: 300 }, () => levels[Math.floor(Math.random() * levels.length)]);

    const colors = ["var(--streak-none)", "var(--streak-cool)", "var(--streak-warm)", "var(--streak-hot)"];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: 4 }}>Activity Heatmap</h1>
            <p style={{ color: "var(--color-text-secondary)", fontWeight: 600 }}>Your consistency visualized across the year.</p>
        </div>

        <div className="card" style={{ padding: "var(--space-6)", overflow: "auto" }}>
            <div style={{ display: "flex", gap: "var(--space-6)", marginBottom: "var(--space-4)" }}>
                {months.map(m => <span key={m} style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-tertiary)", width: 60, textAlign: "center" }}>{m}</span>)}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {days.map((level, i) => (
                    <div key={i} style={{
                        width: 14, height: 14,
                        borderRadius: 3,
                        background: colors[level],
                        transition: "transform 0.1s",
                        cursor: "pointer"
                    }} title={`Day ${i + 1}: ${level} habits completed`}></div>
                ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginTop: "var(--space-6)", justifyContent: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-tertiary)" }}>Less</span>
                {colors.map((c, i) => <div key={i} style={{ width: 14, height: 14, borderRadius: 3, background: c }}></div>)}
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-tertiary)" }}>More</span>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-5)", textAlign: "center" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-accent-primary)" }}>87%</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-tertiary)", marginTop: 4 }}>Yearly Completion</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)", textAlign: "center" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-warning)" }}>32</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-tertiary)", marginTop: 4 }}>Longest Streak</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)", textAlign: "center" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-success)" }}>261</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-tertiary)", marginTop: 4 }}>Active Days</div>
            </div>
        </div>
    </div>);
}
